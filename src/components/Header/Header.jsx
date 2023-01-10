import React, { useState } from 'react';
import { Link } from 'react-scroll';
import bars from "../../assets/bars.png";
import logo from "../../assets/logo.png";
import style from "./style.module.css";
export default function Header() {
const mobile = window.innerWidth<=768?true:false;
const [menuOpened,setMenuOpened] =useState(false);
return (
  <>
      <div className={style.header}>
        <img src={logo} alt="logo" className={style.logo}/>
        {(menuOpened === false && mobile ===true)?(<div onClick={()=>setMenuOpened(true)} style={{backgroundColor:"var(--appColor)",padding:"0.5rem",borderRadius:"5px",cursor:"pointer"}}><img src={bars} alt="" style={{width:"1.5rem",height:"1.5rem"}}/></div>):(<ul className={style.headerMenu}>
          <li ><Link onClick={()=>setMenuOpened(false)} to='home'  activeClass="active" spy={true} smooth={true}>Home</Link></li>
          <li ><Link onClick={()=>setMenuOpened(false)} to='programs' spy={true} smooth={true}>Programs</Link></li>
          <li ><Link onClick={()=>setMenuOpened(false)} to='reasons' spy={true} smooth={true}>Why us</Link></li>
          <li ><Link onClick={()=>setMenuOpened(false)} to='plans' spy={true} smooth={true}>Plans</Link></li>
          <li ><Link onClick={()=>setMenuOpened(false)} to='testimonials' spy={true} smooth={true}>Testimonials</Link></li>
        </ul>)}
      </div>
  </>
)
}
