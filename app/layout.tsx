import "./styles/main.scss";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import ClientUI from "@/components/common/ClientUI";

export const metadata = {
  title: "Personal Portfolio Software Engineer",
  description:
    "A passionate Software Engineer dedicated to building Web Applications and seamless mobile experiences.",
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
