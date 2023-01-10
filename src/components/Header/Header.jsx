import React, { useState } from 'react';
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
          <li onClick={()=>setMenuOpened(false)}>Home</li>
          <li onClick={()=>setMenuOpened(false)}>Programs</li>
          <li onClick={()=>setMenuOpened(false)}>Why us</li>
          <li onClick={()=>setMenuOpened(false)}>Plans</li>
          <li onClick={()=>setMenuOpened(false)}>Testimonials</li>
        </ul>)}
      </div>
  </>
)
}
