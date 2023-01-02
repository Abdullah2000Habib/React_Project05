import React from 'react';
import whiteTick from "../../assets/whiteTick.png";
import style from "./style.module.css";
export default function PlanCard({icon,name,price,features}) {
return (
  <>
      <div className={style.plan}>
        {icon}
        <span>{name}</span>
        <span>$ {price}</span>
        <div className={style.features}>
          {features.map((item,i)=>{
            return (
              <div className={style.feature}>
                <img src={whiteTick} alt="whiteTick"/>
                <span key={i}>{item}</span>
              </div>
            )
          })}
        </div>
        <div>
          <span>See more benefits →</span>
        </div>
        <button className='btn'>Join Now</button>
      </div>
  </>
)
}
