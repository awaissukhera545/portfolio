import React from "react";
import Image from "next/image";
export default function ServiceDetails({ serviceItem }) {
  return (
    <div className="service-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row row--40">
          <div className="col-lg-8">
            <div className="service-thumnail-wrap">
              <Image
                alt="thumnail-img"
                src="/assets/images/services/service-detials-thumnail-wrap.png"
                width={850}
                height={476}
              />
            </div>
            <h2 className="title split-collab">{serviceItem.title}</h2>
            <p className="doc-para">
              At Mars Developers, this is more than a service — it's how we help
              founders turn ideas into shipping products. We combine clean
              engineering, a modern Next.js stack and AI where it matters to
              build software that scales with your business.
            </p>
            <h2 className="title-mini split-collab">What's included</h2>
            <p className="doc-para">
              From discovery and architecture to development, testing and launch,
              we own the full delivery. You get a scalable codebase, clear
              documentation and a product that's ready for real users — not a
              prototype that falls over at scale.
            </p>
            <p className="doc-para">
              We work in short, transparent cycles so you always know what's
              shipping next. Expect regular demos, honest timelines and code you
              actually own at the end of the engagement.
            </p>
            <h2 className="title-mini split-collab">How we work</h2>
            <p className="doc-para">
              We start lean: scope the smallest version that delivers value, then
              iterate. Modern tooling, CI/CD and observability keep releases fast
              and reliable as your product grows.
            </p>
            <p className="doc-para">
              AI is woven in where it adds real value — from LLM chat and RAG
              search to automation — using OpenAI and Claude, never as a gimmick.
            </p>
            <p className="doc-para">
              Whether you're validating an MVP or scaling an established
              platform, we plug in as your engineering partner and help you ship
              with confidence.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="signle-side-bar service-list-area tmponhover">
              <div className="header">
                <h3 className="title">Service Category</h3>
              </div>
              <div className="body">
                <a href="#" className="single-service">
                  <p className="service-title">SaaS Product Development</p>
                  <span className="service-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
                <a href="#" className="single-service">
                  <p className="service-title">AI Integration</p>
                  <span className="service-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
                <a href="#" className="single-service">
                  <p className="service-title">MVP Development</p>
                  <span className="service-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
                <a href="#" className="single-service">
                  <p className="service-title">Web App Engineering</p>
                  <span className="service-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
                <a href="#" className="single-service">
                  <p className="service-title">API Development &amp; Integration</p>
                  <span className="service-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
                <a href="#" className="single-service">
                  <p className="service-title">Cloud &amp; DevOps</p>
                  <span className="service-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
