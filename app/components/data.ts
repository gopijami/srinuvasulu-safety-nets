// lib/data.ts

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    title: "Bird Control Solutions",
    services: [
      { id: "1", name: "Anti-Bird Nets", slug: "anti-bird-nets", description: "High-durability nets to keep birds away." },
      { id: "2", name: "Pigeon Safety Nets", slug: "pigeon-safety-nets", description: "Expert pigeon exclusion for balconies." },
      { id: "3", name: "Bird Spikes", slug: "bird-spikes", description: "Professional spike installation for ledges." },
      { id: "4", name: "Pigeon Control Nets", slug: "pigeon-control-nets", description: "Effective pigeon management." },
      { id: "5", name: "Bird Protection Nets", slug: "bird-protection-nets", description: "Complete birdproofing solutions." },
    ]
  },
  {
    title: "Safety & Protection",
    services: [
      { id: "6", name: "Balcony Safety Nets", slug: "balcony-safety-nets", description: "Secure your balcony for kids and pets." },
      { id: "7", name: "Building Safety Nets", slug: "building-safety-nets", description: "Essential for construction sites." },
      { id: "8", name: "Children Safety Nets", slug: "children-safety-nets", description: "Soft, high-strength nets for families." },
      { id: "9", name: "Car Parking Safety Nets", slug: "car-parking-safety-nets", description: "Protect your vehicles from debris." },
      { id: "10", name: "Invisible Grills", slug: "invisible-grills", description: "Modern, aesthetic safety solutions." },
      { id: "11", name: "Staircase Nets", slug: "staircase-nets", description: "Secure stairwells with ease." },
      { id: "12", name: "Pet & Cat Safety Nets", slug: "pet-safety-nets", description: "Keep your furry friends safe." },
    ]
  },
  {
    title: "Sports & Specialized",
    services: [
      { id: "13", name: "Cricket Practice Nets", slug: "cricket-practice-nets", description: "Professional grade sports netting." },
      { id: "14", name: "All Sports Nets", slug: "all-sports-nets", description: "Customized solutions for all sports." },
      { id: "15", name: "Artificial Grass Turf", slug: "artificial-grass-turf", description: "Premium turf for sports and gardens." },
      { id: "16", name: "Monkey Safety Nets", slug: "monkey-safety-nets", description: "Strong nets to prevent monkey entry." },
      { id: "17", name: "Industrial Safety Nets", slug: "industrial-safety-nets", description: "Heavy-duty industrial protection." },
    ]
  }
];