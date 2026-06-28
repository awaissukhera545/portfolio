import "./styles/main.scss";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import ClientUI from "@/components/common/ClientUI";

export const metadata = {
  title: "Mars Developers — AI-Powered SaaS Product Studio",
  description:
    "Mars Developers is a software studio that designs, builds and ships AI-powered SaaS products with Next.js, helping startups go from idea to launch.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body suppressHydrationWarning>
        <ClientUI />

        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
