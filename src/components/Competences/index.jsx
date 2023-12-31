import React from 'react'

import ProgressBar from './../../components/Progress-bar'
import CircleBar from './../../components/Circle-bar';
import Accordion from './../../components/Accordion';
import {skills} from './../../data/skills';
import { languages } from '../../data/languages';
import { study } from '../../data/study';



let skillsLeft = skills.filter((skill) => {
  return skill.id%2 === 0;
});
let skillsRight = skills.filter((skill) => {
  return skill.id%2 !== 0;
});


const isSmallScreen = window.innerWidth < 900;

export default function Competences() {

  return (<>


 <div className="container-fluid ">
        <div className="row pt-4">
            <div className="col-10 mx-auto py-2">
                <h2 className=""><i className="fas fa-code text-primary "></i> Mes compétences</h2>
            </div>
        </div>
    

    <div className="row">
      <div className="col-10 col-lg-8 mx-auto py-3 ">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Je suis compétent en développement web avec maîtrise de HTML, CSS, React, et Express.js. Mon expérience couvre la création d'interfaces dynamiques et de serveurs robustes.</p>
      </div>
    </div>

    <div className="row d-flex justify-content-center align-items-center mx-auto ">
            <div className="col-12 col-md-10 ">
                {/* <!-- competences professionnelles container --> */}
                <div className="comp-contain row  d-flex justify-content-center align-items-center pb-5">

                    <h3 className=" col-10 mx-auto  pb-3 py-4 "> Compétences professionnelles</h3>
                    
                      
                    <div className= {'left-col col-12 col-md-5 mx-0' } >
                              {skillsLeft.map((skill) => (
                                <ProgressBar
                                              key={skill.id}
                                              name={skill.name}
                                              color={skill.color}
                                              percentage={skill.percentage}
                              />               
                              ))}   
                       </div>
                
                       <div className= {'right-col col-12 col-md-5 mx-0' } >
                              {skillsRight.map((skill) => (
                                
                                <ProgressBar
                                              key={skill.id}
                                              name={skill.name}
                                              color={skill.color}
                                              percentage={skill.percentage}
                              />  
                                         
                                ))}   
                               
              
                     </div>
                 

                </div>
                <div className=" comp-contain row   flex-md-row flex-column  align-items-center  justify-content-center  py-5 mt-3 ">
                <div className="col-lg-5  col-11 ">
                        <h3 className="col-10 mx-auto  pb-3 py-4">Langues</h3>
                        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{isSmallScreen ? "Locuteur natif en arabe avec de solides compétences en français pour une communication efficace. Maîtrise avancée de l'anglais permettant un engagement fluide et précis.": "Je suis un locuteur natif de l'arabe, ma langue maternelle. Je possède une solide expérience en français, me permettant de communiquer efficacement. Mon niveau d'anglais est avancé, ce qui me permet de m'engager de manière fluide et précise dans cette langue."}</p>
                    </div>

                <div className=" col-lg-6  col-11 d-flex flex-wrap justify-content-center gap-2 align-items-center doughnut">
                {languages.map((language) => (
                                
                                <CircleBar
                                              key={language.id}
                                              name={language.name}
                                              color={language.color}
                                              level={language.level}
                              />     
                                ))}   
                </div>
                </div>
                <div className="comp-contain row  d-flex justify-content-center align-items-center py-3 mt-3 ">
                    <div className="diploma-container col-11 py-3 mt-3">

                        <h3 className="col-11 mx-auto  pb-3 py-4 ">Formations</h3>
                        {study.map((s) => (
                                <Accordion
                                              key={s.id}
                                              name={s.name}
                                              description={s.description}
                                             
                              />               
                              ))}   

                    </div>
                </div>
          </div>
         </div>
         </div>

   

         </>)
}
