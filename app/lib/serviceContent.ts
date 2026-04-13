import { locationsServices } from "../components/constants/services";
import { hyderabadLocations } from "../components/constants/locations";

export type ServiceSectionTemplate = {
  header: string;
  content: string;
};

export type ServiceDefinition = {
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  category: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  variants: string[];
  sectionTemplates: ServiceSectionTemplate[];
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

export type LocationDefinition = {
  slug: string;
  name: string;
};

type ServiceLocationContent = {
  service: ServiceDefinition;
  location: LocationDefinition;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  sections: ServiceSectionTemplate[];
  highlights: string[];
  applications: string[];
  faqs: { question: string; answer: string }[];
  nearbyLocations: LocationDefinition[];
  similarProducts: ServiceDefinition[];
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
};

type ServiceSeed = Omit<
  ServiceDefinition,
  "sectionTemplates" | "highlights" | "applications" | "faqs"
> & {
  searchTerms: string[];
  commercialHooks: string[];
  problemFocus: string;
  weatherStrength: string;
  installDetail: string;
  urgencyLine: string;
  maintenanceLine: string;
};

type LocationContext = {
  market: string;
  microMarket: string;
  weather: string;
  landmark: string;
  structure: string;
  buyerIntent: string;
  localityProof: string;
  commercialLine: string;
  conclusionLine: string;
};

const CITY_IMAGES = {
  interiors: [
    {
      title: "Royal Balcony Safety",
      description: "A premium residential scene that keeps elegance, airflow, and practical safety in balance.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      alt: "Elegant modern apartment balcony and living area",
    },
    {
      title: "Open View Comfort",
      description: "Warm cinematic interiors that match premium apartments and luxury family homes.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury residential room with warm lighting",
    },
    {
      title: "Premium Family Living",
      description: "Refined spaces where safety upgrades need to feel modern, neat, and trustworthy.",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      alt: "Elegant premium bedroom interior",
    },
  ],
  exteriors: [
    {
      title: "Clean Facade Presence",
      description: "Protection systems that support neat apartment exteriors and more usable openings.",
      image:
        "https://images.unsplash.com/photo-1600607687940-4e7a6a859921?auto=format&fit=crop&w=1200&q=80",
      alt: "Elegant modern residence exterior",
    },
    {
      title: "Light and Ventilation",
      description: "Solutions planned to preserve daylight and comfort while solving daily site problems.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      alt: "Premium residential exterior and balcony scene",
    },
    {
      title: "Structured Urban Living",
      description: "A premium fit for apartments, towers, and gated communities across Hyderabad.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      alt: "Stylish residential building exterior",
    },
  ],
  outdoors: [
    {
      title: "Performance Ready Spaces",
      description: "Installations designed for active outdoor use, long life, and better day-to-day function.",
      image:
        "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1200&q=80",
      alt: "Outdoor space suitable for durable installation",
    },
    {
      title: "Purpose Built Detailing",
      description: "High-utility design that still feels premium, neat, and professionally finished.",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      alt: "Exterior space for premium service installation",
    },
    {
      title: "Engineered for Daily Use",
      description: "Built for spaces where reliability, safety, and weather resistance matter every day.",
      image:
        "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1200&q=80",
      alt: "Bright open exterior space with modern design",
    },
  ],
};

const CUSTOM_SERVICE_SLUGS: Record<string, string> = {
  "Anti Bird Net Installation": "anti-bird-net-installation",
  "Pigeon Safety Nets": "pigeon-safety-nets",
  "Bird Spikes Installation": "bird-spikes-installation",
  "Balcony Safety Nets": "balcony-safety-nets",
  "Children Safety Nets": "children-safety-nets",
  "Pet Safety Nets": "pet-safety-nets",
  "Duct Area Safety Nets": "duct-area-safety-nets",
  "Invisible Grills Installation": "invisible-grills",
  "Artificial Grass Turf Installation": "artificial-grass-turf-installation",
  "Cloth Hangers": "cloth-hangers",
  "Sports Nets Installation": "sports-nets-installation",
  "Building Safety Nets": "building-safety-nets",
  "Window Safety Nets": "window-safety-nets",
};

const SERVICE_PRESETS: Record<string, Omit<ServiceSeed, "slug" | "name">> = {
  "Invisible Grills Installation": {
    shortName: "Invisible Grills",
    badge: "Royal Safety Collection",
    category: "Premium Balcony Protection",
    heroTitle:
      "Cinematic balcony safety that protects the view, feels premium at first glance, and suits modern Hyderabad homes.",
    heroDescription:
      "Invisible grills combine sleek lines, strong child-safe planning, and open-air comfort, making them one of the most searched premium upgrades for apartments, villas, and high-rise communities.",
    intro:
      "Premium invisible grills designed for families who want protection, bird control, and a luxury finish without blocking the openness of the property.",
    variants: [
      "Anti Bird Invisible Grills",
      "Balcony Invisible Grills",
      "Window Invisible Grills",
      "Children Safety Invisible Grills",
      "Pet Safety Invisible Grills",
      "High Rise Invisible Grills",
      "Stainless Steel Invisible Grills",
    ],
    relatedSlugs: ["balcony-safety-nets", "children-safety-nets", "window-safety-nets"],
    gallery: CITY_IMAGES.interiors,
    materialFocus: [
      "304 grade stainless steel cables",
      "protective nylon coating",
      "corrosion-resistant aluminium channels",
      "precision locking hardware",
    ],
    trustFocus: [
      "clear balcony views with protective strength",
      "bird-control support and child-safe planning for apartment living",
      "a luxury finish that feels clean, modern, and trustworthy",
    ],
    searchTerms: [
      "invisible grills near me",
      "best invisible grills in Hyderabad",
      "balcony invisible grills",
      "child safety invisible grills",
      "top rated invisible grill installation",
      "free inspection invisible grills",
    ],
    commercialHooks: ["free inspection", "same day site visit", "premium finish", "top rated installation"],
    problemFocus: "open balconies, bird entry, and family safety in premium apartments",
    weatherStrength: "rust-resistant cables that handle hot sunlight, rain, and cross-wind exposure",
    installDetail: "measured cable spacing, channel alignment, and clean finishing around balcony edges",
    urgencyLine: "buyers usually want a quick survey because safety upgrades often become urgent after a child, pet, or pigeon issue",
    maintenanceLine: "simple cleaning and periodic tension checks keep the system looking neat and performing well",
  },
  "Anti Bird Net Installation": {
    shortName: "Anti Bird Nets",
    badge: "Urban Protection Series",
    category: "Bird Control Solutions",
    heroTitle:
      "Cleaner balconies, calmer mornings, and practical bird control for Hyderabad apartments that need quick results.",
    heroDescription:
      "Anti bird nets are a high-intent search product because people usually need a fast answer to pigeon nesting, droppings, and repeated balcony cleaning in apartment blocks.",
    intro:
      "Reliable anti bird net installation for balconies, windows, and utility openings that need breathable protection and a neat residential finish.",
    variants: [
      "Balcony Anti Bird Nets",
      "Window Anti Bird Nets",
      "Pigeon Protection Nets",
      "UV Resistant Bird Nets",
      "Apartment Bird Control Nets",
      "Terrace Bird Safety Nets",
      "Premium Invisible Bird Net Systems",
    ],
    relatedSlugs: ["pigeon-safety-nets", "bird-spikes-installation", "invisible-grills"],
    gallery: CITY_IMAGES.exteriors,
    materialFocus: [
      "UV-stabilized net fiber",
      "high-grip perimeter support",
      "weather-ready fixing points",
      "clean balcony edge finishing",
    ],
    trustFocus: [
      "keeps balconies cleaner with less pigeon disturbance",
      "preserves airflow and usable balcony space",
      "gives families a fast, practical, and low-maintenance bird control option",
    ],
    searchTerms: [
      "anti bird net near me",
      "best anti bird nets in Hyderabad",
      "balcony pigeon net installation",
      "same day anti bird net service",
      "pigeon control net cost",
      "top rated bird net installation",
    ],
    commercialHooks: ["same day installation", "best price quote", "free inspection", "trusted bird control team"],
    problemFocus: "pigeon nesting, droppings, and dirty balconies in apartment buildings",
    weatherStrength: "UV-resistant netting that stays stable through heat, dust, and seasonal rain",
    installDetail: "site measurement, anchoring, perimeter sealing, and neat edge alignment",
    urgencyLine: "most anti bird net enquiries are commercial-intent leads because residents want a clean balcony immediately",
    maintenanceLine: "gentle cleaning and periodic inspection are usually enough for long-term performance",
  },
  "Pigeon Safety Nets": {
    shortName: "Pigeon Safety Nets",
    badge: "Clean Living Series",
    category: "Bird Control Solutions",
    heroTitle:
      "A trusted pigeon control upgrade for apartments where hygiene, airflow, and visual neatness all matter.",
    heroDescription:
      "Pigeon safety nets are searched by homeowners who are comparing near-me bird control services and want a solution that feels practical, affordable, and reliable.",
    intro:
      "Premium pigeon safety nets planned for balcony openings, windows, and shafts that need bird control without making the property look blocked.",
    variants: [
      "Balcony Pigeon Safety Nets",
      "Window Pigeon Safety Nets",
      "Apartment Pigeon Control Nets",
      "Terrace Pigeon Protection Nets",
      "Bird Entry Blocking Nets",
      "Premium Outdoor Bird Nets",
      "Residential Pigeon Net Systems",
    ],
    relatedSlugs: ["anti-bird-net-installation", "bird-spikes-installation", "building-safety-nets"],
    gallery: CITY_IMAGES.exteriors,
    materialFocus: [
      "high-density outdoor netting",
      "UV-resistant perimeter threads",
      "secure fixing hardware",
      "custom-cut balcony coverage",
    ],
    trustFocus: [
      "reduces droppings, nesting, and recurring balcony cleaning",
      "keeps airflow and sunlight open in apartment living",
      "helps residents choose a cleaner and more comfortable home environment",
    ],
    searchTerms: [
      "pigeon safety nets near me",
      "best pigeon nets in Hyderabad",
      "top rated pigeon control nets",
      "balcony pigeon net installation",
      "free quote pigeon safety nets",
      "same day pigeon net service",
    ],
    commercialHooks: ["best service", "near me quote", "free inspection", "same day response"],
    problemFocus: "constant pigeon movement, nesting, and hygiene issues around balconies and windows",
    weatherStrength: "premium outdoor netting built for heat, dust, and seasonal rainfall",
    installDetail: "precise measurement and tightly secured perimeter fixing for clean coverage",
    urgencyLine: "people searching pigeon safety nets usually want immediate relief from repeated balcony mess",
    maintenanceLine: "light cleaning and visual checks help maintain hygiene and long service life",
  },
  "Bird Spikes Installation": {
    shortName: "Bird Spikes",
    badge: "Precision Bird Deterrent",
    category: "Bird Control Solutions",
    heroTitle:
      "Low-visibility bird deterrent detailing for ledges, AC units, parapets, and facade edges across Hyderabad.",
    heroDescription:
      "Bird spikes are ideal when pigeon landing happens on narrow ledges or AC outdoor units and the owner wants a tidy deterrent instead of a full net enclosure.",
    intro:
      "Professional bird spikes installation for ledges, parapets, signage, and AC frames where repeated bird landing causes stains, nesting, and maintenance trouble.",
    variants: [
      "Balcony Ledge Bird Spikes",
      "Window Sill Bird Spikes",
      "AC Outdoor Unit Bird Spikes",
      "Parapet Bird Deterrent Spikes",
      "Commercial Bird Spikes",
      "Stainless Steel Bird Spikes",
      "Pigeon Landing Prevention Spikes",
    ],
    relatedSlugs: ["anti-bird-net-installation", "pigeon-safety-nets", "window-safety-nets"],
    gallery: CITY_IMAGES.exteriors,
    materialFocus: [
      "UV-stable spike base",
      "stainless steel deterrent pins",
      "weather-safe bonding system",
      "surface-specific fixing method",
    ],
    trustFocus: [
      "targets pigeon landing on narrow surfaces without blocking the facade",
      "works well for AC units, ledges, signage, and parapet edges",
      "creates a cleaner, more maintained look for residential and commercial properties",
    ],
    searchTerms: [
      "bird spikes installation near me",
      "best bird spikes in Hyderabad",
      "pigeon spikes for balcony ledge",
      "top rated bird deterrent service",
      "free inspection bird spikes",
      "same day bird spike installation",
    ],
    commercialHooks: ["best pigeon deterrent", "same day visit", "top rated service", "free site check"],
    problemFocus: "repeated pigeon landing on ledges, parapets, AC units, and facade projections",
    weatherStrength: "corrosion-resistant spike systems that stay stable through heat and rain exposure",
    installDetail: "surface cleaning, alignment planning, and secure fixing based on ledge material",
    urgencyLine: "bird spikes are usually chosen when nets are not required but repeated pigeon landing must stop quickly",
    maintenanceLine: "once fixed properly, bird spikes need very little maintenance beyond basic cleaning",
  },
  "Balcony Safety Nets": {
    shortName: "Balcony Safety Nets",
    badge: "Family Security Edition",
    category: "Home Safety Solutions",
    heroTitle:
      "Confident balcony protection for families who want safety, openness, and a visually balanced finish.",
    heroDescription:
      "Balcony safety nets are one of the strongest commercial-intent services in apartments because parents, pet owners, and high-rise residents want protection without losing comfort.",
    intro:
      "Balcony safety nets built for apartments, gated communities, and villas where open edges need dependable family-focused protection.",
    variants: [
      "Children Balcony Safety Nets",
      "Pet Balcony Safety Nets",
      "High Rise Balcony Safety Nets",
      "Apartment Safety Nets",
      "Premium Balcony Protection Nets",
      "Residential Safety Barrier Nets",
      "Family Balcony Guard Nets",
    ],
    relatedSlugs: ["children-safety-nets", "pet-safety-nets", "invisible-grills"],
    gallery: CITY_IMAGES.interiors,
    materialFocus: [
      "high-strength balcony safety mesh",
      "weather-ready anchoring points",
      "child-safe perimeter support",
      "clean edge finishing",
    ],
    trustFocus: [
      "extra reassurance for balconies used by children, elders, and pets",
      "keeps the balcony open to air and natural light",
      "fits apartment towers and family homes with a neat, modern look",
    ],
    searchTerms: [
      "balcony safety nets near me",
      "best balcony safety nets in Hyderabad",
      "child safety net for balcony",
      "pet safety net balcony",
      "free inspection balcony safety nets",
      "top rated safety net installation",
    ],
    commercialHooks: ["free inspection", "best safety net service", "same day site visit", "trusted family safety installation"],
    problemFocus: "open balcony edges in homes with children, pets, elders, and high-rise exposure",
    weatherStrength: "outdoor-ready net systems that handle sun, rain, and strong tower-side wind",
    installDetail: "site measurement, anchor planning, and balanced perimeter fixing for clean tension",
    urgencyLine: "families often book balcony safety nets immediately after moving into a new apartment",
    maintenanceLine: "simple cleaning and periodic anchor checks help the balcony stay safe and neat",
  },
  "Children Safety Nets": {
    shortName: "Children Safety Nets",
    badge: "Little Ones Protection",
    category: "Home Safety Solutions",
    heroTitle:
      "Elegant child-focused protection for balconies, windows, and indoor open edges in family homes.",
    heroDescription:
      "Parents searching for children safety nets usually want a trusted company, quick inspection, and an installation that looks clean inside modern apartments.",
    intro:
      "Children safety nets created for parents who want safer movement around balconies, staircases, windows, and upper-floor openings.",
    variants: [
      "Balcony Children Safety Nets",
      "Window Children Safety Nets",
      "Staircase Child Safety Nets",
      "Indoor Open Area Safety Nets",
      "Apartment Child Protection Nets",
      "Family Guard Nets",
      "Premium Child Safety Barrier Nets",
    ],
    relatedSlugs: ["balcony-safety-nets", "pet-safety-nets", "window-safety-nets"],
    gallery: CITY_IMAGES.interiors,
    materialFocus: [
      "soft-finish high-strength safety mesh",
      "secure child-safe edge anchors",
      "balanced indoor and outdoor fitting",
      "long-life residential hardware",
    ],
    trustFocus: [
      "gives parents more confidence around open edges and elevated spaces",
      "keeps rooms brighter and more breathable than bulky barriers",
      "supports everyday child safety in apartments, duplexes, and villas",
    ],
    searchTerms: [
      "children safety nets near me",
      "best child safety nets in Hyderabad",
      "balcony safety net for kids",
      "window child safety nets",
      "free inspection child safety nets",
      "top rated family safety nets",
    ],
    commercialHooks: ["free home inspection", "best child safety solution", "top rated installation", "same day survey"],
    problemFocus: "active children moving around open balconies, windows, stairs, and upper-floor areas",
    weatherStrength: "residential-grade safety materials that stay reliable in heat, dust, and open-air exposure",
    installDetail: "careful measurement, child-safe edge planning, and secure but neat fixing",
    urgencyLine: "many families enquire as soon as toddlers start using balcony and staircase areas independently",
    maintenanceLine: "low-maintenance upkeep helps preserve safety, neatness, and parent confidence",
  },
  "Pet Safety Nets": {
    shortName: "Pet Safety Nets",
    badge: "Comfort for Curious Pets",
    category: "Home Safety Solutions",
    heroTitle:
      "Safe, breathable balcony and window protection for homes with cats, dogs, and curious indoor pets.",
    heroDescription:
      "Pet safety nets help owners protect balconies and open edges without making the home feel caged, which is why they perform strongly on both informational and commercial search intent.",
    intro:
      "Pet safety nets designed for apartments and villas where cats, dogs, and playful pets need safer access to balconies and open windows.",
    variants: [
      "Cat Safety Balcony Nets",
      "Dog Safe Balcony Nets",
      "Window Pet Safety Nets",
      "High Rise Pet Safety Nets",
      "Pet Friendly Balcony Guard Nets",
      "Apartment Pet Protection Nets",
      "Premium Pet Barrier Nets",
    ],
    relatedSlugs: ["balcony-safety-nets", "children-safety-nets", "window-safety-nets"],
    gallery: CITY_IMAGES.interiors,
    materialFocus: [
      "pet-safe high-strength mesh",
      "scratch-aware tension planning",
      "weather-resistant support anchors",
      "balcony-friendly edge detailing",
    ],
    trustFocus: [
      "lets pets enjoy ventilation and balcony light more safely",
      "reduces owner anxiety around high-rise openings",
      "keeps the property visually neat and comfortable for daily living",
    ],
    searchTerms: [
      "pet safety nets near me",
      "best balcony safety nets for cats",
      "dog safety balcony nets",
      "cat proof balcony Hyderabad",
      "free inspection pet safety nets",
      "top rated pet balcony net service",
    ],
    commercialHooks: ["cat-proof balcony", "best pet-safe installation", "free inspection", "trusted pet safety team"],
    problemFocus: "pets leaning on balcony edges, jumping near windows, and exploring open apartment spaces",
    weatherStrength: "durable outdoor-safe mesh that remains dependable in strong sun and open wind conditions",
    installDetail: "pet-safe tension control, secure edge planning, and clean balcony fitting",
    urgencyLine: "pet owners usually convert quickly once they notice risky balcony behavior",
    maintenanceLine: "routine cleaning and tension checks keep the net comfortable and dependable for pets",
  },
  "Duct Area Safety Nets": {
    shortName: "Duct Area Safety Nets",
    badge: "Smart Utility Protection",
    category: "Home Safety Solutions",
    heroTitle:
      "Secure utility shafts, service ducts, and open building voids with a clean, maintenance-friendly installation.",
    heroDescription:
      "Duct area safety nets solve a specific apartment problem: open service shafts that attract birds, dust, and accidental risk in tall residential blocks.",
    intro:
      "Duct area safety nets planned for apartment shafts, service voids, and utility openings where safety and cleanliness both matter.",
    variants: [
      "Apartment Duct Safety Nets",
      "Utility Shaft Safety Nets",
      "Service Duct Bird Control Nets",
      "Open Void Protection Nets",
      "High Rise Duct Safety Nets",
      "Residential Shaft Safety Nets",
      "Premium Utility Protection Nets",
    ],
    relatedSlugs: ["anti-bird-net-installation", "building-safety-nets", "window-safety-nets"],
    gallery: CITY_IMAGES.exteriors,
    materialFocus: [
      "high-strength shaft net mesh",
      "service-area compatible fixing",
      "moisture-resistant hardware",
      "long-reach installation support",
    ],
    trustFocus: [
      "protects difficult openings that are common in apartment towers",
      "helps reduce bird entry, debris, and accidental exposure in shafts",
      "supports better maintenance planning for builders and resident welfare teams",
    ],
    searchTerms: [
      "duct area safety nets near me",
      "best shaft safety nets in Hyderabad",
      "utility duct safety net installation",
      "apartment duct bird net service",
      "free inspection duct safety nets",
      "same day shaft net quote",
    ],
    commercialHooks: ["free inspection", "builder-ready installation", "same day survey", "trusted shaft safety service"],
    problemFocus: "open service shafts, deep utility ducts, and bird movement in hard-to-reach apartment voids",
    weatherStrength: "durable mesh and corrosion-aware fixing suited for moisture, dust, and airflow inside utility shafts",
    installDetail: "long-reach measurement, secure anchor planning, and careful installation in service areas",
    urgencyLine: "duct area nets are often booked after residents or facility teams notice recurring bird or safety issues",
    maintenanceLine: "planned access points and periodic inspection keep the utility area safe and manageable",
  },
  "Building Safety Nets": {
    shortName: "Building Safety Nets",
    badge: "Facade Protection Series",
    category: "Commercial Safety Solutions",
    heroTitle:
      "Professional building safety nets for towers, facades, repair zones, and elevated work areas across Hyderabad.",
    heroDescription:
      "Building safety nets attract strong commercial-intent searches from property managers, contractors, and apartment maintenance teams looking for reliable protection at height.",
    intro:
      "Building safety nets engineered for facades, maintenance zones, open elevations, and structure edges where fall protection and debris control are essential.",
    variants: [
      "Building Covering Nets",
      "Facade Safety Nets",
      "Repair Zone Safety Nets",
      "Debris Control Nets",
      "Apartment Tower Safety Nets",
      "High Rise Building Safety Nets",
      "Commercial Edge Protection Nets",
    ],
    relatedSlugs: ["window-safety-nets", "duct-area-safety-nets", "sports-nets-installation"],
    gallery: CITY_IMAGES.outdoors,
    materialFocus: [
      "heavy-duty industrial netting",
      "high-load support ropes",
      "reinforced edge anchors",
      "weather-ready elevated fixing hardware",
    ],
    trustFocus: [
      "supports safer maintenance and protection around high-rise structures",
      "helps reduce risk from open elevations and falling debris zones",
      "fits residential towers, commercial buildings, and under-maintenance properties",
    ],
    searchTerms: [
      "building safety nets Hyderabad",
      "building covering net near me",
      "best building protection nets",
      "facade safety net installation",
      "same day building safety quote",
      "top rated construction net service",
    ],
    commercialHooks: ["commercial safety quote", "same day site inspection", "trusted facade protection", "top rated building net service"],
    problemFocus: "open facade zones, repair areas, falling object risk, and elevated work safety",
    weatherStrength: "high-strength outdoor net systems built for strong wind exposure, heat, and long-height installations",
    installDetail: "site inspection, load-aware anchor planning, and structured installation around elevations",
    urgencyLine: "building safety net leads often come from urgent maintenance, painting, or facade repair schedules",
    maintenanceLine: "inspection-led maintenance keeps commercial safety nets dependable through project cycles",
  },
  "Window Safety Nets": {
    shortName: "Window Safety Nets",
    badge: "Open Window Security",
    category: "Home Safety Solutions",
    heroTitle:
      "Smart window protection for apartments and villas that need safer airflow, light, and peace of mind.",
    heroDescription:
      "Window safety nets are a high-intent family safety product for homes with children, pets, and upper-floor bedrooms where open windows are used daily.",
    intro:
      "Window safety nets tailored for apartment bedrooms, stair landings, living room windows, and utility openings that need safer daily use.",
    variants: [
      "Apartment Window Safety Nets",
      "Children Window Safety Nets",
      "Pet Safe Window Nets",
      "French Window Safety Nets",
      "High Rise Window Protection Nets",
      "Bedroom Window Safety Nets",
      "Premium Window Guard Nets",
    ],
    relatedSlugs: ["children-safety-nets", "pet-safety-nets", "invisible-grills"],
    gallery: CITY_IMAGES.interiors,
    materialFocus: [
      "fine high-strength window mesh",
      "room-friendly fixing hardware",
      "rust-aware edge supports",
      "balanced indoor-outdoor durability",
    ],
    trustFocus: [
      "improves safety around open windows without blocking ventilation",
      "supports child-safe and pet-safe daily living",
      "works well for bedrooms, living rooms, and upper-floor family spaces",
    ],
    searchTerms: [
      "window safety nets near me",
      "best window safety nets in Hyderabad",
      "window net for kids safety",
      "pet safe window nets",
      "free inspection window safety nets",
      "top rated window protection service",
    ],
    commercialHooks: ["free inspection", "trusted family window safety", "best price quote", "same day survey"],
    problemFocus: "open windows in upper-floor homes where children, pets, and airflow all matter",
    weatherStrength: "durable mesh and hardware designed for sunny exposures, rain, and daily window use",
    installDetail: "frame measurement, edge-safe fixing, and neat room-friendly finishing",
    urgencyLine: "window safety net enquiries often come from parents and pet owners after moving into upper-floor flats",
    maintenanceLine: "simple dust cleaning and periodic fitting checks are enough for long-term use",
  },
  "Sports Nets Installation": {
    shortName: "Sports Nets",
    badge: "Performance Court Collection",
    category: "Sports Protection Solutions",
    heroTitle:
      "Professional sports net installations for practice areas, turf edges, school grounds, and community play zones.",
    heroDescription:
      "Sports nets serve both navigational and commercial search intent because buyers are often looking for a specific practice cage, football boundary, or turf-side containment system.",
    intro:
      "Sports nets installation for cricket, football, multipurpose courts, schools, clubs, terraces, and gated community play areas that need safe ball containment.",
    variants: [
      "Cricket Practice Nets",
      "Football Ground Nets",
      "Terrace Sports Nets",
      "School Ground Safety Nets",
      "Community Play Area Nets",
      "Turf Perimeter Nets",
      "Multipurpose Sports Barrier Nets",
    ],
    relatedSlugs: ["artificial-grass-turf-installation", "building-safety-nets", "cloth-hangers"],
    gallery: CITY_IMAGES.outdoors,
    materialFocus: [
      "heavy-duty sports net fiber",
      "impact-ready knot strength",
      "weather-resistant support poles or anchors",
      "large-span tension planning",
    ],
    trustFocus: [
      "keeps balls within practice zones and reduces property damage risk",
      "suits schools, clubs, terraces, and gated community play areas",
      "gives sports spaces a more professional and safer setup",
    ],
    searchTerms: [
      "sports nets installation Hyderabad",
      "cricket practice nets near me",
      "football ground nets installation",
      "best turf side safety nets",
      "free inspection sports nets",
      "top rated cricket net company",
    ],
    commercialHooks: ["free site survey", "best sports net installation", "top rated cricket net company", "same day project quote"],
    problemFocus: "ball containment, practice area definition, and player-safe boundary management",
    weatherStrength: "impact-ready outdoor netting suited for sun, wind, and daily sports use",
    installDetail: "span planning, anchor placement, pole alignment, and safe tensioning",
    urgencyLine: "sports net leads usually come from schools, turf operators, and communities preparing active play spaces",
    maintenanceLine: "regular tension checks and wear inspection keep sports setups clean and dependable",
  },
  "Artificial Grass Turf Installation": {
    shortName: "Artificial Grass Turf",
    badge: "Landscape Luxury Line",
    category: "Outdoor Lifestyle Solutions",
    heroTitle:
      "Premium artificial grass turf for balconies, terraces, play corners, and outdoor lifestyle spaces that need a polished finish.",
    heroDescription:
      "Artificial turf performs well on both informational and commercial intent because customers compare appearance, drainage, softness, and maintenance before booking.",
    intro:
      "Artificial grass turf installation for balconies, terraces, gardens, play zones, cafes, and rooftop spaces that need year-round greenery with low maintenance.",
    variants: [
      "Balcony Artificial Grass",
      "Terrace Turf Installation",
      "Garden Artificial Grass",
      "Play Area Turf",
      "Rooftop Turf Solutions",
      "Landscape Artificial Grass",
      "Premium Soft Feel Turf",
    ],
    relatedSlugs: ["sports-nets-installation", "cloth-hangers", "invisible-grills"],
    gallery: CITY_IMAGES.outdoors,
    materialFocus: [
      "UV-resistant synthetic grass fibers",
      "drainage-ready turf backing",
      "neat edge finishing",
      "soft-touch landscape layering",
    ],
    trustFocus: [
      "creates a cleaner and greener look without daily lawn maintenance",
      "fits balconies, terraces, and lifestyle spaces in apartments and villas",
      "handles sunlight well when the right turf density and base work are chosen",
    ],
    searchTerms: [
      "artificial grass turf near me",
      "best artificial grass in Hyderabad",
      "balcony grass carpet installation",
      "terrace turf installation",
      "free inspection artificial grass",
      "top rated artificial turf company",
    ],
    commercialHooks: ["best balcony turf", "free measurement", "top rated turf installation", "same day quote"],
    problemFocus: "hard outdoor surfaces that need a softer, greener, and more attractive finish",
    weatherStrength: "UV-stable turf with drainage planning for hot sunlight and monsoon exposure",
    installDetail: "surface preparation, edge trimming, adhesive or fixing layout, and clean finishing",
    urgencyLine: "buyers usually compare samples and want a fast visual upgrade for balconies or terraces",
    maintenanceLine: "basic brushing and occasional washing keep turf fresh and visually appealing",
  },
  "Cloth Hangers": {
    shortName: "Cloth Hangers",
    badge: "Space Saving Utility",
    category: "Home Utility Solutions",
    heroTitle:
      "Smart drying systems for apartments where every balcony, utility area, and service corner needs better use.",
    heroDescription:
      "Cloth hangers are often navigational-intent enquiries from buyers looking for a clean, space-saving solution instead of ropes, rods, or cluttered balcony drying setups.",
    intro:
      "Premium cloth hangers installation for balconies, utility areas, kitchens, and laundry spaces where homeowners want organized drying with a neat modern finish.",
    variants: [
      "Ceiling Cloth Hangers",
      "Balcony Cloth Drying Hangers",
      "Pulley Cloth Hangers",
      "Wall Mounted Cloth Hangers",
      "Utility Area Drying Systems",
      "Space Saving Cloth Hangers",
      "Premium Stainless Steel Hangers",
    ],
    relatedSlugs: ["artificial-grass-turf-installation", "invisible-grills", "window-safety-nets"],
    gallery: CITY_IMAGES.interiors,
    materialFocus: [
      "powder-coated drying bars",
      "smooth pulley or lift mechanism",
      "stainless steel support hardware",
      "compact utility-friendly fitting",
    ],
    trustFocus: [
      "makes balconies and utility areas look cleaner and more organized",
      "helps families dry clothes efficiently without blocking movement",
      "works especially well in apartment homes with limited service space",
    ],
    searchTerms: [
      "cloth hangers near me",
      "best cloth hanger installation in Hyderabad",
      "ceiling cloth hanger for balcony",
      "utility area drying hanger",
      "free inspection cloth hanger installation",
      "top rated pulley cloth hanger service",
    ],
    commercialHooks: ["best space-saving hanger", "free installation quote", "same day survey", "top rated utility solution"],
    problemFocus: "limited drying space, cluttered balconies, and inefficient utility area use",
    weatherStrength: "powder-coated and stainless steel components designed for sunlight, moisture, and daily use",
    installDetail: "load planning, ceiling or wall anchoring, and smooth-height alignment",
    urgencyLine: "most buyers want a fast and functional utility upgrade as soon as they settle into a new home",
    maintenanceLine: "simple cleaning and occasional hardware inspection keep operation smooth",
  },
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function uniqueStrings(values: readonly string[]) {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const value of values) {
    if (seen.has(value)) {
      continue;
    }
    seen.add(value);
    result.push(value);
  }

  return result;
}

function buildLocations() {
  return uniqueStrings(hyderabadLocations).map((name) => ({
    slug: slugify(name),
    name,
  }));
}

function createPreset(serviceName: string): ServiceSeed {
  const preset = SERVICE_PRESETS[serviceName];

  if (preset) {
    return {
      slug: CUSTOM_SERVICE_SLUGS[serviceName] ?? slugify(serviceName),
      name: serviceName,
      ...preset,
    };
  }

  const shortName = serviceName.replace(/\s+Installation$/i, "");

  return {
    slug: CUSTOM_SERVICE_SLUGS[serviceName] ?? slugify(serviceName),
    name: serviceName,
    shortName,
    badge: "Hyderabad Service Edition",
    category: "Premium Home Solutions",
    heroTitle: `${shortName} designed for Hyderabad homes and properties that need premium performance with local relevance.`,
    heroDescription:
      `${shortName} attracts strong search intent from buyers comparing trusted companies, free inspection options, and modern long-term installation quality.`,
    intro:
      `${shortName} installation planned for customers who want a safe, neat, and professionally finished result for everyday use.`,
    variants: [
      `${shortName} for Apartments`,
      `${shortName} for Villas`,
      `Premium ${shortName}`,
      `High Rise ${shortName}`,
      `${shortName} Near Me`,
      `${shortName} with Free Inspection`,
      `${shortName} Same Day Survey`,
    ],
    relatedSlugs: [],
    gallery: CITY_IMAGES.interiors,
    materialFocus: [
      "durable installation-grade materials",
      "weather-aware finishing",
      "professional fixing hardware",
      "clean site execution",
    ],
    trustFocus: [
      `${shortName.toLowerCase()} suited for modern Hyderabad properties`,
      "professional measurement and installation quality",
      "a clean finish that supports trust from the first visit",
    ],
    searchTerms: [
      `${shortName.toLowerCase()} near me`,
      `best ${shortName.toLowerCase()} in Hyderabad`,
      `${shortName.toLowerCase()} free inspection`,
      `top rated ${shortName.toLowerCase()} company`,
      `${shortName.toLowerCase()} same day installation`,
    ],
    commercialHooks: ["free inspection", "same day survey", "top rated company", "best price quote"],
    problemFocus: `${shortName.toLowerCase()} requirements in residential and commercial properties`,
    weatherStrength: "installation quality planned for Hyderabad heat, dust, rain, and everyday exposure",
    installDetail: "site survey, accurate measurement, and neat professional fitting",
    urgencyLine: "buyers searching this service usually want a quick quote from a trusted local team",
    maintenanceLine: "routine care and periodic checks help the installation stay clean and dependable",
  };
}

const WEST_MARKETS = [
  "gachibowli",
  "financial district",
  "nanakramguda",
  "kokapet",
  "narsingi",
  "manikonda",
  "puppalaguda",
  "kondapur",
  "madhapur",
  "hitech city",
  "hi tech city",
  "raidurg",
  "raidurgam",
  "tellapur",
  "kollur",
  "osman nagar",
  "nallagandla",
  "gopanpally",
  "miyapur",
  "hafeezpet",
  "kukatpally",
  "bachupally",
  "nizampet",
  "pragathi nagar",
  "kphb",
];

const EAST_MARKETS = [
  "uppal",
  "nagole",
  "peerzadiguda",
  "boduppal",
  "pocharam",
  "ecil",
  "as rao nagar",
  "a s rao nagar",
  "dr as rao nagar",
  "kapra",
  "safilguda",
  "nacharam",
  "mallapur",
  "moula ali",
  "sainikpuri",
];

const SOUTH_MARKETS = [
  "lb nagar",
  "meerpet",
  "badangpet",
  "champapet",
  "karmanghat",
  "hasthinapuram",
  "vanasthalipuram",
  "dilsukhnagar",
  "hayath nagar",
  "hayathnagar",
  "bn reddy nagar",
  "balapur",
  "tukkuguda",
  "maheshwaram",
  "adibatla",
];

const NORTH_MARKETS = [
  "kompally",
  "medchal",
  "suchitra",
  "bowenpally",
  "alwal",
  "bolarum",
  "bollaram",
  "old alwal",
  "trimulgherry",
  "secunderabad cantonment",
];

const AIRPORT_MARKETS = [
  "shamshabad",
  "rajendranagar",
  "budwel",
  "appa junction",
  "bandlaguda jagir",
  "moinabad",
  "chevella",
  "shankarpally",
  "kothur",
  "hardware park",
  "fab city",
];

const CORE_CITY_MARKETS = [
  "ameerpet",
  "begumpet",
  "somajiguda",
  "panjagutta",
  "punjagutta",
  "khairatabad",
  "himayath nagar",
  "abids",
  "secunderabad",
  "banjara hills",
  "jubilee hills",
  "film nagar",
];

const COMMUNITY_MARKERS = [
  "my home",
  "aparna",
  "prestige",
  "sumadhura",
  "myscape",
  "lansum",
  "ramky",
  "jayabheri",
  "vertex",
  "golf edge",
  "lodha",
  "indis",
  "smr",
  "dsr",
  "yoo",
  "the loft",
  "township",
  "county",
  "kanopy",
  "zenon",
  "sarovar",
  "cyberzon",
  "newlands",
  "greenscapes",
];

function pickMarket(locationName: string) {
  const value = locationName.toLowerCase();

  if (COMMUNITY_MARKERS.some((item) => value.includes(item))) {
    return "community";
  }

  if (WEST_MARKETS.some((item) => value.includes(item))) {
    return "west";
  }

  if (EAST_MARKETS.some((item) => value.includes(item))) {
    return "east";
  }

  if (SOUTH_MARKETS.some((item) => value.includes(item))) {
    return "south";
  }

  if (NORTH_MARKETS.some((item) => value.includes(item))) {
    return "north";
  }

  if (AIRPORT_MARKETS.some((item) => value.includes(item))) {
    return "airport";
  }

  if (CORE_CITY_MARKETS.some((item) => value.includes(item))) {
    return "core";
  }

  return "city";
}

function buildLocationContext(locationName: string): LocationContext {
  const lowerName = locationName.toLowerCase();
  const market = pickMarket(locationName);
  const isCommunity = market === "community";
  const isHighRise =
    isCommunity ||
    ["kokapet", "narsingi", "financial district", "nanakramguda", "gachibowli", "tellapur"].some(
      (item) => lowerName.includes(item),
    );

  const marketContext: Record<string, Omit<LocationContext, "market">> = {
    west: {
      microMarket:
        "the west Hyderabad growth corridor where tall towers, premium communities, and large balconies are common",
      weather:
        "strong cross-wind, sharp afternoon sun, and long exposed balconies are common in this side of the city",
      landmark:
        `buyers in ${locationName} often compare options near Gachibowli, Hitech City, Financial District, and the ORR-driven west corridor`,
      structure:
        isHighRise
          ? `many homes in ${locationName} sit inside high-rise apartment clusters where open edges and wind pressure matter more`
          : `apartment layouts in ${locationName} usually prioritise ventilation, balcony usability, and modern exterior aesthetics`,
      buyerIntent:
        `searches such as best service in ${locationName}, near me installation, top rated company, and free inspection are common because buyers here actively compare finish quality before booking`,
      localityProof:
        isCommunity
          ? `${locationName} itself represents the kind of premium gated community where residents expect cleaner detailing, rust-resistant materials, and polished installation work`
          : `${locationName} is part of a high-conversion residential belt where gated communities, tech-driven family buyers, and newly occupied flats create strong service demand`,
      commercialLine:
        "buyers in this belt usually respond well to premium material clarity, quick site visits, and a polished visual presentation",
      conclusionLine:
        "that mix of premium housing, strong sunlight, and taller apartment formats makes localised service content especially persuasive here",
    },
    east: {
      microMarket:
        "the east and north-east residential belt with active family neighborhoods, older apartments, and expanding plotted developments",
      weather:
        "heat, dust movement, and monsoon exposure are important considerations for any exterior-facing installation in this zone",
      landmark:
        `customers in ${locationName} often navigate from Uppal, Nagole, Pocharam, ECIL, and nearby metro-linked residential pockets`,
      structure:
        `homes in ${locationName} often include family apartments, standalone buildings, and utility-heavy layouts where durable materials matter`,
      buyerIntent:
        `people searching near me, best price, same day installation, and top rated local service usually want a practical solution that stays dependable`,
      localityProof:
        `${locationName} has a strong family-user base, so buyers tend to value safety, low maintenance, and clear explanations before they convert`,
      commercialLine:
        "trust builds faster here when the page explains durability, cost value, and how the product handles daily wear",
      conclusionLine:
        "clear local references and long-form useful content help convert practical buyers in this side of Hyderabad",
    },
    south: {
      microMarket:
        "the south and south-east residential belt where dense neighborhoods, new apartment clusters, and family-led buying intent come together",
      weather:
        "open sunlight, dust, and mixed low-rise to mid-rise exposure mean materials need to handle regular outdoor stress",
      landmark:
        `searchers around ${locationName} often come through LB Nagar, Meerpet, Vanasthalipuram, and major inner-ring residential routes`,
      structure:
        `properties in ${locationName} range from family apartments to independent homes, so buyers often compare function, finish, and maintenance together`,
      buyerIntent:
        `commercial-intent searches such as free inspection, trusted company, near me service, and same day response are common here`,
      localityProof:
        `${locationName} is part of a broad residential catchment where practical value and immediate usability influence buying decisions`,
      commercialLine:
        "pages that clearly explain long-term value and installation process tend to perform better in these family-heavy areas",
      conclusionLine:
        "localized content gives buyers confidence because it feels closer to their actual home type and day-to-day needs",
    },
    north: {
      microMarket:
        "the north and north-west growth stretch with gated communities, family apartments, and expanding suburban layouts",
      weather:
        "sunlight, seasonal rain, and open-site wind exposure influence material choice in these growing neighborhoods",
      landmark:
        `buyers in ${locationName} often compare services across Kompally, Suchitra, Medchal, and surrounding gated developments`,
      structure:
        `homes in ${locationName} often feature larger balconies, utility areas, and family-oriented apartment planning`,
      buyerIntent:
        `people here usually look for trusted companies, top rated installation teams, and free inspection before they book`,
      localityProof:
        `${locationName} sees growing demand from newly occupied communities and family homes that want premium but practical upgrades`,
      commercialLine:
        "buyers in this belt respond well to clean design language, quick consultation, and proof of durability",
      conclusionLine:
        "service pages that reflect suburban family priorities usually convert better in this market",
    },
    airport: {
      microMarket:
        "the airport and south-west growth side where townships, open sites, and larger-format developments continue to expand",
      weather:
        "these locations often face stronger open wind, hotter sun, and more exposed exterior conditions than tighter inner-city pockets",
      landmark:
        `search traffic around ${locationName} often connects with Rajendranagar, Shamshabad, Adibatla, hardware corridors, and airport-linked layouts`,
      structure:
        `projects in ${locationName} often have broader setbacks, open terraces, and more exposure to wind-driven dust and sunlight`,
      buyerIntent:
        `buyers looking for best service, same day survey, and trusted installation usually want systems that can handle demanding site conditions`,
      localityProof:
        `${locationName} represents a growth market where new layouts and under-construction communities drive high-intent enquiries`,
      commercialLine:
        "performance-led content works especially well here because buyers are thinking about long-term outdoor exposure",
      conclusionLine:
        "when the page speaks directly to exposed sites and growth-corridor needs, it earns faster trust",
    },
    core: {
      microMarket:
        "the central city and premium core where older buildings, luxury neighborhoods, and dense urban movement overlap",
      weather:
        "bird activity, dust, heat, and facade maintenance pressures are common in these busy urban pockets",
      landmark:
        `customers in ${locationName} often compare services around Ameerpet, Begumpet, Panjagutta, Banjara Hills, and Jubilee Hills`,
      structure:
        `properties in ${locationName} include premium apartments, renovated buildings, and high-visibility homes where appearance matters strongly`,
      buyerIntent:
        `searches for top rated company, premium service, near me installation, and best finish are especially important in these image-conscious markets`,
      localityProof:
        `${locationName} buyers usually expect a service page to look polished, informative, and locally credible before they enquire`,
      commercialLine:
        "premium detailing and trust-building content help the page stand out in the city core",
      conclusionLine:
        "a refined local tone is essential here because buyers often compare multiple options quickly",
    },
    community: {
      microMarket:
        "a gated community or named township environment where tower height, balcony exposure, and premium buyer expectations are usually higher",
      weather:
        "large apartment towers in this kind of location usually face strong wind corridors, bright sunlight, and long exposed balconies",
      landmark:
        `${locationName} itself works as a navigational landmark because residents often search directly using the community or apartment name`,
      structure:
        `${locationName} appears like a large apartment or township setting where multiple towers, higher floors, and maintenance expectations influence the service choice`,
      buyerIntent:
        `people searching with a community name usually have very strong commercial intent because they want a trusted local company already familiar with large apartment living`,
      localityProof:
        `${locationName} is exactly the kind of premium residential address where rust resistance, neat finishing, same day inspection, and polished communication improve conversion`,
      commercialLine:
        "named-community traffic tends to convert well when the content feels specific, premium, and operationally confident",
      conclusionLine:
        "community-specific content works because buyers feel the service understands tower living, wind exposure, and gated-community standards",
    },
    city: {
      microMarket:
        "the broader Hyderabad residential market where buyers compare reliability, price value, material quality, and speed of response",
      weather:
        "heat, rain, dust, and regular outdoor exposure all matter for long-term service performance",
      landmark:
        `local search intent around ${locationName} usually connects with nearby residential pockets, landmarks, and apartment clusters`,
      structure:
        `homes in ${locationName} may include apartments, standalone houses, and mixed-use residential layouts`,
      buyerIntent:
        `searches like near me, best company, free inspection, and top rated installation show clear buying intent in this market`,
      localityProof:
        `${locationName} still needs a page that feels local, useful, and commercially relevant rather than generic`,
      commercialLine:
        "buyers respond better when the page explains why the service fits their exact locality conditions",
      conclusionLine:
        "local context improves trust because the content feels written for the area instead of copied citywide",
    },
  };

  return {
    market,
    ...marketContext[market],
  };
}

function buildHighlights(service: ServiceSeed, context: LocationContext, location: LocationDefinition) {
  return [
    `${service.materialFocus[0]} and ${service.materialFocus[1]} planned for ${location.name}`,
    `${service.weatherStrength} for ${context.microMarket}`,
    `${service.installDetail} with a free inspection-first approach`,
    `${service.commercialHooks[0]} and ${service.commercialHooks[2]} to support higher-conversion enquiries`,
  ];
}

function buildApplications(service: ServiceSeed, context: LocationContext) {
  return [
    ...service.variants.slice(0, 3),
    `${service.shortName} for ${context.microMarket}`,
    `${service.shortName} for premium apartments and gated communities`,
    `${service.shortName} for family-focused and high-intent Hyderabad properties`,
  ];
}

function buildFaqs(service: ServiceSeed, location: LocationDefinition, context: LocationContext) {
  const searchLine = service.searchTerms.slice(0, 3).join(", ");

  if (service.slug === "invisible-grills") {
    return [
      {
        question: `Why are invisible grills in ${location.name} considered one of the best balcony safety upgrades?`,
        answer:
          `Invisible grills are popular in ${location.name} because they combine open views, bird control support, premium finishing, and family safety in one installation. Buyers comparing ${searchLine} usually prefer them when the balcony belongs to a modern apartment, gated community, or high-rise tower.`,
      },
      {
        question: `Are invisible grills suitable for windy high-rise apartments in ${location.name}?`,
        answer:
          `Yes. In many ${location.name} properties, especially taller towers and exposed balconies, wind and sunlight are strong factors. That is why rust-resistant stainless steel cables, coated protection, and structured channel support are important for long-term performance.`,
      },
      {
        question: `Do you provide free inspection and same day site visits for invisible grills in ${location.name}?`,
        answer:
          `Yes, depending on slot availability. Many customers in ${location.name} search with commercial-intent phrases like near me, free inspection, top rated invisible grills, and same day installation because they want both speed and premium quality before booking.`,
      },
      {
        question: `How do invisible grills improve trust for premium apartments in ${location.name}?`,
        answer:
          `Invisible grills look cleaner and more modern than bulky traditional barriers. In ${location.name}, where appearance matters in apartment towers and gated communities, that elegant finish helps homeowners feel they are choosing a safer solution without compromising the prestige of the property.`,
      },
    ];
  }

  if (service.slug === "anti-bird-net-installation" || service.slug === "pigeon-safety-nets") {
    return [
      {
        question: `Why do apartment owners in ${location.name} search for ${service.shortName.toLowerCase()} so often?`,
        answer:
          `${service.shortName} is a strong local search product because balconies and windows in ${location.name} often face pigeon nesting, droppings, and recurring cleaning trouble. Buyers comparing ${searchLine} usually want a quick, breathable, and low-maintenance solution.`,
      },
      {
        question: `Will ${service.shortName.toLowerCase()} block airflow or sunlight in ${location.name}?`,
        answer:
          `No. A properly planned installation helps control bird entry while keeping air and daylight open. That balance matters in ${location.name}, where apartment balconies are used for ventilation, drying, and daily family comfort.`,
      },
      {
        question: `Do you handle bird control for towers, apartments, and gated communities in ${location.name}?`,
        answer:
          `Yes. ${context.structure.charAt(0).toUpperCase()}${context.structure.slice(1)}, so the installation is planned around the property type, access conditions, and how visible the final finish will be from both inside and outside the home.`,
      },
      {
        question: `How do buyers compare the best ${service.shortName.toLowerCase()} companies in ${location.name}?`,
        answer:
          `Most buyers compare durability, neatness, response time, and whether the company offers a free inspection. When a page clearly explains weather performance, maintenance, and local relevance for ${location.name}, trust builds much faster.`,
      },
    ];
  }

  if (
    service.slug === "balcony-safety-nets" ||
    service.slug === "children-safety-nets" ||
    service.slug === "pet-safety-nets" ||
    service.slug === "window-safety-nets"
  ) {
    return [
      {
        question: `Why is ${service.shortName.toLowerCase()} important for family homes in ${location.name}?`,
        answer:
          `${service.shortName} helps make open balconies, windows, and elevated edges safer without making the home look closed. In ${location.name}, many buyers search for the best and top rated safety solutions because they want protection that still feels modern and comfortable.`,
      },
      {
        question: `Can this service be installed in large apartment towers and gated communities in ${location.name}?`,
        answer:
          `Yes. ${context.structure.charAt(0).toUpperCase()}${context.structure.slice(1)}. That is why installation planning includes exposure, height, family usage, and how the system should look in a premium apartment setting.`,
      },
      {
        question: `How does ${service.shortName.toLowerCase()} handle weather conditions in ${location.name}?`,
        answer:
          `${service.weatherStrength.charAt(0).toUpperCase()}${service.weatherStrength.slice(1)}. That is especially useful in ${location.name}, where outdoor openings may face direct sun, seasonal rain, and steady airflow through upper-floor homes.`,
      },
      {
        question: `Do you provide free inspection and fast installation in ${location.name}?`,
        answer:
          `Yes, based on schedule availability. Buyers in ${location.name} often use navigational and commercial phrases like near me, same day installation, excellent service, and trusted local team before choosing a company.`,
      },
    ];
  }

  if (service.slug === "building-safety-nets" || service.slug === "sports-nets-installation") {
    return [
      {
        question: `Who usually books ${service.shortName.toLowerCase()} in ${location.name}?`,
        answer:
          `${service.shortName} is commonly booked by property managers, contractors, schools, turf operators, apartment maintenance teams, and community associations in ${location.name}. The search intent is usually strongly commercial because the requirement is practical and time-sensitive.`,
      },
      {
        question: `How do you plan installation for large, exposed sites in ${location.name}?`,
        answer:
          `The work starts with a site inspection and a layout based on span, height, access, and exposure. In ${location.name}, this matters because ${context.weather.toLowerCase()} and large exterior-facing structures need a more engineered installation approach.`,
      },
      {
        question: `Can you handle fast project quotes and scheduled work in ${location.name}?`,
        answer:
          `Yes. Buyers searching ${searchLine} typically need a responsive local company that can assess the site quickly, explain materials clearly, and provide a dependable installation timeline.`,
      },
      {
        question: `Why does local content matter for ${service.shortName.toLowerCase()} in ${location.name}?`,
        answer:
          `Because project conditions vary significantly by area, building style, and access. When the page reflects ${location.name} specifically, buyers trust the company more and search engines see stronger local relevance.`,
      },
    ];
  }

  return [
    {
      question: `Why is ${service.shortName.toLowerCase()} in ${location.name} a good choice for local homes and apartments?`,
      answer:
        `${service.shortName} fits ${location.name} well because ${context.structure.toLowerCase()}. It helps buyers who are comparing ${searchLine} choose a solution that looks premium, solves a real problem, and stays dependable in local weather conditions.`,
    },
    {
      question: `How much does ${service.shortName.toLowerCase()} cost in ${location.name}?`,
      answer:
        `The cost depends on site size, access conditions, fixing requirements, and finishing detail. A free inspection is the best way to get accurate pricing because ${location.name} properties can vary a lot between apartments, villas, and community towers.`,
    },
    {
      question: `Do you provide same day inspection or fast installation in ${location.name}?`,
      answer:
        `Yes, quick survey support is possible based on schedule and access. Many buyers from ${location.name} search using near me, same day installation, and trusted company terms because they usually want a fast but reliable solution.`,
    },
    {
      question: `How do you make ${service.shortName.toLowerCase()} last longer in ${location.name}?`,
      answer:
        `${service.weatherStrength.charAt(0).toUpperCase()}${service.weatherStrength.slice(1)}. Combined with proper installation and basic maintenance, that helps the system stay effective through heat, wind, dust, and everyday use in ${location.name}.`,
    },
  ];
}

function buildSections(service: ServiceSeed, location: LocationDefinition, context: LocationContext) {
  const keywordLine = service.searchTerms.slice(0, 5).join(", ");

  if (service.slug === "invisible-grills") {
    return [
      {
        header: `Anti Bird Invisible Grills Installation in ${location.name}`,
        content:
          `Invisible grills in ${location.name} are one of the most attractive options for homes facing bird movement, balcony exposure, and family safety concerns. Buyers searching ${keywordLine} usually want a premium system that feels elegant, supports daily comfort, and still protects the openness of the balcony. ${context.localityProof.charAt(0).toUpperCase()}${context.localityProof.slice(1)}.`,
      },
      {
        header: `How invisible grills suit balconies in ${location.name}`,
        content:
          `Invisible grills work especially well in ${location.name} because ${context.structure.toLowerCase()}. They create a barrier that feels light in appearance but strong in function, which is important for apartments where people want clear views, better hygiene, and confident child-safe planning.`,
      },
      {
        header: `304 grade stainless steel invisible grills for ${location.name}`,
        content:
          `304 grade stainless steel cables, protective coating, and corrosion-resistant channels are important in ${location.name} because ${context.weather.toLowerCase()}. In premium communities and high-rise projects, that rust-resistant specification supports both long-term performance and the polished finish buyers expect from a top rated company.`,
      },
      {
        header: `Professional invisible grill installation process in ${location.name}`,
        content:
          `The process starts with a free inspection, detailed site measurement, and a layout that suits the actual balcony or window opening. From there, channel alignment, cable tension, fixing precision, and clean edge finishing are handled carefully so the final result looks refined and trustworthy. ${context.landmark.charAt(0).toUpperCase()}${context.landmark.slice(1)}.`,
      },
      {
        header: `Invisible grill cost in ${location.name}`,
        content:
          `Pricing depends on balcony size, number of openings, floor level, and finish expectations. Still, buyers in ${location.name} rarely compare only on cost. They also compare best quality, near me support, same day inspection, and whether the company explains materials clearly enough to earn trust before installation.`,
      },
      {
        header: `Why premium apartments in ${location.name} choose invisible grills`,
        content:
          `${context.localityProof.charAt(0).toUpperCase()}${context.localityProof.slice(1)}. In these homes, bulky protection systems often look out of place, so invisible grills perform better because they preserve the visual standard of the property while supporting bird control, family safety, and daily usability.`,
      },
      {
        header: `Maintenance tips for invisible grills in ${location.name}`,
        content:
          `Invisible grills stay effective with simple cleaning, routine inspection, and correct day-to-day usage. In ${location.name}, this matters because ${context.weather.toLowerCase()}. Buyers trust the service more when maintenance is explained clearly, because it shows the product is being positioned as a long-term premium upgrade rather than a quick short-term sale.`,
      },
    ];
  }

  if (service.slug === "anti-bird-net-installation" || service.slug === "pigeon-safety-nets") {
    return [
      {
        header: `${service.variants[0]} in ${location.name}`,
        content:
          `${service.shortName} in ${location.name} is highly relevant for homes dealing with pigeon nesting, droppings, and repetitive balcony cleaning. Searchers often use phrases like ${keywordLine} because they want an excellent local team that can solve the issue quickly without blocking air or sunlight.`,
      },
      {
        header: `How ${service.shortName.toLowerCase()} protects homes in ${location.name}`,
        content:
          `${service.shortName} is planned to stop bird entry while keeping the balcony breathable and usable. That makes it a strong fit for ${location.name}, where apartments, utility spaces, and open windows are used daily and need a practical but neat-looking solution.`,
      },
      {
        header: `Premium weather-ready net material for ${location.name}`,
        content:
          `${service.materialFocus[0].charAt(0).toUpperCase()}${service.materialFocus[0].slice(1)}, ${service.materialFocus[1]}, and secure fixing support better long-term performance in ${location.name}. ${context.weather.charAt(0).toUpperCase()}${context.weather.slice(1)}, so material quality has a direct effect on how clean and dependable the system remains.`,
      },
      {
        header: `Professional bird control installation in ${location.name}`,
        content:
          `The work begins with measurement and an access review, followed by perimeter planning and neat installation. Buyers in ${location.name} usually convert faster when the company explains exactly how the net will sit, how visible it will be, and how it will handle daily balcony use in their building type.`,
      },
      {
        header: `${service.shortName} cost in ${location.name}`,
        content:
          `Cost depends on opening size, access conditions, fixing length, and finishing detail. Even so, the best converting pages in ${location.name} are not just price-focused. They combine cost transparency with free inspection, same day response, and clear guidance on long-term value and maintenance.`,
      },
      {
        header: `Why ${location.name} residents trust ${service.shortName.toLowerCase()}`,
        content:
          `${context.localityProof.charAt(0).toUpperCase()}${context.localityProof.slice(1)}. When the page reflects local balcony problems, weather exposure, and apartment living patterns, buyers feel the service understands their exact issue rather than offering a generic citywide promise.`,
      },
      {
        header: `Maintenance advice for ${service.shortName.toLowerCase()} in ${location.name}`,
        content:
          `${service.maintenanceLine.charAt(0).toUpperCase()}${service.maintenanceLine.slice(1)}. In ${location.name}, that supports long-term hygiene, a cleaner balcony feel, and better trust from families who want a dependable bird control solution.`,
      },
    ];
  }

  if (
    service.slug === "balcony-safety-nets" ||
    service.slug === "children-safety-nets" ||
    service.slug === "pet-safety-nets" ||
    service.slug === "window-safety-nets"
  ) {
    return [
      {
        header: `${service.variants[0]} in ${location.name}`,
        content:
          `${service.shortName} in ${location.name} is designed for homes where open edges, windows, and elevated spaces need dependable everyday protection. Searchers often use terms like ${keywordLine} because they want a local company that feels trusted, responsive, and careful with family-focused installation work.`,
      },
      {
        header: `How ${service.shortName.toLowerCase()} supports modern homes in ${location.name}`,
        content:
          `${service.shortName} works well in ${location.name} because ${context.structure.toLowerCase()}. Instead of creating a bulky barrier, the goal is to provide safer use of the space while preserving air, light, and a comfortable visual finish suited to daily family life.`,
      },
      {
        header: `Material quality and weather performance in ${location.name}`,
        content:
          `${service.materialFocus[0].charAt(0).toUpperCase()}${service.materialFocus[0].slice(1)}, ${service.materialFocus[1]}, and carefully planned support hardware help the installation stay reliable in ${location.name}. ${context.weather.charAt(0).toUpperCase()}${context.weather.slice(1)}, so weather-aware material planning is a major trust factor for buyers comparing the best options.`,
      },
      {
        header: `Installation planning for apartments and communities in ${location.name}`,
        content:
          `Every project starts with a free inspection, measurement, and a review of how the space is actually used. In ${location.name}, that is important because tower balconies, corner windows, stair openings, and family-heavy layouts all need slightly different fixing strategies to feel secure and still look neat.`,
      },
      {
        header: `${service.shortName} cost and conversion factors in ${location.name}`,
        content:
          `The final price depends on size, height, access, and finishing requirements. Still, many homeowners in ${location.name} are comparing more than cost. They want near me support, same day inspection, trusted workmanship, and clear material quality because safety services are a confidence-based purchase.`,
      },
      {
        header: `Why buyers in ${location.name} prefer this ${service.shortName.toLowerCase()}`,
        content:
          `${context.localityProof.charAt(0).toUpperCase()}${context.localityProof.slice(1)}. Buyers want the service to feel specific to their family needs, their building style, and their weather exposure. That local clarity helps the page perform better for both SEO and conversion.`,
      },
      {
        header: `Long-term maintenance for ${service.shortName.toLowerCase()} in ${location.name}`,
        content:
          `${service.maintenanceLine.charAt(0).toUpperCase()}${service.maintenanceLine.slice(1)}. That is especially helpful in ${location.name}, where outdoor openings may face direct sun, dust, and regular daily use in active homes.`,
      },
    ];
  }

  if (service.slug === "building-safety-nets" || service.slug === "sports-nets-installation") {
    return [
      {
        header: `${service.variants[0]} in ${location.name}`,
        content:
          `${service.shortName} in ${location.name} is typically chosen by buyers with strong commercial or project-specific intent. Searchers using ${keywordLine} usually need a system that can perform on larger sites, exposed areas, and high-utility spaces where safety and reliability are non-negotiable.`,
      },
      {
        header: `How ${service.shortName.toLowerCase()} fits ${location.name} site conditions`,
        content:
          `${service.shortName} is planned according to access, span, elevation, and actual usage of the space. In ${location.name}, that matters because ${context.weather.toLowerCase()} and larger-format installations need engineered planning rather than a simple one-size-fits-all approach.`,
      },
      {
        header: `Heavy-duty materials for ${service.shortName.toLowerCase()} in ${location.name}`,
        content:
          `${service.materialFocus[0].charAt(0).toUpperCase()}${service.materialFocus[0].slice(1)}, ${service.materialFocus[1]}, and reinforced support choices are key for projects in ${location.name}. Buyers want confidence that the system will handle load, span, exposure, and regular wear without looking temporary or poorly planned.`,
      },
      {
        header: `Professional project execution in ${location.name}`,
        content:
          `The process starts with a site visit, practical requirement mapping, and installation planning around access and safety. That local planning is essential in ${location.name}, where project timelines, visibility, and operational use often shape the buying decision as much as price does.`,
      },
      {
        header: `${service.shortName} pricing in ${location.name}`,
        content:
          `Pricing usually depends on project size, material grade, height, support structure, and execution complexity. Customers comparing services in ${location.name} often want a fast quote, but they also need confidence that the product is being planned correctly for the site and not sold as a generic low-cost option.`,
      },
      {
        header: `Why ${location.name} projects choose ${service.shortName.toLowerCase()}`,
        content:
          `${context.localityProof.charAt(0).toUpperCase()}${context.localityProof.slice(1)}. When the content speaks clearly about site conditions, weather, and real installation logic, project buyers feel they are dealing with a more experienced and trustworthy company.`,
      },
      {
        header: `Maintenance and lifecycle value in ${location.name}`,
        content:
          `${service.maintenanceLine.charAt(0).toUpperCase()}${service.maintenanceLine.slice(1)}. In ${location.name}, that helps clients protect both their installation value and the reliability of the site over time.`,
      },
    ];
  }

  return [
    {
      header: `${service.variants[0]} in ${location.name}`,
      content:
        `${service.shortName} in ${location.name} is highly relevant for buyers dealing with ${service.problemFocus}. In ${context.microMarket}, people often search for ${keywordLine} because they want a trusted company that can combine visual neatness, long-term durability, and a fast inspection process. ${context.localityProof} and that makes locality-specific content far more persuasive than a generic city page.`,
    },
    {
      header: `How ${service.shortName} works for ${location.name} properties`,
      content:
        `${service.shortName} is planned around the way homes are actually used in ${location.name}. ${context.structure.charAt(0).toUpperCase()}${context.structure.slice(1)}. ${context.weather.charAt(0).toUpperCase()}${context.weather.slice(1)}, so the installation has to support comfort, safety, and daily usability without making the home feel heavy or closed.`,
    },
    {
      header: `Material quality that suits ${location.name}`,
      content:
        `${service.materialFocus[0].charAt(0).toUpperCase()}${service.materialFocus[0].slice(1)}, ${service.materialFocus[1]}, and ${service.materialFocus[2]} are selected because ${context.weather.toLowerCase()}. This matters in ${location.name}, where homeowners and facility teams compare top rated options and want proof that the system will keep looking clean while handling local site pressure, sunlight, and dust exposure.`,
    },
    {
      header: `Professional ${service.shortName.toLowerCase()} installation process in ${location.name}`,
      content:
        `The installation begins with a free inspection, site measurement, and a layout decision that fits the actual property. We then focus on ${service.installDetail}. ${context.landmark.charAt(0).toUpperCase()}${context.landmark.slice(1)}, which is why a polished and location-aware process matters for searchers comparing best service, near me teams, and experienced local installers.`,
    },
    {
      header: `${service.shortName} cost and buying intent in ${location.name}`,
      content:
        `Price depends on measurement, access, height, material choice, and finishing complexity. Still, most buyers in ${location.name} are not comparing only on rate; they are comparing value across free inspection, same day response, top rated workmanship, and how confidently the installer explains the system. ${context.buyerIntent.charAt(0).toUpperCase()}${context.buyerIntent.slice(1)}.`,
    },
    {
      header: `Why ${location.name} buyers choose ${service.shortName}`,
      content:
        `${context.localityProof.charAt(0).toUpperCase()}${context.localityProof.slice(1)}. They want the service to feel relevant to their building type, their weather exposure, and the way their family or property is used every day. ${service.shortName} performs better as a sales page when it answers informational questions clearly while still supporting commercial intent with best, excellent, trusted, and near me style search language.`,
    },
    {
      header: `Maintenance and long-term performance for ${service.shortName} in ${location.name}`,
      content:
        `${service.maintenanceLine.charAt(0).toUpperCase()}${service.maintenanceLine.slice(1)}. In ${location.name}, that becomes even more important because ${context.weather.toLowerCase()}. When maintenance advice is explained clearly on the page, buyers trust the company more because it shows the service is being sold as a long-term solution rather than a short-term installation.`,
    },
  ];
}

function buildLocationEntry(
  serviceSeed: ServiceSeed,
  service: ServiceDefinition,
  location: LocationDefinition,
  allLocations: LocationDefinition[],
  allServices: ServiceDefinition[],
): ServiceLocationContent {
  const context = buildLocationContext(location.name);
  const highlights = buildHighlights(serviceSeed, context, location);
  const applications = buildApplications(serviceSeed, context);
  const faqs = buildFaqs(serviceSeed, location, context);
  const sections = buildSections(serviceSeed, location, context);
  const nearbyLocations = allLocations.filter((item) => item.slug !== location.slug).slice(0, 6);
  const similarProducts = service.relatedSlugs
    .map((slug) => allServices.find((item) => item.slug === slug))
    .filter((item): item is ServiceDefinition => Boolean(item));

  const heroTitle = `${serviceSeed.shortName} in ${location.name} for homes that want premium protection, trusted workmanship, and a locally relevant solution.`;
  const heroDescription =
    `${serviceSeed.heroDescription} In ${location.name}, this matters even more because ${context.structure.toLowerCase()} and ${context.weather.toLowerCase()}. ${context.commercialLine.charAt(0).toUpperCase()}${context.commercialLine.slice(1)}.`;
  const intro =
    `${serviceSeed.intro} ${context.landmark.charAt(0).toUpperCase()}${context.landmark.slice(1)}. ${serviceSeed.urgencyLine.charAt(0).toUpperCase()}${serviceSeed.urgencyLine.slice(1)}.`;

  return {
    service,
    location,
    heroTitle,
    heroDescription,
    intro,
    sections,
    highlights,
    applications,
    faqs,
    nearbyLocations,
    similarProducts,
    conclusion:
      `${serviceSeed.shortName} in ${location.name} works best when the page speaks directly to the buyer's building type, weather exposure, and search intent. ${context.conclusionLine.charAt(0).toUpperCase()}${context.conclusionLine.slice(1)}. By combining informational detail, commercial trust signals, navigational references, and locality-specific language, the page becomes more useful for users and more credible for search engines looking for genuinely local expertise.`,
    trustCards: [
      `${serviceSeed.shortName} tailored for ${location.name}`,
      `${context.market === "community" ? "Township-ready" : "Location-specific"} ${serviceSeed.category.toLowerCase()}`,
      `${serviceSeed.trustFocus[0]} for ${context.microMarket}`,
    ],
    statCards: [
      { label: `${serviceSeed.shortName} finish`, value: serviceSeed.badge },
      { label: `${location.name} search intent`, value: serviceSeed.searchTerms[0] },
      { label: `Buyer confidence`, value: serviceSeed.commercialHooks[0] },
    ],
    trustBuilderItems: [
      `${serviceSeed.shortName} content written specifically for ${location.name}`,
      `${serviceSeed.materialFocus[0]} and ${serviceSeed.materialFocus[1]} explained with local weather relevance`,
      `${serviceSeed.shortName} FAQs aligned to informational and commercial search intent`,
      `${location.name} market context connected to real Hyderabad buyer behavior`,
    ],
    cta: {
      eyebrow: `${serviceSeed.shortName} in ${location.name}`,
      title: `Book ${serviceSeed.shortName} with a free inspection in ${location.name}`,
      body: `Need the best ${serviceSeed.shortName.toLowerCase()} near ${location.name}? Request a free inspection, quick quote, and locally planned recommendation built around your property type, exposure conditions, and finishing expectations.`,
    },
    nearbyIntro: `Explore nearby Hyderabad locations where buyers also search for ${serviceSeed.searchTerms[0]}, premium local installers, and related ${serviceSeed.category.toLowerCase()} solutions.`,
    similarIntro: `Customers evaluating ${serviceSeed.shortName.toLowerCase()} in ${location.name} often compare these related services before they book a final site inspection.`,
    faqHeading: `${serviceSeed.shortName} FAQs for ${location.name}`,
    applicationHeading: `${serviceSeed.shortName} applications for ${location.name}`,
    highlightsHeading: `${serviceSeed.shortName} highlights for ${location.name}`,
    coverageHeading: `Why ${serviceSeed.shortName.toLowerCase()} pages should stay local in ${location.name}`,
    coverageBody:
      `This page is written for ${location.name}, not as a generic Hyderabad page. It reflects ${context.microMarket}, local buyer intent, weather exposure, and the style of homes that usually need ${serviceSeed.shortName.toLowerCase()}. That local depth improves trust for customers and creates stronger relevance for SEO.`,
    breadcrumbLabel: `${serviceSeed.shortName} in ${location.name}`,
  };
}

export const LOCATIONS: LocationDefinition[] = buildLocations();

export const SERVICES: ServiceDefinition[] = locationsServices.map((serviceName) => {
  const seed = createPreset(serviceName);

  return {
    slug: seed.slug,
    name: seed.name,
    shortName: seed.shortName,
    badge: seed.badge,
    category: seed.category,
    heroTitle: seed.heroTitle,
    heroDescription: seed.heroDescription,
    intro: seed.intro,
    variants: seed.variants,
    sectionTemplates: [],
    highlights: seed.materialFocus,
    applications: seed.variants,
    faqs: [],
    relatedSlugs: seed.relatedSlugs,
    gallery: seed.gallery,
    materialFocus: seed.materialFocus,
    trustFocus: seed.trustFocus,
  };
});

export const servicesDetails: Record<string, Record<string, ServiceLocationContent>> = Object.fromEntries(
  SERVICES.map((service) => {
    const serviceSeed = createPreset(service.name);

    return [
      service.slug,
      Object.fromEntries(
        LOCATIONS.map((location) => [
          location.slug,
          buildLocationEntry(serviceSeed, service, location, LOCATIONS, SERVICES),
        ]),
      ),
    ];
  }),
);

export function getServiceBySlug(serviceSlug: string) {
  return SERVICES.find((service) => service.slug === serviceSlug);
}

export function getLocationBySlug(locationSlug: string) {
  return LOCATIONS.find((location) => location.slug === locationSlug);
}

export function buildServicePageData(serviceSlug: string, locationSlug: string) {
  return servicesDetails[serviceSlug]?.[locationSlug] ?? null;
}
