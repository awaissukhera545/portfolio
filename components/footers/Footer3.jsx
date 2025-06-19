"use client";
import Image from "next/image";
import Link from "next/link";
import Demomodal from "../modals/Demomodal";
import Chat from "../common/Chat";
import DemoToggler from "../common/DemoToggler";
import ScrollTop from "../common/ScrollTop";
import Sidebar from "../headers/Sidebar";
import MobileMenu from "../headers/MobileMenu";
import MobileMenuOnepage from "../headers/MobileMenuOnepage";
import { footerLinks, footerLinksWhite } from "@/data/footerLinks";
export default function Footer3({
  darkLogo = "/assets/images/logo/logo-for-dark.png",
  lightLogo = "/assets/images/logo/logo-white.png",
}) {
  return (
    <>
      <footer className="footer-area footer-style-one-wrapper  tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-one">
            <div className="row g-5">
              <div className="col-lg-5 col-md-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        className="logo-dark"
                        alt="MARS Developers"
                        src={darkLogo}
                        width={121}
                        height={41}
                      />
                      <Image
                        className="logo-white"
                        alt="MARS Developers"
                        src={lightLogo}
                        width={121}
                        height={40}
                      />
                    </Link>
                  </div>
                  <p className="description">
                    <span>Get Ready</span> To <br /> Create Great
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="newsletter-form-1 mt--40"
                  >
                    <input type="email" placeholder="Email Adress" />
                    <span className="form-icon">
                      <i className="fa-regular fa-envelope" />
                    </span>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-footer-wrapper quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-link-animation dark-content">
                    {footerLinks.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="ft-link tmp-link-animation light-content2">
                    {footerLinksWhite.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Contact </h5>
                  <ul className="ft-link tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="mailto:mawaisrafiquesukhera@gmail.com">mawaisrafiquesukhera@gmail.com</a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      Currently Working Remotely
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <a href="tel:+923266699494">+92 3266699494</a>
                    </li>
                  </ul>
                  <div className="social-link footer">
                    <a href="https://www.instagram.com/awaissukhera545">
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/awaissukhera545/">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="https://www.facebook.com/people/Muhammad-Awais-Rafique/100093275199461">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bg-img">
          <Image
            alt="footer-img"
            width={437}
            height={430}
            src="/assets/images/footer/footer-bg-img.png"
          />
        </div>
      </footer>{" "}
    </>
  );
}
