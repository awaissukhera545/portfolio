"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Chat() {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pju6v2d",
        "template_95gfdcp",
        form.current,
        {
          publicKey: "kBPnvGJ-g3f0Um3bd",
        }
      )
      .then((res) => {
        if (res.status == 200) {
          toast.success("Chat Message Sent successfully!", {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.current.reset();
        } else {
          toast.error("Oops! Message not Sent!", {
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
    <div className="ready-chatting-option tmp-ready-chat">
      <input type="checkbox" id="click" />
      <label htmlFor="click">
        <i className="fab fa-facebook-messenger" />
        <i className="fas fa-times" />
      </label>
      <div className="wrapper">
        <div className="head-text">Let's chat with me? - Online</div>
        <div className="chat-box">
          <div className="desc-text">
            Please fill out the form below to start chatting with me directly.
          </div>
          <form
            className="tmp-dynamic-form"
            ref={form}
            onSubmit={sendMail}
          >
            {/* Hidden subject to give context in email */}
            <input type="hidden" name="subject" value="New Website Chat Message" />

            <div className="field">
              <input
                className="input-field"
                name="name"
                placeholder="Your Name"
                type="text"
                required
              />
            </div>
            <div className="field">
              <input
                className="input-field"
                name="email"
                placeholder="Your Email"
                type="email"
                required
              />
            </div>
            <div className="field">
              <input
                className="input-field"
                name="phone"
                placeholder="WhatsApp Number"
                type="number"
                required
              />
            </div>
            <div className="field textarea">
              <textarea
                className="input-field"
                placeholder="Your Message"
                name="message"
                required
                defaultValue={""}
              />
            </div>
            <div className="field">
              <button name="submit" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
