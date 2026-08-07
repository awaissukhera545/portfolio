import { slugify } from "@/utlis/slugify";

export const portfolioItems = [
  {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/real-projects/mehmood-bashir-hospital.png",
    width: 1400,
    height: 1140,
    title: "Mehmood Bashir Hospital",
    description: "Hospital website for a 24/7 healthcare facility with WhatsApp appointment booking, doctor profiles across multiple specialties, and department pages.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["Healthcare", "Web App"],
    year: 2026,
    role: "Full-Stack Development",
    link: "https://mehmoodbashirhospital.com.pk",
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/real-projects/entreqube.png",
    width: 1400,
    height: 1140,
    title: "EntreQube",
    description: "Community marketplace where entrepreneurs post real-world problems, crowdsource solutions and launch validated products, with AI-assisted tools.",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
    categories: ["SaaS", "Community Platform"],
    year: 2026,
    role: "Full-Stack Development",
    link: "https://entreqube.com",
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/real-projects/employee-management-system.png",
    width: 1258,
    height: 597,
    title: "Employee Management System",
    description: "Internal dashboard for managing employee records, attendance and roles with role-based access control.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    categories: ["Dashboard", "Web App"],
    year: 2025,
    role: "Full-Stack Development",
    link: "#",
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/real-projects/tri-blends.png",
    width: 1256,
    height: 598,
    title: "Tri-blends",
    description: "Ecommerce storefront with product catalog, cart and checkout for the Tri-blends brand.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["E-commerce"],
    year: 2025,
    role: "Full-Stack Development",
    link: "#",
  },
  {
    id: 5,
    animationOrder: 5,
    imageSrc: "/assets/images/latest-portfolio/tab-image-1.png",
    width: 1200,
    height: 800,
    title: "More Projects Coming Soon",
    description: "New client work is in progress — check back soon for more case studies.",
    tags: [],
    categories: ["Coming Soon"],
    year: 2026,
    role: "Coming Soon",
    link: "#",
  },
  {
    id: 6,
    animationOrder: 6,
    imageSrc: "/assets/images/latest-portfolio/tab-image-2.png",
    width: 1200,
    height: 800,
    title: "New Case Study Coming Soon",
    description: "New client work is in progress — check back soon for more case studies.",
    tags: [],
    categories: ["Coming Soon"],
    year: 2026,
    role: "Coming Soon",
    link: "#",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems2 = [
  {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/real-projects/mehmood-bashir-hospital.png",
    width: 1400,
    height: 1140,
    title: "Mehmood Bashir Hospital",
    description: "Full-Stack Development",
    link: "https://mehmoodbashirhospital.com.pk",
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/real-projects/entreqube.png",
    width: 1400,
    height: 1140,
    title: "EntreQube",
    description: "Full-Stack Development",
    link: "https://entreqube.com",
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/real-projects/employee-management-system.png",
    width: 1258,
    height: 597,
    title: "Employee Management System",
    description: "Full-Stack Development",
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-4.jpg",
    width: 1939,
    height: 1572,
    title: "More Projects Coming Soon",
    description: "Coming Soon",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems3 = [
  {
    id: 1,
    imageSrc: "/assets/images/real-projects/mehmood-bashir-hospital.png",
    title: "Mehmood Bashir Hospital",
    description: "Full-Stack Development",
  },
  {
    id: 2,
    imageSrc: "/assets/images/real-projects/entreqube.png",
    title: "EntreQube",
    description: "Full-Stack Development",
  },
  {
    id: 3,
    imageSrc: "/assets/images/real-projects/employee-management-system.png",
    title: "Employee Management System",
    description: "Full-Stack Development",
  },
  {
    id: 4,
    imageSrc: "/assets/images/real-projects/tri-blends.png",
    title: "Tri-blends",
    description: "Full-Stack Development",
  },
  {
    id: 5,
    imageSrc: "/assets/images/latest-portfolio/tab-image-5.png",
    title: "More Projects Coming Soon",
    description: "Coming Soon",
  },
  {
    id: 6,
    imageSrc: "/assets/images/latest-portfolio/tab-image-6.png",
    title: "New Case Study Coming Soon",
    description: "Coming Soon",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems4 = [
  {
    id: 1,
    imageSrc: "/assets/images/portfolio/portfolio-01.jpg",
    title: "SaaS product engineering",
    category: "Development",
    likes: 600,
    animationDelay: null,
  },
  {
    id: 2,
    imageSrc: "/assets/images/portfolio/portfolio-02.jpg",
    title: "AI feature integration",
    category: "Development",
    likes: 600,
    animationDelay: 200,
  },
  {
    id: 3,
    imageSrc: "/assets/images/portfolio/portfolio-03.jpg",
    title: "Web app development",
    category: "Development",
    likes: 600,
    animationDelay: null,
  },
  {
    id: 4,
    imageSrc: "/assets/images/portfolio/portfolio-04.jpg",
    title: "API design & integration",
    category: "Development",
    likes: 600,
    animationDelay: 200,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems5 = [
  {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/real-projects/mehmood-bashir-hospital.png",
    title: "Mehmood Bashir Hospital",
    tags: ["Healthcare", "Next.js"],
    buttonText: "View Details",
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/real-projects/entreqube.png",
    title: "EntreQube",
    tags: ["SaaS", "MEAN Stack"],
    buttonText: "View Details",
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/real-projects/tri-blends.png",
    title: "Tri-blends",
    tags: ["E-commerce", "Next.js"],
    buttonText: "View Details",
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/real-projects/employee-management-system.png",
    title: "Employee Management System",
    tags: ["Dashboard", "Next.js"],
    buttonText: "View Design",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems6 = [
  {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/portfolio/05.webp",
    title: "More Projects Coming Soon",
    tags: ["Coming Soon"],
    buttonText: "View Details",
    width: 1134,
    height: 1176,
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/portfolio/06.webp",
    title: "New Case Study Coming Soon",
    tags: ["Coming Soon"],
    buttonText: "View Details",
    width: 1134,
    height: 1176,
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/real-projects/mehmood-bashir-hospital.png",
    title: "Mehmood Bashir Hospital",
    tags: ["Healthcare", "Next.js"],
    buttonText: "View Details",
    width: 1134,
    height: 1176,
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/real-projects/employee-management-system.png",
    title: "Employee Management System",
    tags: ["Dashboard", "Next.js"],
    buttonText: "View Design",
    width: 1134,
    height: 1176,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems7 = [
  {
    id: 1,
    imageSrc: "/assets/images/real-projects/mehmood-bashir-hospital.png",
    title: "Mehmood Bashir Hospital",
    description: "Full-Stack Development",
    width: 1279,
    height: 598,
    marginClass: "",
  },
  {
    id: 2,
    imageSrc: "/assets/images/real-projects/entreqube.png",
    title: "EntreQube",
    description: "Full-Stack Development",
    width: 1279,
    height: 590,
    marginClass: "mt--100 mt_sm--0 mt_md--50",
  },
  {
    id: 3,
    imageSrc: "/assets/images/real-projects/employee-management-system.png",
    title: "Employee Management System",
    description: "Full-Stack Development",
    width: 1258,
    height: 597,
    marginClass: "",
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-4.jpg",
    title: "More Projects Coming Soon",
    description: "Coming Soon",
    width: 1939,
    height: 1572,
    marginClass: "mt--100 mt_sm--0 mt_md--50",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems8 = [
  {
    id: 1,
    imageSrc: "/assets/images/real-projects/mehmood-bashir-hospital.png",
    title: "Mehmood Bashir Hospital",
    description: "Full-Stack Development",
    width: 410,
    height: 457,
    categories: ["Healthcare", "Web App"],
  },
  {
    id: 2,
    imageSrc: "/assets/images/real-projects/entreqube.png",
    title: "EntreQube",
    description: "Full-Stack Development",
    width: 410,
    height: 457,
    categories: ["SaaS", "Community Platform"],
  },
  {
    id: 3,
    imageSrc: "/assets/images/real-projects/employee-management-system.png",
    title: "Employee Management System",
    description: "Full-Stack Development",
    width: 410,
    height: 457,
    categories: ["Dashboard", "Web App"],
  },
  {
    id: 4,
    imageSrc: "/assets/images/real-projects/tri-blends.png",
    title: "Tri-blends",
    description: "Full-Stack Development",
    width: 410,
    height: 457,
    categories: ["E-commerce"],
  },
  {
    id: 5,
    imageSrc: "/assets/images/latest-portfolio/tab-image-5.png",
    title: "More Projects Coming Soon",
    description: "Coming Soon",
    width: 410,
    height: 457,
    categories: ["Coming Soon"],
  },
  {
    id: 6,
    imageSrc: "/assets/images/latest-portfolio/tab-image-6.png",
    title: "New Case Study Coming Soon",
    description: "Coming Soon",
    width: 410,
    height: 457,
    categories: ["Coming Soon"],
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems9 = [
  {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-5.jpg",
    title: "SaaS dashboard design",
    tags: ["Figma", "Next.js"],
    buttonText: "View Design",
    width: 550,
    height: 396,
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-6.jpg",
    title: "AI chat interface",
    tags: ["OpenAI", "Claude"],
    buttonText: "View Design",
    width: 550,
    height: 396,
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-7.jpg",
    title: "E-commerce storefront",
    tags: ["Next.js", "Stripe"],
    buttonText: "View Design",
    width: 550,
    height: 396,
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-8.jpg",
    title: "Analytics dashboard",
    tags: ["React", "TypeScript"],
    buttonText: "View Design",
    width: 550,
    height: 396,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems10 = [
  {
    id: 1,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-5.jpg",
    imageAlt: "Project Thumbnail",
    title: "SaaS dashboard design",
    tags: ["Figma", "Next.js"],
    animationOrder: 1,
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-6.jpg",
    imageAlt: "Project Thumbnail",
    title: "AI chat interface",
    tags: ["OpenAI", "Claude"],
    animationOrder: 2,
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-7.jpg",
    imageAlt: "Project Thumbnail",
    title: "E-commerce storefront",
    tags: ["Next.js", "Stripe"],
    animationOrder: 3,
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-8.jpg",
    imageAlt: "Project Thumbnail",
    title: "Analytics dashboard",
    tags: ["React", "TypeScript"],
    animationOrder: 4,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems11 = [
  {
    id: 1,
    imageSrc: "/assets/images/real-projects/mehmood-bashir-hospital.png",
    title: "Mehmood Bashir Hospital",
    description: "Full-Stack Development",
    width: 410,
    height: 457,
    categories: ["Healthcare", "Web App"],
  },
  {
    id: 2,
    imageSrc: "/assets/images/real-projects/entreqube.png",
    title: "EntreQube",
    description: "Full-Stack Development",
    width: 410,
    height: 457,
    categories: ["SaaS", "Community Platform"],
  },
  {
    id: 3,
    imageSrc: "/assets/images/real-projects/employee-management-system.png",
    title: "Employee Management System",
    description: "Full-Stack Development",
    width: 410,
    height: 457,
    categories: ["Dashboard", "Web App"],
  },
  {
    id: 4,
    imageSrc: "/assets/images/real-projects/tri-blends.png",
    title: "Tri-blends",
    description: "Full-Stack Development",
    width: 410,
    height: 457,
    categories: ["E-commerce"],
  },
  {
    id: 5,
    imageSrc: "/assets/images/latest-portfolio/tab-image-5.png",
    title: "More Projects Coming Soon",
    description: "Coming Soon",
    width: 410,
    height: 457,
    categories: ["Coming Soon"],
  },
  {
    id: 6,
    imageSrc: "/assets/images/latest-portfolio/tab-image-6.png",
    title: "New Case Study Coming Soon",
    description: "Coming Soon",
    width: 410,
    height: 457,
    categories: ["Coming Soon"],
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const portfolioItems12 = [
  {
    id: 1,
    imageSrc: "/assets/images/real-projects/mehmood-bashir-hospital.png",
    title: "Mehmood Bashir Hospital",
    description: "Full-Stack Development",
    width: 410,
    height: 457,
    link: "https://mehmoodbashirhospital.com.pk",
  },
  {
    id: 2,
    imageSrc: "/assets/images/real-projects/entreqube.png",
    title: "EntreQube",
    description: "Full-Stack Development",
    width: 410,
    height: 457,
    link: "https://entreqube.com",
  },
  {
    id: 3,
    imageSrc: "/assets/images/real-projects/employee-management-system.png",
    title: "Employee Management System",
    description: "Full-Stack Development",
    width: 410,
    height: 457,
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/tab-image-7.png",
    title: "More Projects Coming Soon",
    description: "Coming Soon",
    width: 410,
    height: 457,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const allPortfolioItems = [
  ...portfolioItems,
  ...portfolioItems2,
  ...portfolioItems3,
  ...portfolioItems4,
  ...portfolioItems5,
  ...portfolioItems6,
  ...portfolioItems7,
  ...portfolioItems8,
  ...portfolioItems9,
  ...portfolioItems10,
  ...portfolioItems11,
  ...portfolioItems12,
];
