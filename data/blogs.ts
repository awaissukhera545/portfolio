import { slugify } from "@/utlis/slugify";

const blogExcerpt =
  "Practical, no-fluff insights from the Mars Developers team on building, shipping and scaling modern AI-powered SaaS products.";

export const blogData = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-classic-card-img-1.jpg",
    altText: "Blog Thumbnail",

    title: "How we ship a SaaS MVP in six weeks",
    description: blogExcerpt,
    tags: ["SaaS", "MVP", "Next.js", "Process"],
    categories: ["SaaS Engineering", "Product & MVP"],
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-classic-card-img-2.jpg",
    altText: "Blog Thumbnail",

    title: "Integrating AI into your product the smart way",
    tags: ["AI", "LLM", "OpenAI", "Claude"],
    categories: ["AI & LLMs", "SaaS Engineering"],
    description: blogExcerpt,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-classic-card-img-3.jpg",
    altText: "Blog Thumbnail",

    tags: ["Next.js", "PostgreSQL", "Prisma"],
    categories: ["SaaS Engineering", "DevOps & Cloud"],
    title: "Choosing the right stack for a modern SaaS",
    description: blogExcerpt,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData2 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-1.jpg",
    altText: "Blog Thumbnail",
    author: "Mars Developers",
    date: "April 10",
    title: "From idea to launch: our product process",
    tags: ["SaaS", "MVP", "Strategy", "Next.js"],
    categories: ["Product & MVP"],
    description: blogExcerpt,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-2.jpg",
    altText: "Blog Thumbnail",
    author: "Mars Developers",
    date: "April 10",
    title: "NextAuth vs JWT: securing your SaaS",
    tags: ["NextAuth", "JWT", "Security"],
    categories: ["SaaS Engineering"],
    description: blogExcerpt,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-3.jpg",
    altText: "Blog Thumbnail",
    author: "Mars Developers",
    date: "April 10",
    title: "RAG explained: giving your AI real knowledge",
    tags: ["AI", "RAG", "LLM"],
    categories: ["AI & LLMs"],
    description: blogExcerpt,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData3 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-1.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mars Developers",
    comments: "Comments (05)",
    title: "Multi-tenant architecture for SaaS, explained",
    tags: ["SaaS", "Architecture", "PostgreSQL"],
    categories: ["SaaS Engineering", "DevOps & Cloud"],
    description: blogExcerpt,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-2.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mars Developers",
    comments: "Comments (05)",
    title: "Neon vs Supabase: picking a Postgres host",
    tags: ["Neon", "Supabase", "PostgreSQL", "DevOps"],
    categories: ["DevOps & Cloud", "SaaS Engineering"],
    description: blogExcerpt,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-3.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mars Developers",
    comments: "Comments (05)",
    title: "Scaling a Next.js app without surprises",
    tags: ["Next.js", "Performance", "Scale"],
    categories: ["SaaS Engineering", "DevOps & Cloud"],
    description: blogExcerpt,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData4 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-4.jpg",
    altText: "Blog Thumbnail",
    author: "Mars Developers",
    date: "April 10",
    title: "Designing AI features users actually trust",
    tags: ["AI", "UX", "LLM"],
    categories: ["AI & LLMs"],
    description: blogExcerpt,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-5.jpg",
    altText: "Blog Thumbnail",
    author: "Mars Developers",
    date: "April 10",
    title: "Why we build on Prisma and PostgreSQL",
    tags: ["Prisma", "PostgreSQL", "Backend"],
    categories: ["SaaS Engineering"],
    description: blogExcerpt,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-6.jpg",
    altText: "Blog Thumbnail",
    author: "Mars Developers",
    date: "April 10",
    title: "Shipping faster with CI/CD and observability",
    tags: ["DevOps", "CI/CD", "Monitoring"],
    categories: ["DevOps & Cloud"],
    description: blogExcerpt,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const blogData5 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-7.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mars Developers",
    comments: "Comments (05)",
    title: "The real cost of skipping discovery",
    width: 410,
    height: 291,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-8.jpg",
    altText: "Blog Thumbnail",
    date: "13 Feb",
    author: "Mars Developers",
    comments: "Comments (05)",
    title: "Adding Stripe billing to your SaaS",
    width: 410,
    height: 291,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-9.jpg",
    altText: "Blog Thumbnail",
    date: "14 Feb",
    author: "Mars Developers",
    comments: "Comments (05)",
    title: "When to add AI to your roadmap",
    width: 411,
    height: 291,
  },
  {
    id: 4,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-4.jpg",
    altText: "Blog Thumbnail",
    date: "15 Feb",
    author: "Mars Developers",
    comments: "Comments (05)",
    title: "Building realtime features that scale",
    width: 410,
    height: 294,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
    tags: ["SaaS", "MVP", "AI"],
    categories: ["SaaS Engineering"],
  };
});

export const blogData6 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-7.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mars Developers",
    comments: "Comments (05)",
    title: "Our checklist before every SaaS launch",
    width: 410,
    height: 291,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-8.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mars Developers",
    comments: "Comments (05)",
    title: "Prompt engineering for product teams",
    width: 410,
    height: 291,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-9.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mars Developers",
    comments: "Comments (05)",
    title: "Keeping LLM costs under control",
    width: 411,
    height: 291,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
    tags: ["AI", "LLM", "SaaS"],
    categories: ["AI & LLMs"],
  };
});
export const blogData7 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-4.jpg",
    altText: "Blog Thumbnail",
    author: "Mars Developers",
    date: "April 10",
    title: "How we approach technical strategy",
    width: 410,
    height: 294,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-5.jpg",
    altText: "Blog Thumbnail",
    author: "Mars Developers",
    date: "April 10",
    title: "MVP to product-market fit, the engineering view",
    width: 410,
    height: 294,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-6.jpg",
    altText: "Blog Thumbnail",
    author: "Mars Developers",
    date: "April 10",
    title: "Building accessible web apps by default",
    width: 410,
    height: 294,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
    tags: ["MVP", "Strategy", "Web"],
    categories: ["Product & MVP"],
  };
});

export const posts = [
  {
    id: 1,
    imageSrc: "/assets/images/blog/single-post-card-img-1.png",
    category: "SaaS Engineering",
    title: "How we ship a SaaS MVP in six weeks",
  },
  {
    id: 2,
    imageSrc: "/assets/images/blog/single-post-card-img-2.png",
    category: "AI & LLMs",
    title: "Integrating AI into your product the smart way",
  },
  {
    id: 3,
    imageSrc: "/assets/images/blog/single-post-card-img-3.png",
    category: "Product & MVP",
    title: "From idea to launch: our product process",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
    tags: ["SaaS", "AI", "MVP"],
    categories: [elm.category],
  };
});
export const allBlogs = [
  ...blogData,
  ...blogData2,
  ...blogData3,
  ...blogData4,
  ...blogData5,
  ...blogData6,
  ...blogData7,
  ...posts,
];
export const categories = [
  { title: "SaaS Engineering", count: "08" },
  { title: "AI & LLMs", count: "06" },
  { title: "Product & MVP", count: "05" },
  { title: "DevOps & Cloud", count: "04" },
];
export const tags = [
  "SaaS",
  "AI",
  "Next.js",
  "PostgreSQL",
  "Prisma",
  "NextAuth",
  "MVP",
  "LLM",
  "RAG",
  "DevOps",
];
