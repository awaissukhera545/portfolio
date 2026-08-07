import Copyright from "@/components/footers/Copyright";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Contact from "@/components/others/Contact";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title: "Contact || Mars Developers — SaaS & AI Product Studio",
  description:
    "Get in touch with Mars Developers to design, build and ship your AI-powered SaaS product.",
};
export default function page() {
  return (
    <>
      <div className="tmp-white-version">
        <Header />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">Contact</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
