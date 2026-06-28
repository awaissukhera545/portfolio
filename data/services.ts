import { slugify } from "@/utlis/slugify";

export const services = [
  {
    id: 1,
    icon: "fa-light fa-code",
    title: "SaaS Product Development",
    projects: "20+ Products",
    animationOrder: "1",
  },
  {
    id: 2,
    icon: "fa-light fa-mobile-screen",
    title: "AI Integration",
    projects: "15+ Integrations",
    animationOrder: "2",
  },
  {
    id: 3,
    icon: "fa-light fa-cloud",
    title: "MVP Development",
    projects: "18+ MVPs",
    animationOrder: "3",
  },
  {
    id: 4,
    icon: "fa-light fa-lightbulb",
    title: "Web & API Engineering",
    projects: "30+ Builds",
    animationOrder: "4",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services2 = [
  {
    id: 1,
    num: "01.",
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS builds: multi-tenant architecture, billing, authentication and dashboards on Next.js and PostgreSQL.",
    animationOrder: "1",
    isLink: true,
    column: 1,
  },
  {
    id: 2,
    num: "02.",
    title: "AI Integration",
    description:
      "Embed LLMs, chatbots, RAG search and AI workflows into your product using OpenAI and Claude APIs.",
    animationOrder: "2",
    isLink: true,
    column: 1,
  },
  {
    id: 3,
    num: "03.",
    title: "API Design & Integration",
    description:
      "Secure, well-documented REST and GraphQL APIs, third-party integrations and reliable data pipelines.",
    animationOrder: "3",
    isLink: true,
    column: 1,
  },
  {
    id: 4,
    num: "04.",
    title: "MVP Development",
    description:
      "Go from idea to launch-ready MVP in weeks with a lean, scalable codebase you can keep growing.",
    animationOrder: "4",
    isLink: false,
    column: 2,
  },
  {
    id: 5,
    num: "05.",
    title: "Cloud, DevOps & Reliability",
    description:
      "Deployment, observability and CI/CD on Neon, Supabase and modern cloud infra to keep products fast and reliable.",
    animationOrder: "5",
    isLink: false,
    column: 2,
  },
  {
    id: 6,
    num: "06.",
    title: "Product & Technical Strategy",
    description:
      "Architecture reviews, technical audits and roadmap planning to reduce risk and accelerate delivery.",
    animationOrder: "6",
    isLink: false,
    column: 2,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services3 = [
  {
    id: 1,
    icon: "feather-cast",
    title: "SaaS",
    description:
      "We design and build SaaS products that scale with your business.",
  },
  {
    id: 2,
    icon: "feather-map",
    title: "AI",
    description:
      "We integrate AI and LLMs to make your product smarter and faster.",
  },
  {
    id: 3,
    icon: "feather-phone-call",
    title: "Support",
    description:
      "Ongoing maintenance, iteration and support long after launch.",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services4 = [
  {
    id: 1,
    num: "01.",
    title: "SaaS Product Development",
    description:
      "We design, build and ship multi-tenant SaaS platforms with billing, auth and analytics on a modern Next.js stack.",
    animationOrder: 1,
    column: 1,
  },
  {
    id: 2,
    num: "02.",
    title: "AI Integration",
    description:
      "We embed AI assistants, LLM chat, RAG and intelligent automation into your product using OpenAI and Claude.",
    animationOrder: 2,
    column: 1,
  },
  {
    id: 3,
    num: "03.",
    title: "MVP Development",
    description:
      "We turn your idea into a launch-ready MVP in weeks, with a clean, scalable codebase built to grow.",
    animationOrder: 3,
    column: 1,
  },
  {
    id: 4,
    num: "04.",
    title: "Web App Engineering",
    description:
      "We craft fast, accessible web applications with React, Next.js and TypeScript for products that scale.",
    animationOrder: 4,
    column: 2,
  },
  {
    id: 5,
    num: "05.",
    title: "API Development & Integration",
    description:
      "We build secure REST and GraphQL APIs and integrate the third-party services your product depends on.",
    animationOrder: 5,
    column: 2,
  },
  {
    id: 6,
    num: "06.",
    title: "Cloud & DevOps",
    description:
      "We handle deployment, CI/CD and observability on Neon, Supabase and modern cloud infra for reliable releases.",
    animationOrder: 6,
    column: 2,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const serviceCards = [
  {
    title: "Built for SaaS Founders",
    description:
      "We partner with startups and founders to design, build and scale software products that customers love.",
  },
  {
    title: "AI at the Core",
    description:
      "From day one we think about how AI can make your product faster, smarter and more valuable to users.",
  },
  {
    title: "Engineered to Scale",
    description:
      "Clean architecture, modern tooling and best practices so your product grows without growing pains.",
  },
];

export const services5 = [
  {
    title: "SaaS Product Studio",
    description:
      "We partner with founders to design, build and ship SaaS products that are fast, secure and ready to scale.",
  },
  {
    title: "AI-First Engineering",
    description:
      "From AI chatbots to RAG pipelines, we weave intelligent features into your product using the latest LLMs.",
  },
  {
    title: "From MVP to Scale",
    description:
      "Launch a lean MVP in weeks, then grow it into a robust platform with our long-term engineering support.",
  },
];
export const serviceCards2 = [
  {
    number: "01.",
    title: "Discovery & Strategy",
    description:
      "We map your product vision, scope the MVP and choose the right architecture before a line of code is written.",
  },
  {
    number: "02.",
    title: "Design & Build",
    description:
      "We design and develop your SaaS product with clean, scalable code and AI woven in where it adds real value.",
  },
  {
    number: "03.",
    title: "Launch & Scale",
    description:
      "We ship to production, monitor performance and keep iterating so your product grows with your users.",
  },
];

export const serviceCards3 = [
  {
    iconClass: "fa-regular fa-code",
    title: "SaaS Development",
    description:
      "Multi-tenant SaaS platforms with billing, auth and dashboards, engineered on Next.js and PostgreSQL.",
    animationOrder: 4,
  },
  {
    iconClass: "fa-light fa-palette",
    title: "AI Integration",
    description:
      "LLM chat, RAG search and smart automation embedded into your product with OpenAI and Claude.",
    animationOrder: 5,
  },
  {
    iconClass: "fa-light fa-print",
    title: "Web Engineering",
    description:
      "Fast, accessible web apps built with React, Next.js and TypeScript for products that scale.",
    animationOrder: 4,
  },
  {
    iconClass: "fa-regular fa-handshake",
    title: "Long-term Support",
    description:
      "Maintenance, monitoring and iteration so your product stays fast, secure and reliable after launch.",
    animationOrder: 5,
  },
];
export const allServices = [
  ...services,
  ...services2,
  ...services3,
  ...services4,
];
