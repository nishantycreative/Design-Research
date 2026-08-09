export type Product = {
  id: string;
  index: string;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  credit: string;
};

export type Project = {
  name: string;
  place: string;
  year: string;
  image: string;
  alt: string;
};

export const SITE = {
  name: "Design Research",
  city: "Mumbai",
  email: "hello@designresearch.in",
  instagram: "https://instagram.com/designresearch.studio",
  foundedBy: "Founded by Simran Chana",
  tagline: "A room within a room.",
};

export const HERO_IMAGE = {
  src: "/images/hero.webp",
  alt: "A calm, sunlit living room in warm beige tones with a low sofa and soft natural light",
};

export const PHILOSOPHY_IMAGES = [
  {
    src: "/images/intro_large.webp",
    alt: "A modern living room with warm timber surfaces and a neutral palette",
    credit: "Spacejoy",
  },
  {
    src: "/images/intro_small.webp",
    alt: "An elegant interior in warm tan and wood tones with soft evening light",
    credit: "R ARCHITECTURE",
  },
];

export const TEASER_IMAGE = {
  src: "/images/teaser.webp",
  alt: "A quiet interior corner with warm light and considered furniture",
};

export const PROJECTS: Project[] = [
  {
    name: "The Terrace House",
    place: "Worli",
    year: "2024",
    image: "/images/project_1.webp",
    alt: "A modern home interior with dark timber, greenery and low evening light",
  },
  {
    name: "Palm Court Residence",
    place: "Bandra",
    year: "2023",
    image: "/images/project_2.webp",
    alt: "A light-filled living room with a green velvet sofa and styled negative space",
  },
  {
    name: "The Olive House",
    place: "Juhu",
    year: "2024",
    image: "/images/project_3.webp",
    alt: "A restrained living space in warm neutrals with generous proportions",
  },
  {
    name: "Sandalwood Apartment",
    place: "Khar",
    year: "2022",
    image: "/images/project_4.webp",
    alt: "An interior in warm gold and walnut tones with a sculptural light fixture",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "premium-coffee-table",
    index: "01",
    name: "Premium Coffee Table",
    description: "Luxury statement piece for the living space.",
    price: "₹1,15,000",
    image: "/images/product_1.webp",
    alt: "A warm wooden coffee table styled in a softly lit interior",
    credit: "Jonathan Borba",
  },
  {
    id: "green-marble-center-table",
    index: "02",
    name: "Italian Green Marble & Brass Base Center Table",
    description: "Italian green marble top on a sculptural brass base.",
    price: "₹1,48,000",
    image: "/images/product_2.webp",
    alt: "Green marble veined surface with brass detailing, photographed in soft light",
    credit: "Idriss Chaïr",
  },
  {
    id: "champagne-gold-panels",
    index: "03",
    name: "Champagne Gold Leaf Linear Panels",
    description:
      "Linear panels finished in champagne gold leafing, creating a subtle play of texture and light.",
    price: "₹1,32,000",
    image: "/images/product_3.webp",
    alt: "A warm gilded surface with fine linear gold detailing catching the light",
    credit: "Dohyuk You",
  },
  {
    id: "black-veneer-console",
    index: "04",
    name: "Black Open-Grain Veneer Console",
    description:
      "Black open-grain veneer console with linear hardwood grid detailing, finished with a brass-clad base for contrast.",
    price: "₹1,24,000",
    image: "/images/product_4.webp",
    alt: "A dark console table in a muted hallway with marble flooring and warm light",
    credit: "RARCHITECTURE Studio",
  },
];

export const PRESS = [
  "Elle Decor",
  "Architectural Digest",
  "Vogue Living",
  "Livingetc",
  "Elle Decor India",
];

export const NAV_LINKS = [
  { label: "Studio", href: "#studio" },
  { label: "Projects", href: "#projects" },
  { label: "Collection", href: "#collection" },
  { label: "Enquire", href: "#contact" },
];

