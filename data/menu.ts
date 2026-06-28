export const menuItems = [
  { label: "Home", href: "/", isLink: true },
  { label: "About", href: "/about", isLink: true },
  {
    label: "Services",
    href: "#",
    hasDropdown: true,
    submenu: [
      { label: "Service", href: "/service" },
      { label: "Service Details", href: "/service-details/saas-product-development" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    hasDropdown: true,
    submenu: [
      { label: "Blog Classic", href: "/blog" },
      {
        label: "Blog Details",
        href: "/blog-details/from-idea-to-launch-our-product-process",
      },
    ],
  },
  {
    label: "Project",
    href: "#",
    hasDropdown: true,
    submenu: [
      { label: "Project", href: "/project" },
      {
        label: "Project Details",
        href: "/project-details/taskflow-saas-productivity-platform",
      },
    ],
  },
  { label: "Contact", href: "/contact", isLink: true },
];
export const menuItemsLight = [
  { label: "Home", href: "/index-white", isLink: true },
  { label: "About", href: "/about-white", isLink: true },
  {
    label: "Services",
    href: "#",
    hasDropdown: true,
    submenu: [
      { label: "Service", href: "/service-white" },
      {
        label: "Service Details",
        href: "/service-details-white/saas-product-development",
      },
    ],
  },
  {
    label: "Blog",
    href: "#",
    hasDropdown: true,
    submenu: [
      { label: "Blog Classic", href: "/blog-white" },
      {
        label: "Blog Details",
        href: "/blog-details-white/from-idea-to-launch-our-product-process",
      },
    ],
  },
  {
    label: "Project",
    href: "#",
    hasDropdown: true,
    submenu: [
      { label: "Project", href: "/project-white" },
      {
        label: "Project Details",
        href: "/project-details-white/taskflow-saas-productivity-platform",
      },
    ],
  },
  { label: "Contact", href: "/contact-white", isLink: true },
];
export const demoData = [
  { href: "/", img: "/assets/images/demo/home-1.png", title: "Main Demo" },
];

export const whiteDemoData = [
  {
    href: "/index-white",
    img: "/assets/images/demo/home-1-white.png",
    title: "Main Demo",
  },
];
