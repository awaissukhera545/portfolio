import BlogDetails from "@/components/blog/BlogDetails";
import Copyright from "@/components/footers/Copyright";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import { allBlogs } from "@/data/blogs";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title: "Blog Details || Mars Developers — SaaS & AI Product Studio",
  description:
    "Insights from the Mars Developers team on building and scaling AI-powered SaaS products.",
};
export default async function page({ params }) {
  const { slug } = await params;
  const blog = allBlogs.find((blog) => blog.slug == slug) || allBlogs[0];
  return (
    <>
      <div className="tmp-white-version">
        <Header />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">{blog.title}</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Blog Details</li>
                  </ul>
                  {/* <div class="circle-1"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <BlogDetails isLight blog={blog} />
        <Footer />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
