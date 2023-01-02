import React, { useState } from 'react';
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import style from "./style.module.css";
import { testimonialsData } from './testimonialsData';
export default function Testimonials() {
    const [selected,setSelected] =useState(0);
    const tLength = testimonialsData.length;
return (
    <>
        <div className={style.testimonials}>
            <div className={style.left}>
                <span>TESTIMONIALS</span>
                <span className='storke-text'>WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{color:"var(--orange)"}}> {testimonialsData[selected].name}</span>{" "}-
                    {testimonialsData[selected].status}
                </span>
            </div>
            <div className={style.right}>
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="person"/>
                <div className={style.arrows}>
                    <img onClick={()=>{ selected===0 ?setSelected(tLength -1):setSelected( (prevstate)=>  prevstate -1 )}} src={leftArrow} alt="leftArrow"/>
                    <img onClick={()=>{ selected===tLength -1 ?setSelected(0):setSelected( (prevstate)=>  prevstate +1 )}} src={rightArrow} alt="rightAr row"/>
                </div>
            </div>
        </div>
    </>
)
}
