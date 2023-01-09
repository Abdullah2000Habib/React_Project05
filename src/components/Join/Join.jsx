import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import style from "./style.module.css";
export default function Join() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tyr6d4j', 'template_5qqzx65', form.current, 'kWCsFxmPs2j71bY0J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

return (
  <>
      <div className={style.join} id="join-us">
        <div className={style.left}>
          <hr/>
          <div>
            <span className='storke-text'>READY TO</span>
            <span>LEVEL UP</span>
          </div>
          <div>
            <span>YOUR BODY</span>
            <span className='storke-text'>WITH US?</span>
          </div>
        </div>
        <div className={style.right}>
          <form  ref={form} className={style.emailContainer} onSubmit={sendEmail}>
            <input type='email' name="user_email" placeholder='Enter Your Email Address' />
            <button className={`btn ${style.btnJ}`}>Join Now</button>
          </form>
        </div>
      </div>
  </>
)
}
