import { useState } from "react";
import contactUs from "../Images/contactUs.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {EMAIL_KEY_ID} from '../Common/constants.js';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [error, seterror] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit started")

    emailjs
      .sendForm(EMAIL_KEY_ID.SERVICE_ID, EMAIL_KEY_ID.TEMPLATE_ID, form.current, {
        publicKey: EMAIL_KEY_ID.PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessage(true);
          seterror(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          seterror(true);
          setMessage(false);
        },
      );

    
    
  };
  
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src={contactUs} alt="Contact us" />
      </div>
      <div className="contact-right">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit} ref={form}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea placeholder="Type your Message here..." name="message" required></textarea>
          <button type="submit">Submit</button>
          {message && (
            <span>Thanks for contacting FoodFire, We will reply ASAP.</span>
          )}
          {error && (
            <span>email can't be sent due to some issue in service</span>
          )}

        </form>
      </div>
    </div>
  );
};

export default Contact;
