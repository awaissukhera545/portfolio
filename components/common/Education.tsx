import React from "react";
import Image from "next/image";
import { educationExperienceData } from "@/data/education";

export default function Education() {
  return (
    <section className="education-experience tmp-section-gapTop">
      <div className="container">
        <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
          Milestones{" "}
          <span>
            <Image
              alt="custom-line"
              width={81}
              height={6}
              src="/assets/images/custom-line/custom-line.png"
            />
          </span>
        </h2>
        <div className="row g-5">
          {educationExperienceData.map((item, index) => (
            <div className="col-lg-6 col-sm-6" key={index}>
              <div
                className={`education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
              >
                <h4 className="edu-sub-title">{item.role}</h4>
                <h2 className="edu-title">{item.duration}</h2>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experiences-wrapper v2">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="expert-img"
                  width={630}
                  height={479}
                  src="/assets/images/experiences/expert-img-two.jpg"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  How We Work{" "}
                  <span>
                    <Image
                      alt="custom-line"
                      width={81}
                      height={6}
                      src="/assets/images/custom-line/custom-line.png"
                    />
                  </span>
                </h2>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-subtitle">step 01</p>
                  <h2 className="ex-name">Discovery &amp; Strategy</h2>
                  <h3 className="ex-title">Scope, architecture, plan</h3>
                  <p className="ex-para">
                    We map your product vision, scope the MVP and choose the
                    right architecture before a single line of code is written.
                  </p>
                </div>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-2">
                  <p className="ex-subtitle">step 02</p>
                  <h2 className="ex-name">Design, Build &amp; Ship</h2>
                  <h3 className="ex-title">MVP to production</h3>
                  <p className="ex-para">
                    Interested in working together? Tell us about your product
                    and we'll help you design, build and ship it — fast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
