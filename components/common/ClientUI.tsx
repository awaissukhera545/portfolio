"use client";
import Preloader from "@/components/common/Preloader";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ClientUI() {
  return (
    <>
      <Preloader />
      <Script src="/assets/js/smooth.js" strategy="afterInteractive" />
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
    </>
  );
}
