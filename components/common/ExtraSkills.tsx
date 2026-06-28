import React from "react";

export default function ExtraSkills() {
  return (
    <section className="my-skill tmp-section-gapTop">
      <div className="container">
        <div className="section-head text-align-left mb--50">
          <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Why Mars Developers</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Engineering Built for <br />
            Speed and Scale
          </h2>
        </div>
        <div className="services-widget v1">
          <div className="service-item current tmp-scroll-trigger tmp-fade-in animation-order-1">
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-building-columns" />
              </div>
              <div className="card-title">
                <h3 className="main-title">SaaS Engineering</h3>
                <p className="sub-title">End-to-end</p>
              </div>
              <p className="card-para">
                We build multi-tenant SaaS products with auth, billing and
                dashboards on a modern Next.js and PostgreSQL stack.
              </p>
              <a href="#" className="read-more-btn">
                Read More
                <span className="read-more-icon">
                  <i className="fa-solid fa-angle-right" />
                </span>
              </a>
            </div>
            <button className="service-link modal-popup" />
          </div>
          <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-2">
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-calendar" />
              </div>
              <div className="card-title">
                <h3 className="main-title">AI Integration</h3>
                <p className="sub-title">LLM-powered</p>
              </div>
              <p className="card-para">
                We embed AI assistants, RAG search and automation into your
                product using OpenAI and Claude APIs.
              </p>
              <a href="#" className="read-more-btn">
                Read More
                <span className="read-more-icon">
                  <i className="fa-solid fa-angle-right" />
                </span>
              </a>
            </div>
            <button className="service-link modal-popup" />
          </div>
          <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-3">
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-pen-nib" />
              </div>
              <div className="card-title">
                <h3 className="main-title">Ship & Scale</h3>
                <p className="sub-title">Launch-ready</p>
              </div>
              <p className="card-para">
                From a lean MVP to a production platform, we ship fast and keep
                your product reliable as it grows.
              </p>
              <a href="#" className="read-more-btn">
                Read More
                <span className="read-more-icon">
                  <i className="fa-solid fa-angle-right" />
                </span>
              </a>
            </div>
            <button className="service-link modal-popup" />
          </div>
          <div className="active-bg wow fadeInUp mleave" />
        </div>
      </div>
    </section>
  );
}
