import React from 'react';
import ProgramCard from '../ProgramCard/ProgramCard';
import { programsData } from './programsData';
import style from "./style.module.css";
export default function Program() {
return (
  <>
      <div className={style.programs} id="programs" >
        {/* Header */}
        <div className={style.programsHeader}>
          <span className="storke-text ">EXPLORE OUR</span>
          <span>PROGRAMS</span>
          <span className="storke-text ">TO SHAPE YOU</span>
        </div>
        <div className={style.programsCategories}>
          {programsData.map((item)=>{
            return(
              <ProgramCard key={item.id} img={item.image}  heading={item.heading} details={item.details}/>
            )
          })}
        </div>
      </div>
  </>
)
}
