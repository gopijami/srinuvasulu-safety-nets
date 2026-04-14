export type SearchIntentMix = {
  commercial: string[];
  informational: string[];
  navigational: string[];
  transactional: string[];
};

export type LocalStat = {
  label: string;
  value: string;
  context: string;
};

export type TestimonialAngle = {
  title: string;
  quote: string;
  customerType: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type CTAItem = {
  title: string;
  description: string;
  actionLabel: string;
};

export type ExtraServiceUIData = {
  gallery?: string[];
  galleryMeta?: {
    title: string;
    description: string;
    alt: string;
  }[];
  searchTerms?: string[];
  nearbyAreas?: {
    slug: string;
    name: string;
  }[];
  similarServices?: {
    slug: string;
    name: string;
    shortName: string;
    badge: string;
    category: string;
    heroDescription: string;
  }[];
  media?: {
    heroImage?: string;
    ogImage?: string;
    cardImage?: string;
    video?: string;
  };
  quickHighlights?: string[];
};

export type UltraServiceBase = {
  shortName: string;
  badge: string;
  category: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  variants: string[];
  relatedSlugs: string[];
  gallery?: string[];
  materialFocus: string[];
  trustFocus: string[];
  searchTerms?: string[];
  commercialHooks: string[];
  problemFocus: string;
  weatherStrength: string;
  installDetail: string;
  urgencyLine: string;
  maintenanceLine: string;
};

export type UltraServiceLocationPage = {
  slug: string;
  serviceKey: string;
  city: string;
  area: string;
  pageType: string;

  seo: {
    primaryKeyword: string;
    secondaryKeywords: string[];
    searchIntentMix: SearchIntentMix;
    title: string;
    metaDescription: string;
    h1: string;
    canonicalPath: string;
  };

  serviceIdentity: UltraServiceBase;

  localityIntelligence: {
    cityProfile: {
      cityName: string;
      cityTone: string;
      climateNotes: string[];
      housingPattern: string[];
      serviceDemandReason: string[];
    };
    areaProfile: {
      areaName: string;
      areaCharacter: string;
      commonPropertyTypes: string[];
      residentTypes: string[];
      localPainPoints: string[];
      balconyUseCases: string[];
      environmentalTriggers: string[];
    };
    nearbyLandmarks: string[];
    nearbySocieties: string[];
    hyperlocalSignals: string[];
  };

  audienceIntent: {
    primaryAudiences: string[];
    whyTheyBuy: string[];
    fearTriggers: string[];
    decisionTriggers: string[];
    objections: string[];
    reassurancePoints: string[];
  };

  contentBlocks: {
    whyThisServiceMattersHere: string;
    areaNeedExplanation: string;
    whoNeedsItMost: string;
    whatProblemsItPrevents: string;
    benefits: string[];
    ifIgnoredDrawbacks: string[];
    whyThisAreaNeedsProfessionalInstallation: string[];
    comparisonPoints: string[];
    buyingGuide: string[];
    trustNarrative: string;
    closingPitch: string;
  };

  uniquenessAssets: {
    localStats: LocalStat[];
    testimonialAngles: TestimonialAngle[];
    faqs: FAQItem[];
    ctaBlocks: CTAItem[];
  };

  schemaSupport: {
    serviceType: string;
    serviceArea: string[];
    landmarkReferences: string[];
    offerHighlights: string[];
  };

  extra?: ExtraServiceUIData;
};
