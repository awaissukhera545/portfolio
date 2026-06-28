import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Comment from "./Comment";
import { tags } from "@/data/blogs";
import { slugify } from "@/utlis/slugify";
export default function BlogDetails({ blog, isLight = false }) {
  return (
    <div className="blog-classic-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-left-area">
              <div className="thumbnail-top">
                <Image
                  alt="Corporate_business"
                  src={blog.imageSrc}
                  width={850}
                  height={440}
                />
              </div>
              <div className="blog-details-discription">
                <div className="blog-classic-tag">
                  <h4 className="title">By Mars Developers</h4>
                  <ul>
                    <li>
                      <div className="tag-wrap">
                        <i className="fa-solid fa-tag" />
                        <h4 className="tag-title">Web design</h4>
                      </div>
                    </li>
                    <li>
                      <div className="tag-wrap">
                        <i className="fa-solid fa-calendar-day" />
                        <h4 className="tag-title">Comments (05)</h4>
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 className="title split-collab">{blog.title}</h3>
                <p className="disc">
                  At Mars Developers we build and ship AI-powered SaaS products
                  every week, and we like to share what actually works. This is
                  a practical look at how we approach the problem — no fluff,
                  just the decisions and trade-offs that matter.
                </p>
                <p className="disc">
                  Whether you're a founder validating an idea or a team scaling
                  an existing platform, the goal is the same: ship fast, keep
                  the codebase clean and let modern tooling and AI do the heavy
                  lifting so you can focus on your users.
                </p>
              </div>
              <div className="quote-area-blog-details">
                <p className="disc">
                  Ship the smallest thing that delivers real value, learn from
                  it, then iterate. Speed and clarity beat perfection every time
                  when you're building a product people will actually use.
                </p>
                <h3 className="author">Awais Rafique</h3>
                <span>
                  <i className="fa-solid fa-quote-right" />
                </span>
              </div>
              <div className="blog-details-discription">
                <h3 className="title split-collab">
                  How we put this into practice
                </h3>
                <p className="disc">
                  Here's how this plays out on a real engagement — from scoping
                  the MVP to wiring up auth, billing and AI features, and getting
                  it all running reliably in production.
                </p>
                <div className="our-portfolio-swiper">
                  <div className="blog-details-swiper">
                    <div className="our-portfoli-swiper-card">
                      <div className="card-left-content">
                        <p className="disc">
                          Start with discovery: understand the user, define the
                          core flow and pick an architecture that won't need a
                          rewrite in six months.
                        </p>
                        <p className="disc">
                          Then build in thin, shippable slices. Auth, data model
                          and the primary feature first, with CI/CD and
                          monitoring from day one so nothing is a surprise.
                        </p>
                        <p className="disc">
                          Finally, layer in AI where it genuinely helps — search,
                          chat or automation — and keep iterating with real user
                          feedback.
                        </p>
                      </div>
                      <div className="card-right-content">
                        <Image
                          alt="blog-swip-img"
                          src="/assets/images/blog/blog-details-swiper-img.jpg"
                          width={300}
                          height={280}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-details-navigation">
                  <div className="navigation-tags">
                    <h3 className="tag-title">Keyword:</h3>
                    <ul>
                      {tags.slice(1, 4).map((tag, index) => (
                        <li key={index}>
                          <p className="tag">
                            <Link
                              href={`/blog${
                                isLight ? "-white" : ""
                              }/tag/${slugify(tag)}`}
                            >
                              {tag}
                            </Link>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="social-link footer">
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </div>
                </div>
                {/* Comment Area Main Wrapper Start */}
                <div className="comment-area-main-wrapper mt--30">
                  <h3 className="title">Comments (3)</h3>
                  <div className="single-comment-audience">
                    <div className="author-image tmponhover">
                      <Image
                        alt="Corporate_business"
                        src="/assets/images/blog/comments-img-1.png"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="right-area-commnet">
                      <div className="top-area-comment">
                        <div className="left">
                          <h6 className="title">James Carter</h6>
                          <span>September 16, 2023</span>
                        </div>
                        <div className="social-link-inner">
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </div>
                      </div>
                      <p className="disc">
                        Really useful breakdown — the point about shipping thin
                        slices and adding AI only where it helps matches what
                        worked for us. Thanks for sharing the details.
                      </p>
                      <a href="#" className="reply-btn">
                        reply
                      </a>
                    </div>
                  </div>
                  <div className="single-comment-audience pl--100">
                    <div className="author-image tmponhover">
                      <Image
                        alt="Corporate_business"
                        src="/assets/images/blog/comments-img-2.png"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="right-area-commnet">
                      <div className="top-area-comment">
                        <div className="left">
                          <h6 className="title">Court Henry</h6>
                          <span>September 16, 2023</span>
                        </div>
                        <div className="social-link-inner">
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </div>
                      </div>
                      <p className="disc">
                        Great read. Curious how you decide when a feature is
                        worth adding AI to versus keeping it simple.
                      </p>
                      <a href="#" className="reply-btn">
                        reply
                      </a>
                    </div>
                  </div>
                  <div className="single-comment-audience">
                    <div className="author-image tmponhover">
                      <Image
                        alt="Corporate_business"
                        src="/assets/images/blog/comments-img-2.png"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="right-area-commnet">
                      <div className="top-area-comment">
                        <div className="left">
                          <h6 className="title">Court Henry</h6>
                          <span>September 16, 2023</span>
                        </div>
                        <div className="social-link-inner">
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </div>
                      </div>
                      <p className="disc">
                        Really useful breakdown — the point about shipping thin
                        slices and adding AI only where it helps matches what
                        worked for us. Thanks for sharing the details.
                      </p>
                      <a href="#" className="reply-btn">
                        reply
                      </a>
                    </div>
                  </div>
                </div>
                {/* Comment Area Main Wrapper End */}
                {/* Blog Details Form Wrapper Start */}
                <Comment />
                {/* Blog Details Form Wrapper End */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar isLight={isLight} />
          </div>
        </div>
      </div>
    </div>
  );
}
