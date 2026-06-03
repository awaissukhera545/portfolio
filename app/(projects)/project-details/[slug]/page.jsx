import Copyright from "@/components/footers/Copyright";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { allPortfolioItems } from "@/data/portfolio";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "Project Details || Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
};
export default async function page({ params }) {
  const { slug } = await params;
  const portfolioItem =
    allPortfolioItems.find((blog) => blog.slug == slug) || allPortfolioItems[0];
  return (
    <>
      <Header />
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">{portfolioItem.title}</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">
                    Project Details
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectDetails portfolioItem={portfolioItem} />
      <Footer />
      <Copyright /> <CommonComponents />
    </>
  );
}
