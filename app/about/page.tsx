import Contact from "@/components/common/Contact";
import Education from "@/components/common/Education";
import Facts from "@/components/common/Facts";
import Pricing from "@/components/common/Pricing";
import Services from "@/components/common/Services";
import Skills from "@/components/common/Skills";
import FooterAlt from "@/components/footers/FooterAlt";
import Header from "@/components/headers/Header";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title: "About Us || Mars Developers — SaaS & AI Product Studio",
  description:
    "Learn about Mars Developers, an AI-powered SaaS product studio building and scaling software for startups since 2022.",
};
export default function page() {
  return (
    <>
      <div className="about inner">
        <Header />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">About Us</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <Skills parentClass="tmp-skill-area tmp-section-gapBottom" />
        <Facts />
        <Education />
        <Pricing />
        <Contact parentClass="get-in-touch-area tmp-section-gapBottom tmp-section-gapTop" />
        <FooterAlt /> <CommonComponents />
      </div>
    </>
  );
}
