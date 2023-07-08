import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { useForm } from "react-hook-form";

import "./styles/contactForm.css";
import CONFIG from "../data/config"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    let bodyData = JSON.stringify(data);
    let responseMsg = "Failed to send the message, please try again later!"
    try {
      await fetch(CONFIG.CONTACT_URL, {
        method: 'POST',
        body: bodyData,
        headers: {
          'Content-Type': 'text/plain',
          'x-api-key': CONFIG.TOKEN,
        },
      }).then((response) => {
        if (response.status === 200) {
          responseMsg = "Message sent successfully.";
          reset();
        }
      })
    } catch (error) { }
    alert(responseMsg);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-form">
        <div className="contact-field">
          <span className="contact-icon">
            <CgProfile />
          </span>
          <input {...register("name")} className="contact-name" type="text" placeholder="Fullname..." />
        </div>
        <div className="contact-field">
          <span className="contact-icon">
            <MdAlternateEmail />
          </span>
          <input {...register("email", {
            required: true,
            pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
          })} className="contact-email" type="email" placeholder="Email..." />
        </div>
        <div className="contact-field">
          <span className="contact-icon">
            <FiMail />
          </span>
          <textarea {...register("message", {
            required: true,
            minLength: 15
          })} className="contact-message" required cols="30" rows="10" placeholder="Message..."></textarea>
        </div>
        <div className="contact-field">
          <button disabled={!isDirty || !isValid || isSubmitting} className="contact-submit" type="submit">
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </form >
  );
};

export default ContactForm;
