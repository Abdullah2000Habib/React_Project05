import React from 'react';
import rightArrow from "../../assets/rightArrow.png";
import style from "./style.module.css";
export default function ProgramCard({img,heading,details}) {
return (
  <>
      <div className={style.category}>
        {img}
        <span>{heading}</span>
        <span>{details}</span>
        <div className={style.joinNow}>
          <span>Join Now</span>
          <img src={rightArrow} alt="rightArrow"/>
        </div>
      </div>
  </>
)
}
