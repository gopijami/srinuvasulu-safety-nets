import { BalconySafetyNetsPage } from "./balcony-safety-nets";
import type { UltraServiceLocationPage } from "../type/ultra-location-service";

type BasicLocation = {
  slug: string;
  name: string;
};

type BasicService = {
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  category: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  variants: string[];
  sectionTemplates: { header: string; content: string }[];
  highlights: string[];
  applications: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  gallery: {
    title: string;
    description: string;
    image: string;
    alt: string;
  }[];
  materialFocus: string[];
  trustFocus: string[];
};

export type UltraClientPageData = {
  service: BasicService;
  location: BasicLocation;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  sections: { header: string; content: string }[];
  highlights: string[];
  applications: string[];
  faqs: { question: string; answer: string }[];
  nearbyLocations: BasicLocation[];
  similarProducts: BasicService[];
  conclusion: string;
  trustCards: string[];
  statCards: { label: string; value: string }[];
  trustBuilderItems: string[];
  cta: {
    eyebrow: string;
    title: string;
    body: string;
  };
  nearbyIntro: string;
  similarIntro: string;
  faqHeading: string;
  applicationHeading: string;
  highlightsHeading: string;
  coverageHeading: string;
  coverageBody: string;
  breadcrumbLabel: string;
  seo?: UltraServiceLocationPage["seo"];
  localityIntelligence?: UltraServiceLocationPage["localityIntelligence"];
  audienceIntent?: UltraServiceLocationPage["audienceIntent"];
  contentBlocksRaw?: UltraServiceLocationPage["contentBlocks"];
  uniquenessAssets?: UltraServiceLocationPage["uniquenessAssets"];
  schemaSupport?: UltraServiceLocationPage["schemaSupport"];
  extra?: UltraServiceLocationPage["extra"];
};

