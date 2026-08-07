import React from "react";
import Image from "next/image";
import { companyLogos } from "@/data/brands";

export default function Brands({
  parentClass = "our-supported-company-area tmp-section-gapTop",
}) {
  return (
    <div className={parentClass} id="tools">
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Our Toolkit</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Tools We Build With
          </h2>
        </div>
        <div className="row justify-content-center">
          {companyLogos.map((logo, index) => (
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6" key={index}>
              <div
                className={`support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-${logo.animationOrder}`}
              >
                <Image
                  alt="Tool Mars Developers works with"
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
