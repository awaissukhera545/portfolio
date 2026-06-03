import "../public/assets/scss/main.scss";
import "odometer/themes/odometer-theme-default.css"; 
import "react-toastify/dist/ReactToastify.css";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import Script from 'next/script';
import { ToastContainer } from "react-toastify";

import Preloader from "@/components/common/Preloader";

export const metadata = {
  title: "Home || Personal Portfolio Software Engineer",
  description: "Reeni is a modern personal portfolio template for designers, developers, content writer, cleaner, programmer, fashion designer, model, Influencer and freelancers. Fully responsive, SEO-friendly, Bootstrap and easy to customize.",
};

export default function RootLayout({ children }) {
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
        <Preloader />
        
        {/* Smooth scroll script adjusted to load without breaking hydration */}
        <Script
          src="/assets/js/smooth.js"
          strategy="afterInteractive"
        />

        <LayoutWrapper>
          <ToastContainer
            position="top-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