function toTitleCase(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function areaNameFromSlug(area: string) {
  return toTitleCase(area);
}

function buildGallery(entry: UltraServiceLocationPage) {
  const directGallery = entry.serviceIdentity.gallery ?? entry.extra?.gallery ?? [];
  const fallback = [entry.extra?.media?.heroImage, entry.extra?.media?.cardImage, entry.extra?.media?.ogImage]
    .filter((item): item is string => Boolean(item));
  const images = directGallery.length > 0 ? directGallery : fallback;
  const variants = entry.serviceIdentity.variants;
  const galleryMeta = entry.extra?.galleryMeta ?? [];

  return images.map((image, index) => ({
    title: galleryMeta[index]?.title ?? variants[index] ?? `${entry.serviceIdentity.shortName} View ${index + 1}`,
    description:
      galleryMeta[index]?.description ??
      (index === 0
        ? entry.serviceIdentity.heroDescription
        : index === 1
          ? entry.contentBlocks.trustNarrative
          : entry.contentBlocks.closingPitch),
    image,
    alt:
      galleryMeta[index]?.alt ??
      `${entry.serviceIdentity.shortName} in ${areaNameFromSlug(entry.area)} ${index + 1}`,
  }));
}

function buildSections(entry: UltraServiceLocationPage) {
  const areaName = areaNameFromSlug(entry.area);
  const blocks = entry.contentBlocks;

  return [
    {
      header: `Why ${entry.serviceIdentity.shortName} matters in ${areaName}`,
      content: blocks.whyThisServiceMattersHere,
    },
    {
      header: `Why ${areaName} homes need this protection`,
      content: blocks.areaNeedExplanation,
    },
    {
      header: `Who needs ${entry.serviceIdentity.shortName.toLowerCase()} the most in ${areaName}`,
      content: blocks.whoNeedsItMost,
    },
    {
      header: `What problems ${entry.serviceIdentity.shortName.toLowerCase()} prevents`,
      content: blocks.whatProblemsItPrevents,
    },
    {
      header: `Why professional installation matters in ${areaName}`,
      content: blocks.whyThisAreaNeedsProfessionalInstallation.join(" "),
    },
    {
      header: `How buyers compare options in ${areaName}`,
      content: blocks.comparisonPoints.join(" "),
    },
    {
      header: `Buying guide for ${entry.serviceIdentity.shortName.toLowerCase()} in ${areaName}`,
      content: blocks.buyingGuide.join(" "),
    },
  ];
}

function buildApplications(entry: UltraServiceLocationPage) {
  return [
    ...entry.localityIntelligence.areaProfile.balconyUseCases,
    ...entry.localityIntelligence.areaProfile.commonPropertyTypes.slice(0, 3),
  ].slice(0, 8);
}

function buildNearbyLocations(entry: UltraServiceLocationPage) {
  if (entry.extra?.nearbyAreas?.length) {
    return entry.extra.nearbyAreas.slice(0, 6);
  }

  return BalconySafetyNetsPage.filter(
    (item) => item.serviceKey === entry.serviceKey && item.area !== entry.area,
  )
    .slice(0, 6)
    .map((item) => ({
      slug: item.area,
      name: areaNameFromSlug(item.area),
    }));
}

function buildSimilarProducts(entry: UltraServiceLocationPage): BasicService[] {
  const areaName = areaNameFromSlug(entry.area);

  if (entry.extra?.similarServices?.length) {
    return entry.extra.similarServices.map((item) => ({
      slug: item.slug,
      name: item.name,
      shortName: item.shortName,
      badge: item.badge,
      category: item.category,
      heroTitle: `${item.shortName} in ${areaName}`,
      heroDescription: item.heroDescription,
      intro: "",
      variants: [],
      sectionTemplates: [],
      highlights: [],
      applications: [],
      faqs: [],
      relatedSlugs: [],
      gallery: buildGallery(entry),
      materialFocus: [],
      trustFocus: [],
    }));
  }

  const fallbacks: Record<string, BasicService> = {
    "children-safety-nets": {
      slug: "children-safety-nets",
      name: "Children Safety Nets",
      shortName: "Children Safety Nets",
      badge: "Little Ones Protection",
      category: "Home Safety Solutions",
      heroTitle: `Children safety nets in ${areaName}`,
      heroDescription: `Useful for families in ${areaName} who want safer balconies, windows, and open edges for active children.`,
      intro: "",
      variants: [],
      sectionTemplates: [],
      highlights: [],
      applications: [],
      faqs: [],
      relatedSlugs: [],
      gallery: buildGallery(entry),
      materialFocus: [],
      trustFocus: [],
    },
    "pet-safety-nets": {
      slug: "pet-safety-nets",
      name: "Pet Safety Nets",
      shortName: "Pet Safety Nets",
      badge: "Comfort for Curious Pets",
      category: "Home Safety Solutions",
      heroTitle: `Pet safety nets in ${areaName}`,
      heroDescription: `A practical upgrade for pet-friendly homes in ${areaName} that want safer balcony access without blocking air or light.`,
      intro: "",
      variants: [],
      sectionTemplates: [],
      highlights: [],
      applications: [],
      faqs: [],
      relatedSlugs: [],
      gallery: buildGallery(entry),
      materialFocus: [],
      trustFocus: [],
    },
    "invisible-grills": {
      slug: "invisible-grills",
      name: "Invisible Grills Installation",
      shortName: "Invisible Grills",
      badge: "Royal Safety Collection",
      category: "Premium Balcony Protection",
      heroTitle: `Invisible grills in ${areaName}`,
      heroDescription: `A premium safety option for ${areaName} homes that want open views, elegant design, and stronger balcony confidence.`,
      intro: "",
      variants: [],
      sectionTemplates: [],
      highlights: [],
      applications: [],
      faqs: [],
      relatedSlugs: [],
      gallery: buildGallery(entry),
      materialFocus: [],
      trustFocus: [],
    },
  };

  return entry.serviceIdentity.relatedSlugs
    .map((slug) => fallbacks[slug])
    .filter((item): item is BasicService => Boolean(item));
}

export function findUltraServicePage(serviceSlug: string, locationSlug: string) {
  return (
    BalconySafetyNetsPage.find(
      (item) => item.serviceKey === serviceSlug && item.area === locationSlug,
    ) ?? null
  );
}

export function buildUltraServicePageData(
  serviceSlug: string,
  locationSlug: string,
): UltraClientPageData | null {
  const entry = findUltraServicePage(serviceSlug, locationSlug);

  if (!entry) {
    return null;
  }

  const areaName = areaNameFromSlug(entry.area);
  const gallery = buildGallery(entry);
  const nearbyLocations = buildNearbyLocations(entry);
  const similarProducts = buildSimilarProducts(entry);
  const localStats = entry.uniquenessAssets.localStats;
  const firstCta = entry.uniquenessAssets.ctaBlocks[0];

  const service: BasicService = {
    slug: entry.serviceKey,
    name: entry.seo.h1,
    shortName: entry.serviceIdentity.shortName,
    badge: entry.serviceIdentity.badge,
    category: entry.serviceIdentity.category,
    heroTitle: entry.serviceIdentity.heroTitle,
    heroDescription: entry.serviceIdentity.heroDescription,
    intro: entry.serviceIdentity.intro,
    variants: entry.serviceIdentity.variants,
    sectionTemplates: [],
    highlights: entry.contentBlocks.benefits,
    applications: buildApplications(entry),
    faqs: entry.uniquenessAssets.faqs.map((faq) => ({
      question: faq.q,
      answer: faq.a,
    })),
    relatedSlugs: entry.serviceIdentity.relatedSlugs,
    gallery,
    materialFocus: entry.serviceIdentity.materialFocus,
    trustFocus: entry.serviceIdentity.trustFocus,
  };

  const location: BasicLocation = {
    slug: entry.area,
    name: areaName,
  };

  return {
    service,
    location,
    heroTitle: entry.serviceIdentity.heroTitle,
    heroDescription: entry.serviceIdentity.heroDescription,
    intro: entry.serviceIdentity.intro,
    sections: buildSections(entry),
    highlights: [
      ...entry.contentBlocks.benefits.slice(0, 4),
      ...entry.extra?.quickHighlights?.slice(0, 2) ?? [],
    ].slice(0, 6),
    applications: buildApplications(entry),
    faqs: entry.uniquenessAssets.faqs.map((faq) => ({
      question: faq.q,
      answer: faq.a,
    })),
    nearbyLocations,
    similarProducts,
    conclusion: `${entry.contentBlocks.trustNarrative} ${entry.contentBlocks.closingPitch}`,
    trustCards: [
      entry.serviceIdentity.trustFocus[0],
      entry.serviceIdentity.trustFocus[1],
      entry.serviceIdentity.trustFocus[2] ?? entry.localityIntelligence.hyperlocalSignals[0],
    ].filter(Boolean),
    statCards: localStats.slice(0, 3).map((item) => ({
      label: item.label,
      value: item.value,
    })),
    trustBuilderItems: [
      ...entry.audienceIntent.reassurancePoints.slice(0, 2),
      ...entry.schemaSupport.offerHighlights.slice(0, 2),
    ],
    cta: {
      eyebrow: `${entry.serviceIdentity.shortName} in ${areaName}`,
      title: firstCta?.title ?? `Book ${entry.serviceIdentity.shortName} in ${areaName}`,
      body:
        firstCta?.description ??
        `Book a free inspection for ${entry.serviceIdentity.shortName.toLowerCase()} in ${areaName}, Hyderabad.`,
    },
    nearbyIntro: `Explore nearby Hyderabad areas where customers also search for ${entry.seo.primaryKeyword} and related family-safety services.`,
    similarIntro: `Customers comparing ${entry.serviceIdentity.shortName.toLowerCase()} in ${areaName} also review these related services before booking a site visit.`,
    faqHeading: `${entry.serviceIdentity.shortName} FAQs for ${areaName}`,
    applicationHeading: `${entry.serviceIdentity.shortName} applications in ${areaName}`,
    highlightsHeading: `${entry.serviceIdentity.shortName} highlights for ${areaName}`,
    coverageHeading: `Why ${entry.serviceIdentity.shortName.toLowerCase()} content should stay local in ${areaName}`,
    coverageBody: `${entry.contentBlocks.areaNeedExplanation} ${entry.contentBlocks.whatProblemsItPrevents}`,
    breadcrumbLabel: `${entry.serviceIdentity.shortName} in ${areaName}`,
    seo: entry.seo,
    localityIntelligence: entry.localityIntelligence,
    audienceIntent: entry.audienceIntent,
    contentBlocksRaw: entry.contentBlocks,
    uniquenessAssets: entry.uniquenessAssets,
    schemaSupport: entry.schemaSupport,
    extra: entry.extra,
  };
}
