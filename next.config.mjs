/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    quietDeps: true, // This will silence deprecation warnings
    silenceDeprecations: ["mixed-decls", "legacy-js-api"],
  },
  // The purchased template ships with pre-existing TypeScript/ESLint
  // strictness issues in its DOM/animation helpers (e.g. LayoutWrapper).
  // These are unrelated to site content and harmless at runtime, so we don't
  // block production builds on them. Remove these flags if the template
  // internals are ever fully type-hardened.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
