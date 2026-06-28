import Blogs from "@/components/blog/Blogs";
import Copyright from "@/components/footers/Copyright";
import FooterAlt from "@/components/footers/FooterAlt";
import Header from "@/components/headers/Header";
import { allBlogs } from "@/data/blogs";
import { slugify } from "@/utlis/slugify";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title: "Blog || Mars Developers — SaaS & AI Product Studio",
  description:
    "Insights from the Mars Developers team on building and scaling AI-powered SaaS products.",
};
export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  let tagTitle = "";
  const { tag } = await params;
  const blogs = allBlogs.filter((blog) =>
    blog.tags?.some((el) => slugify(el) == tag)
  );
  const firstBlogWithTags = allBlogs.find(
    (blog) => Array.isArray(blog.tags) && blog.tags.length > 0
  );
  firstBlogWithTags?.tags.forEach((element) => {
    if (slugify(element) == tag) {
      tagTitle = element;
    }
  });
  return (
    <>
      <Header />
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">
                  {tagTitle ? tagTitle : <> {tag}</>}
                </h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item">Blog</li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">Tag</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blogs allBlogs={blogs} />
      <FooterAlt />
      <Copyright /> <CommonComponents />
    </>
  );
}
