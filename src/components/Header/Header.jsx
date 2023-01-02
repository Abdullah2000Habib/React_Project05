import React from 'react';
import logo from "../../assets/logo.png";
import style from "./style.module.css";
export default function Header() {
return (
  <>
      <div className={style.header}>
        <img src={logo} alt="logo" className={style.logo}/>
        <ul className={style.headerMenu}>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      </div>
  </>
)
}
