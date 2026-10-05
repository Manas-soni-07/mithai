export interface NavLink {
  label: string;
  href: string;
}

export interface PackItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  iconName: "leaf" | "shield" | "sparkles" | "heart";
  description?: string;
}

export interface OrderStep {
  step: number;
  iconName: "whatsapp" | "message" | "fileText" | "truck";
  title: string;
}

export const siteConfig = {
  name: "Shree Shyam",
  tagline: "CHURMA PRASAD",
  slogan: "|| जय श्री श्याम ||",
  phoneDisplay: "+91 98765 43210",
  phoneNumber: "+919876543210",
  whatsappNumber: "919876543210",
  whatsappDefaultMessage: "Jai Shree Shyam! I would like to enquire about Shree Shyam Churma Prasad.",
  instagramHandle: "@shreeshyamprasad",
  instagramUrl: "https://instagram.com/shreeshyamprasad",
  serviceArea: "Pan India Delivery",
  serviceAreaNote: "(as applicable)",
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Our Prasad", href: "#prasad" },
    { label: "Why Us", href: "#why-us" },
    { label: "How to Order", href: "#how-to-order" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    title: "Shree Shyam",
    subtitle: "CHURMA PRASAD",
    devotionalGreeting: "|| जय श्री श्याम ||",
    description:
      "A sacred offering prepared with pure ingredients and devotion for all Shri Khatu Shyam Ji devotees.",
    badges: [
      "Pure ingredients",
      "Made with Devotion",
      "Hygienically Packed",
      "For All Devotees",
    ],
    sidePillars: ["Bhakti", "Seva", "Prasad", "Prem"],
  },
  about: {
    heading: "About Our Prasad",
    paragraph:
      "We prepare premium quality Churma Prasad especially for Shri Khatu Shyam Ji devotees. Made with traditional recipe, fresh ingredients and utmost care, our prasad is prepared hygienically and packed carefully so that it reaches you with the same devotion.",
    ctaText: "Know More About Us →",
    quote: "“Prasad\nis not just food,\nit is a blessing\nthat connects us\nto Shri Shyam Ji.”",
  },
  gallery: [
    {
      id: "traditional",
      title: "Traditional Taste",
      subtitle: "Authentic Rajasthani recipe with pure desi ghee",
      image: "/images/churma-1.svg",
    },
    {
      id: "texture",
      title: "Rich Texture",
      subtitle: "Coarse wheat flour, roasted to golden perfection",
      image: "/images/churma-2.svg",
    },
    {
      id: "packaged",
      title: "Carefully Packed",
      subtitle: "Air-tight seal to retain divine aroma & freshness",
      image: "/images/churma-pack.svg",
    },
    {
      id: "devotion",
      title: "Made with Devotion",
      subtitle: "Prepared in a sanctified devotional atmosphere",
      image: "/images/churma-4.svg",
    },
  ] as GalleryItem[],
  whyChooseUs: {
    heading: "Why Choose Us",
    features: [
      {
        id: "fresh",
        title: "Freshly Prepared",
        iconName: "leaf",
      },
      {
        id: "hygiene",
        title: "Hygienically Packed",
        iconName: "shield",
      },
      {
        id: "quality",
        title: "Quality Ingredients",
        iconName: "sparkles",
      },
      {
        id: "devotion",
        title: "Made with Devotion",
        iconName: "heart",
      },
    ] as FeatureItem[],
    checklist: [
      "Traditional Recipe",
      "No Artificial Preservatives",
      "Prepared with Love",
      "Suitable for All Devotees",
    ],
  },
  packs: [
    {
      id: "250g",
      title: "250 g",
      image: "/images/pack-250g.svg",
    },
    {
      id: "500g",
      title: "500 g",
      image: "/images/pack-500g.svg",
    },
    {
      id: "1kg",
      title: "1 kg",
      image: "/images/pack-1kg.svg",
    },
    {
      id: "bulk",
      title: "Bulk Orders",
      subtitle: "For special requirements please contact us.",
      image: "/images/bulk-order.svg",
    },
  ] as PackItem[],
  howToOrder: {
    heading: "How to Order",
    steps: [
      {
        step: 1,
        iconName: "whatsapp",
        title: "Message us on WhatsApp",
      },
      {
        step: 2,
        iconName: "message",
        title: "Tell us your quantity / requirement",
      },
      {
        step: 3,
        iconName: "fileText",
        title: "We confirm price and delivery details",
      },
      {
        step: 4,
        iconName: "truck",
        title: "Your prasad is prepared and dispatched",
      },
    ] as OrderStep[],
  },
  contact: {
    heading: "Get in Touch",
    intro:
      "We are happy to serve all Shri Shyam devotees. For orders, enquiries or bulk requirements, please contact us.",
  },
  footer: {
    devotionalClose: "Jai Shree Shyam ♡",
    copyright: "© 2024 Shree Shyam Churma Prasad. All Rights Reserved.",
  },
};

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = customMessage || siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}
