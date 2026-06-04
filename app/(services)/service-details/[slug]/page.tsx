import Copyright from "@/components/footers/Copyright";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import ServiceDetails from "@/components/services/ServiceDetails";
import { allServices } from "@/data/services";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "ServiceDetails || Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
};
export default async function page({ params }) {
  const { slug } = await params;
  const serviceItem =
    allServices.find((blog) => blog.slug == slug) || allServices[0];
  return (
    <>
      <Header />
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">{serviceItem.title}</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">
                    Service Details
                  </li>
                </ul>
                {/* <div class="circle-1"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceDetails serviceItem={serviceItem} />
      <Footer />
      <Copyright /> <CommonComponents />
    </>
  );
}
