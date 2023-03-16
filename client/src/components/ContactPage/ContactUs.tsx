import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactUs.css';

const ContactUs = () =>{

    const form: any= useRef();


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yyx4xyd', 'template_j5w2m25', form.current, '5V1-1q9JwtLgoNeM_')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
    
    <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2>CONTACT</h2>
      <div className="links">
        <div className="link">
          <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-item">
          <input type="text" name="user_name" required />
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="user_email" required />
          <label>Email:</label>
        </div>
        <div className="form-item">
          <textarea className="" name="message" required></textarea>
          <label>Message:</label>
        </div>
        <input type="submit" className="submit-btn" value="Submit" />
      </form>
    </div>
  </div>
</section>

    );
};

export default ContactUs;