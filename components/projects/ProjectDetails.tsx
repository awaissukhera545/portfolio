import React from "react";
import Image from "next/image";
import Appointment from "./Appointment";
export default function ProjectDetails({ portfolioItem }) {
  return (
    <div className="project-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-thumnail-wrap">
              <Image
                alt="thumbnail"
                src={portfolioItem.imageSrc}
                width={1290}
                height={560}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="project-details-content-wrap">
              <h2 className="title">{portfolioItem.title}</h2>
              <p className="docs">{portfolioItem.description}</p>
              <p className="docs">
                We partnered closely with the team from discovery through launch,
                owning architecture, development and deployment so they could
                focus on their customers while we shipped the product.
              </p>
              <div className="check-box-wrap">
                <ul>
                  {(portfolioItem.tags?.length
                    ? portfolioItem.tags
                    : portfolioItem.categories || []
                  ).map((item: string) => (
                    <li key={item}>
                      <h4 className="check-box-item">
                        <span>
                          <i className="fa-solid fa-circle-check" />
                        </span>
                        {item}
                      </h4>
                    </li>
                  ))}
                </ul>
              </div>
              <h2 className="mini-title">How we built it</h2>
              <p className="docs">
                We started lean — scoping the core experience, then iterating in
                short cycles. The result is a fast, reliable product with clean
                architecture, secure auth and AI features that earn their place.
              </p>
              <div className="project-details-swiper-wrapper">
                <div className="swiper project-details-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="project-details-img">
                        <Image
                          alt="swiper-img"
                          src="/assets/images/projects-details/project-detials-swiper-img-1.jpg"
                          width={410}
                          height={295}
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="project-details-img">
                        <Image
                          alt="swiper-img"
                          src="/assets/images/projects-details/project-detials-swiper-img-2.png"
                          width={410}
                          height={295}
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="project-details-img">
                        <Image
                          alt="swiper-img"
                          src="/assets/images/projects-details/project-detials-swiper-img-1.jpg"
                          width={410}
                          height={295}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-details-swiper-btn">
                  <div className="project-swiper-button-prev">
                    <span>
                      <i className="fa-solid fa-arrow-left" />
                    </span>
                    Previous
                  </div>
                  <div className="project-swiper-button-next">
                    Next{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Tpm Get In touch start */}
            <Appointment />
            {/* Tpm Get In touch End */}
          </div>
          <div className="col-lg-4">
            <div className="signle-side-bar project-details-area tmponhover">
              <div className="header">
                <h3 className="title">Project Details</h3>
              </div>
              <div className="body">
                <div className="project-details-info">
                  Type: <span>{(portfolioItem.categories || []).join(", ") || "—"}</span>
                </div>
                <div className="project-details-info">
                  Built by: <span>Mars Developers</span>
                </div>
                <div className="project-details-info">
                  Year: <span>{portfolioItem.year || "—"}</span>
                </div>
                <div className="project-details-info">
                  Stack: <span>{(portfolioItem.tags || []).join(", ") || "—"}</span>
                </div>
                {portfolioItem.link && portfolioItem.link !== "#" && (
                  <div className="project-details-info">
                    Live Site:{" "}
                    <span>
                      <a href={portfolioItem.link} target="_blank" rel="noopener noreferrer">
                        Visit Site
                      </a>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
