import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/navBar";
import Footer from "../components/footer";

import ContactForm from "../components/contactForm";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={SEO.description} />
        <meta
          name="keywords"
          content={SEO.keywords.join(", ")}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">

          <div id="contact" className="justify-content contact-container">
            <h2 className="subtitle contact-title">
              Let's Get in Touch
            </h2>

            <div className="main-text contact-subtitle">
              <p>
                Thank you for your interest in getting in touch with me.</p>
                If you have any specific questions or comments, please don't hesitate to email me directly at my email address&nbsp;
              <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I make it a priority to respond to all messages within 24 hours, although it may take a bit longer during busy times.

              <p>
                Alternatively, you can use the contact form below to get in touch. Simply fill out the required fields and I'll get back to you as I can.
              </p>
            </div>
          </div>

          <ContactForm />

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
