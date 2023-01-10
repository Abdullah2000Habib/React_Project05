import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import React from 'react';
import calories from "../../assets/calories.png";
import heart from "../../assets/heart.png";
import heroImg from "../../assets/hero_image.png";
import heroImgBack from "../../assets/hero_image_back.png";
import Header from '../Header/Header';
import style from "./style.module.css";
export default function Hero() {
  const transition = {type:"spring",duration:3}
  const mobile = window.innerWidth<=768?true:false;
return (
  <div>
      <div className={style.hero} id="home">
        <div className={`blur ${style.heroBlur}`}></div>
        <div className={style.left}>
          <Header/>
          {/* The Best Ad */}
          <div className={style.theBest}>
            <motion.div
            initial={{left: mobile?"165px":"238px"}}
            whileInView={{left:"8px"}}
            transition={{...transition,type:"tween"}}
            ></motion.div>
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
              <span><NumberCounter start={100} end={140} delay={4} preFix="+" /> </span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span><NumberCounter start={800} end={978} delay={4} preFix="+" /></span>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <span><NumberCounter start={0} end={50} delay={4} preFix="+" /></span>
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
          <motion.div
          className={style.heartRate}
          initial={{right:"-1rem"}}
          whileInView={{right:"4rem"}}
          transition={transition}>
            <img src={heart} alt="heart"/>
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>
          {/* Hero Images */}
          <img src={heroImg} alt="hero Img" className={style.heroImage}/>
          <motion.img
          initial={{right:"11rem"}}
          whileInView={{right:"20rem"}}
          transition={transition}
          src={heroImgBack} alt="hero Img Back" className={style.heroImageBack}/>
          {/* Calories  */}
          <motion.div className={style.calories}
          initial={{right:"37rem"}}
          whileInView={{right:"28rem"}}
          transition={transition}
          >
            <img src={calories} alt="calories" />
            <div>
                <span>Calories burned</span>
                <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
  </div>
)
}
