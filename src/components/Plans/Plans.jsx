import React from 'react';
import PlanCard from '../PlanCard';
import { plansData } from './plansData';
import style from "./style.module.css";
export default function Plans() {
return (
    <>
        <div className={style.plansContainer} id="plans">
            <div className={`blur ${style.plansBlur1}`}></div>
            <div className={`blur ${style.plansBlur2}`}></div>
            <div className={style.plansHeader}>
                <span className='storke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span  className='storke-text'>NOW WITHUS</span>
            </div>
            {/* Plans  Card */}
            <div className={style.plans}>
                {plansData.map((item)=>{
                    return(<PlanCard key={item.id}  icon={item.icon} name={item.name} price={item.price} features={item.features}/>)
                })}
            </div>
        </div>
    </>
)
}
