import React from "react";
import ContactForm from "../components/contactForm";
import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-content">
          <div id="contact" className="contact-container">
            <h2 className="subtitle contact-title">
              Let's Get in Touch
            </h2>

            <div className="main-text contact-subtitle">
                If you have any specific questions or comments, please don't hesitate to email me directly at my email address&nbsp;
              <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I make it a priority to respond to all messages within 24 hours, although it may take a bit longer during busy times.

              <p>
                Alternatively, you can use the contact form below to get in touch. Simply fill out the fields then submit and I'll get back to you as I can.
              </p>
            </div>
          </div>

          <ContactForm />

      </div>
    </React.Fragment>
  );
};

export default Contact;
