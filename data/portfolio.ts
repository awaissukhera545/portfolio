import { slugify } from "@/utlis/slugify";

export const portfolioItems = [
  {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-1.jpg",
    width: 1920,
    height: 1572,
    title: "TaskFlow — SaaS Productivity Platform",
    description: "Multi-tenant SaaS for teams with task automation, real-time collaboration and analytics, built on Next.js and PostgreSQL.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
    categories: ["SaaS", "Productivity"],
    year: 2024,
    role: "SaaS Development",
    link: "#",
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-3.jpg",
    width: 1939,
    height: 1572,
    title: "NeuraDesk — AI Support Assistant",
    description: "AI-powered customer support platform with RAG, LLM chat and ticket automation using Claude and OpenAI.",
    tags: ["Next.js", "OpenAI", "Claude", "Supabase"],
    categories: ["AI", "SaaS"],
    year: 2024,
    role: "AI Integration",
    link: "#",
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-4.jpg",
    width: 1939,
    height: 1572,
    title: "InsightDash — Analytics Dashboard",
    description: "Real-time analytics SaaS with custom dashboards, role-based access and AI-generated insights.",
    tags: ["React", "TypeScript", "PostgreSQL", "Prisma"],
    categories: ["Analytics", "SaaS"],
    year: 2023,
    role: "Web App Engineering",
    link: "#",
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-2.jpg",
    width: 1939,
    height: 1572,
    title: "ShopSmart — Headless Commerce",
    description: "Headless e-commerce platform with Stripe billing and AI product recommendations.",
    tags: ["Next.js", "Stripe", "Supabase"],
    categories: ["E-commerce", "SaaS"],
    year: 2023,
    role: "SaaS Development",
    link: "#",
  },
  {
    id: 5,
    animationOrder: 5,
    imageSrc: "/assets/images/latest-portfolio/tab-image-1.png",
    width: 1200,
    height: 800,
    title: "FlowMail — Email Automation SaaS",
    description: "Marketing automation SaaS with a visual workflow builder and AI copy generation.",
    tags: ["Next.js", "Prisma", "Neon", "OpenAI"],
    categories: ["Marketing", "SaaS"],
    year: 2022,
    role: "MVP Development",
    link: "#",
  },
  {
    id: 6,
    animationOrder: 6,
    imageSrc: "/assets/images/latest-portfolio/tab-image-2.png",
    width: 1200,
    height: 800,
    title: "ConnectNow — Realtime Collaboration",
    description: "Realtime messaging and collaboration platform with presence, file sharing and AI summaries.",
    tags: ["Next.js", "Socket.io", "PostgreSQL"],
    categories: ["Realtime", "SaaS"],
    year: 2022,
    role: "Web App Engineering",
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
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-1.jpg",
    width: 1920,
    height: 1572,
    title: "TaskFlow — SaaS Productivity Platform",
    description: "SaaS Development",
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-2.jpg",
    width: 1939,
    height: 1572,
    title: "NeuraDesk — AI Support Assistant",
    description: "AI Integration",
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-3.jpg",
    width: 1939,
    height: 1572,
    title: "InsightDash — Analytics Dashboard",
    description: "Web App Engineering",
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-4.jpg",
    width: 1939,
    height: 1572,
    title: "FlowMail — Email Automation SaaS",
    description: "MVP Development",
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
    imageSrc: "/assets/images/latest-portfolio/tab-image-1.png",
    title: "TaskFlow — SaaS Productivity Platform",
    description: "SaaS Development",
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/tab-image-2.png",
    title: "NeuraDesk — AI Support Assistant",
    description: "AI Integration",
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/tab-image-3.png",
    title: "InsightDash — Analytics Dashboard",
    description: "Web App Engineering",
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/tab-image-4.png",
    title: "ShopSmart — Headless Commerce",
    description: "SaaS Development",
  },
  {
    id: 5,
    imageSrc: "/assets/images/latest-portfolio/tab-image-5.png",
    title: "FlowMail — Email Automation SaaS",
    description: "MVP Development",
  },
  {
    id: 6,
    imageSrc: "/assets/images/latest-portfolio/tab-image-6.png",
    title: "ConnectNow — Realtime Collaboration",
    description: "Web App Engineering",
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
    imageSrc: "/assets/images/portfolio/01.webp",
    title: "TaskFlow SaaS Platform",
    tags: ["SaaS", "Next.js"],
    buttonText: "View Details",
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/portfolio/02.webp",
    title: "NeuraDesk AI Assistant",
    tags: ["AI", "Claude", "OpenAI"],
    buttonText: "View Details",
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/portfolio/03.webp",
    title: "ShopSmart Commerce",
    tags: ["E-commerce", "Stripe"],
    buttonText: "View Details",
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/portfolio/04.webp",
    title: "InsightDash Analytics",
    tags: ["React", "Dashboard"],
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
    title: "FlowMail Automation",
    tags: ["SaaS", "Marketing"],
    buttonText: "View Details",
    width: 1134,
    height: 1176,
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/portfolio/06.webp",
    title: "ConnectNow Realtime",
    tags: ["Realtime", "Socket.io"],
    buttonText: "View Details",
    width: 1134,
    height: 1176,
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/portfolio/07.webp",
    title: "TaskFlow SaaS Platform",
    tags: ["Next.js", "PostgreSQL"],
    buttonText: "View Details",
    width: 1134,
    height: 1176,
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/portfolio/08.webp",
    title: "InsightDash Analytics",
    tags: ["React", "Dashboard"],
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
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-1.jpg",
    title: "TaskFlow — SaaS Productivity Platform",
    description: "SaaS Development",
    width: 1920,
    height: 1572,
    marginClass: "",
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-2.jpg",
    title: "NeuraDesk — AI Support Assistant",
    description: "AI Integration",
    width: 1939,
    height: 1572,
    marginClass: "mt--100 mt_sm--0 mt_md--50",
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-3.jpg",
    title: "InsightDash — Analytics Dashboard",
    description: "Web App Engineering",
    width: 1939,
    height: 1572,
    marginClass: "",
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-4.jpg",
    title: "FlowMail — Email Automation SaaS",
    description: "MVP Development",
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
    imageSrc: "/assets/images/latest-portfolio/tab-image-1.png",
    title: "TaskFlow — SaaS Productivity Platform",
    description: "SaaS Development",
    width: 410,
    height: 457,
    categories: ["SaaS", "Web App", "AI"],
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/tab-image-2.png",
    title: "NeuraDesk — AI Support Assistant",
    description: "AI Integration",
    width: 410,
    height: 457,
    categories: ["AI", "SaaS", "Automation"],
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/tab-image-3.png",
    title: "InsightDash — Analytics Dashboard",
    description: "Web App Engineering",
    width: 410,
    height: 457,
    categories: ["Analytics", "SaaS", "Dashboard"],
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/tab-image-4.png",
    title: "ShopSmart — Headless Commerce",
    description: "SaaS Development",
    width: 410,
    height: 457,
    categories: ["E-commerce", "SaaS", "Payments"],
  },
  {
    id: 5,
    imageSrc: "/assets/images/latest-portfolio/tab-image-5.png",
    title: "FlowMail — Email Automation SaaS",
    description: "MVP Development",
    width: 410,
    height: 457,
    categories: ["Marketing", "SaaS", "AI"],
  },
  {
    id: 6,
    imageSrc: "/assets/images/latest-portfolio/tab-image-6.png",
    title: "ConnectNow — Realtime Collaboration",
    description: "Web App Engineering",
    width: 410,
    height: 457,
    categories: ["Realtime", "SaaS", "Communication"],
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
    imageSrc: "/assets/images/latest-portfolio/tab-image-1.png",
    title: "TaskFlow — SaaS Productivity Platform",
    description: "SaaS Development",
    width: 410,
    height: 457,
    categories: ["SaaS", "Web App", "AI"],
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/tab-image-2.png",
    title: "NeuraDesk — AI Support Assistant",
    description: "AI Integration",
    width: 410,
    height: 457,
    categories: ["AI", "SaaS", "Automation"],
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/tab-image-3.png",
    title: "InsightDash — Analytics Dashboard",
    description: "Web App Engineering",
    width: 410,
    height: 457,
    categories: ["Analytics", "SaaS", "Dashboard"],
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/tab-image-4.png",
    title: "ShopSmart — Headless Commerce",
    description: "SaaS Development",
    width: 410,
    height: 457,
    categories: ["E-commerce", "SaaS", "Payments"],
  },
  {
    id: 5,
    imageSrc: "/assets/images/latest-portfolio/tab-image-5.png",
    title: "FlowMail — Email Automation SaaS",
    description: "MVP Development",
    width: 410,
    height: 457,
    categories: ["Marketing", "SaaS", "AI"],
  },
  {
    id: 6,
    imageSrc: "/assets/images/latest-portfolio/tab-image-6.png",
    title: "ConnectNow — Realtime Collaboration",
    description: "Web App Engineering",
    width: 410,
    height: 457,
    categories: ["Realtime", "SaaS", "Communication"],
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
    imageSrc: "/assets/images/latest-portfolio/tab-image-4.png",
    title: "TaskFlow — SaaS Productivity Platform",
    description: "SaaS Development",
    width: 410,
    height: 457,
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/tab-image-5.png",
    title: "NeuraDesk — AI Support Assistant",
    description: "AI Integration",
    width: 410,
    height: 457,
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/tab-image-6.png",
    title: "InsightDash — Analytics Dashboard",
    description: "Web App Engineering",
    width: 410,
    height: 457,
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/tab-image-7.png",
    title: "FlowMail — Email Automation SaaS",
    description: "MVP Development",
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
