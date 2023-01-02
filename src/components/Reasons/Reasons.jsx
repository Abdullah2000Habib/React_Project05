import React from 'react';
import adidas from "../../assets/adidas.png";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import style from "./style.module.css";

export default function Reasons() {
return (
    <>
        <div className={style.reasons} id="reasons">
          <div className={style.left}>
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img2" />
            <img src={img4} alt="img4" />
          </div>
          <div className={style.right}>
            <span>SOME REASONS</span>
            <div>
              <span className='storke-text'>WHY </span>
              <span>CHOOSE US?</span>
            </div>
            <div className={style.details}>
              <div>
                <img src={tick} alt="tick"/>
                <span>OVER 140+ EXPERT COACHS</span>
              </div>
              <div>
                <img src={tick} alt="tick"/>
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
              </div>
              <div>
                <img src={tick} alt="tick"/>
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
              </div>
              <div>
                <img src={tick} alt="tick"/>
                <span>RELIABLE PARTNERS</span>
              </div>
            </div>
            <span style={{color:"var(--gray)",fontWeight: "normal"}}>OUR PARTNERS</span>
            <div className={style.partners}>
              <img src={nb} alt="nb"/>
              <img src={adidas} alt="adidas"/>
              <img src={nike} alt="nike"/>
            </div>
          </div>
        </div>
    </>
)
}
