import Blogs from "@/components/blog/Blogs";
import Copyright from "@/components/footers/Copyright";
import FooterAlt from "@/components/footers/FooterAlt";
import Header from "@/components/headers/Header";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title: "Blog || Mars Developers — SaaS & AI Product Studio",
  description:
    "Insights from the Mars Developers team on building and scaling AI-powered SaaS products.",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">Blog Classic</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">Blog Classic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blogs />
      <FooterAlt />
      <Copyright /> <CommonComponents />
    </>
  );
}
