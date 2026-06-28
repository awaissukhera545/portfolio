// NOTE: prices below are placeholder/dummy values — update with real numbers later.
export const pricingPlans = [
  {
    title: "Starter",
    price: "$ 1,500",
    per: "Per Project",
    features: [
      "Landing page or simple web app",
      "Up to 3 core features",
      "Responsive design",
      "2 weeks delivery",
    ],
    buttonStyle: "btn-border",
    animationOrder: 1,
  },
  {
    title: "Growth",
    price: "$ 4,500",
    per: "Per Project",
    features: [
      "SaaS MVP build",
      "Auth, billing & dashboard",
      "1 AI feature integration",
      "4–6 weeks delivery",
      "Post-launch support",
    ],
    buttonStyle: "", // no border for 'active' one
    active: true,
    animationOrder: 2,
  },
  {
    title: "Scale",
    price: "Custom",
    per: "Let's talk",
    features: [
      "Full SaaS platform",
      "Advanced AI integration",
      "Dedicated engineering team",
      "Priority support",
    ],
    buttonStyle: "btn-border",
    animationOrder: 3,
  },
];

export const pricingPlans2 = [
  {
    title: "Starter",
    icon: "/assets/images/pricing/pricing-logo-1.svg",
    features: [
      "Landing page or simple web app",
      "Up to 3 core features",
      "Responsive design",
      "2 weeks delivery",
    ],
    price: "$ 1,500",
    active: false,
    borderedButton: true,
  },
  {
    title: "Growth",
    icon: "/assets/images/pricing/pricing-logo-2.svg",
    features: [
      "SaaS MVP build",
      "Auth, billing & dashboard",
      "1 AI feature integration",
      "Post-launch support",
    ],
    price: "$ 4,500",
    active: true,
    borderedButton: false,
  },
  {
    title: "Scale",
    icon: "/assets/images/pricing/pricing-logo-3.svg",
    features: [
      "Full SaaS platform",
      "Advanced AI integration",
      "Dedicated team",
      "Priority support",
    ],
    price: "Custom",
    active: false,
    borderedButton: true,
  },
];
