import React from 'react';
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
import style from "./style.module.css";
export default function Footer() {
return (
  <>
      <div className={style.footerContainer}>
        <hr/>
        <div className={style.footer}>
          <div className={style.socialLinks}>
            <img src={github} alt="github"/>
            <img src={instagram} alt="instagram"/>
            <img src={linkedin} alt="linkedin"/>
          </div>
          <div className={style.logo}>
            <img src={logo} alt="logo"/>
          </div>
        </div>
        <div className={`blur ${style.footerBlur1}`}></div>
        <div className={`blur ${style.footerBlur2}`}></div>
      </div>
  </>
)
}
