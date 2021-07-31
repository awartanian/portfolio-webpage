import React from "react";
import "./ContactResponse.scss";

const ContactResponse = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact me</h1>
      <div className="contact-underline"></div>
      <div className="form-container">
        <div className="message-box">
          <h3>Great success!</h3>
          <p>
            Thank you for the interest. Your message is now "probably" in my
            inbox. I'll get back to you as soon as I see it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactResponse;
