"use client";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const form = useRef();

  const sandMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // EmailJS service ID - identifies which email service to use
        "service_06ey5mj",

        // EmailJS template ID - specifies which email template to use
        "template_mv6dj0e",

        // Reference to the HTML form element containing user input
        form.current,

        {
          // Public API key for authentication with EmailJS
          publicKey: "kBPnvGJ-g3f0Um3bd",
        }
      )
      .then((res) => {
        if (res.status == 200) {
          toast.success("Message Sent successfully!", {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.current.reset();
        } else {
          toast.error("Ops Message not Sent!", {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
  return (
    <div className="contact-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="contact-info-wrap">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <h3 className="title">Address</h3>
                <p className="para">Currently Working Remotely</p>
                <p className="para">.....</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope" />
                </div>
                <h3 className="title">E-mail</h3>
                <a href="mailto:mawaisrafiquesukhera@gmail.com">
                  <p className="para">mawaisrafiquesukhera@gmail.com</p>
                </a>
                <a href="mailto:marsdevelopers03@gmail.com">
                  <p className="para">marsdevelopers03@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone" />
                </div>
                <h3 className="title">Call Me</h3>
                <p className="para">+92 3266699494</p>
                <p className="para">+92 3080910986</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tpm Get In touch start */}
      <section className="get-in-touch-area tmp-section-gapTop">
        <div className="container">
          <div className="contact-get-in-touch-wrap">
            <div className="get-in-touch-wrapper tmponhover">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5">
                  <div className="section-head text-align-left">
                    <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <span className="subtitle">GET IN TOUCH</span>
                    </div>
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                      Elevate your brand with Me
                    </h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                      This is just a dummy text i will update later.
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-inner">
                    <div className="contact-form">
                      <div id="form-messages" className="error" />
                      <form
                        className="tmp-dynamic-form"
                        id="contact-form"
                        ref={form}
                        onSubmit={sandMail}
                      >
                        <div className="contact-form-wrapper row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                name="name"
                                id="contact-name"
                                placeholder="Your Name"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                id="contact-phone"
                                placeholder="Phone Number"
                                type="number"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                id="contact-email"
                                name="email"
                                placeholder="Your Email"
                                type="email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <textarea
                                className="input-field"
                                placeholder="Your Message"
                                name="message"
                                id="contact-message"
                                required
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="tmp-button-here">
                              <button
                                className="tmp-btn hover-icon-reverse radius-round w-100"
                                name="submit"
                                type="submit"
                                id="submit"
                              >
                                <span className="icon-reverse-wrapper">
                                  <span className="btn-text">
                                    Appointment Now
                                  </span>
                                  <span className="btn-icon">
                                    <i className="fa-sharp fa-regular fa-arrow-right" />
                                  </span>
                                  <span className="btn-icon">
                                    <i className="fa-sharp fa-regular fa-arrow-right" />
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tpm Get In touch End */}
    </div>
  );
}
