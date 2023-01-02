import React from 'react';
import calories from "../../assets/calories.png";
import heart from "../../assets/heart.png";
import heroImg from "../../assets/hero_image.png";
import heroImgBack from "../../assets/hero_image_back.png";
import Header from '../Header/Header';
import style from "./style.module.css";
export default function Hero() {
return (
  <div>
      <div className={style.hero}>
        <div className={style.left}>
          <Header/>
          {/* The Best Ad */}
          <div className={style.theBest}>
            <div></div>
            <span>THE BEST FITNESS CLUB IN THE TOWN</span>
          </div>
          {/* Hero Heading */}
          <div className={style.heroText}>
            <div>
              <span className="storke-text ">SHAPE </span>
              <span>YOUR</span>
            </div>
            <div>
              <span>IDEAL BODY</span>
            </div>
            <div>
              <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
          </div>
          {/* Figures */}
          <div className={style.figures}>
            <div>
              <span>+ 140</span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span>+ 978</span>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <span>+ 50</span>
              <span>FITNESS PROGRAMS</span>
            </div>
          </div>
          {/* Hero Buttons */}
          <div className={style.heroButtons}>
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className={style.right}>
          <button className='btn'>Join Now</button>
          <div className={style.heartRate}>
            <img src={heart} alt="heart"/>
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>
          {/* Hero Images */}
          <img src={heroImg} alt="hero Img" className={style.heroImage}/>
          <img src={heroImgBack} alt="hero Img Back" className={style.heroImageBack}/>
          {/* Calories  */}
          <div className={style.calories}>
            <img src={calories} alt="calories" />
            <div>
                <span>Calories burned</span>
                <span>220 kcal</span>
            </div>
          </div>
        </div>
      </div>
  </div>
)
}
