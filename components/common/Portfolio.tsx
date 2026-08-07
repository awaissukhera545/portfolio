import React from "react";
import Image from "next/image";

import { portfolioItems2 } from "@/data/portfolio";

import Link from "next/link";
export default function Portfolio({ isLight = false }) {
  return (
    <div
      className="latest-portfolio-area custom-column-grid tmp-section-gapTop"
      id="portfolio"
    >
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Our Work</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Transforming Ideas into <br />
            Products That Scale
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            A selection of SaaS platforms, AI integrations and web apps we have
            designed, built and shipped for startups and growing teams.
          </p>
        </div>
        <div className="row">
          {portfolioItems2.map((item) => (
            <div className="col-lg-6 col-sm-6" key={item.id}>
              <div
                className={`latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
              >
                <div className="portfoli-card-img">
                  <div className="img-box v2">
                    <Link
                      className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                      href={`/project-details${isLight ? "-white" : ""}/${
                        item.slug
                      }`}
                    >
                      <Image
                        className="w-100"
                        alt="Thumbnail"
                        src={item.imageSrc}
                        width={item.width}
                        height={item.height}
                      />
                    </Link>
                  </div>
                </div>
                <div className="portfolio-card-content-wrap">
                  <div className="content-left">
                    <h3 className="portfolio-card-title">
                      <Link
                        className="link"
                        href={`/project-details${isLight ? "-white" : ""}/${
                          item.slug
                        }`}
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="portfoli-card-para">{item.description}</p>
                    {item.link && item.link !== "#" && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link d-inline-flex align-items-center gap-1 mt-2"
                      >
                        Visit Live Site
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "0.75em" }} />
                      </a>
                    )}
                  </div>
                  <Link
                    href={`/project-details${isLight ? "-white" : ""}/${
                      item.slug
                    }`}
                    className="tmp-arrow-icon-btn"
                  >
                    <div className="btn-inner">
                      <i className="tmp-icon fa-solid fa-arrow-up-right" />
                      <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
