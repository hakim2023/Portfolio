import React from 'react'
import './Skills.scss'
import ProgressBar from './../../components/Progress-bar'
import {skills} from './../../data/skills';

let skillsLeft = skills.filter((skill) => {
  return skill.id%2 === 0;
});
let skillsRight = skills.filter((skill) => {
  return skill.id%2 !== 0;
});
console.log(skillsRight)

export default function Skills() {


  
  return (<>

<section id="competences" >
 <div className="container-fluid ">
        <div className="row pt-4">
            <div className="col-10 mx-auto py-2">
                <h2 className=""><i className="fas fa-code text-primary "></i> Mes compétences</h2>
            </div>
        </div>
    

    <div className="row">
      <div className="col-8 mx-auto py-3">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quibusdam quam ipsam blanditiis sunt in sequi quidem.</p>
      </div>
    </div>

    <div className="row d-flex justify-content-center align-items-center mx-auto ">
            <div className="col-10 ">
                {/* <!-- competences professionnelles container --> */}
                <div className="comp-contain row  d-flex justify-content-center align-items-center pb-5">

                    <h3 className=" col-10 mx-auto  pb-3 py-4 "> Compétences professionnelles</h3>
                    
                      
                    <div className= {'right-col col-12 col-md-5 mx-0' } >
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
          </div>
         </div>
         </div>

         </section>
<section id='projets'>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nisi necessitatibus similique eos error, quos molestias dicta iusto dolorum eveniet nihil natus explicabo? Doloribus quaerat aut minus cumque! Incidunt, iste.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam ducimus laudantium, dolores atque suscipit neque voluptates debitis sed ea velit libero, incidunt dolorum minus tenetur! Soluta ea ut doloremque.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, velit delectus? Placeat, minima expedita iure inventore velit accusantium culpa explicabo, fugit asperiores suscipit assumenda, dignissimos provident corrupti totam nostrum doloribus?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quasi? Consequuntur reprehenderit numquam ex natus modi unde, eos quas accusamus quasi adipisci aspernatur iste quis consectetur. Iste asperiores temporibus reprehenderit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate, aliquam laboriosam molestias alias culpa qui debitis quia iure dicta error delectus, odio possimus illo numquam saepe explicabo a animi.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, expedita soluta blanditiis vel pariatur laudantium nisi dignissimos eveniet rem necessitatibus, voluptas eaque vitae saepe reprehenderit distinctio odit dolores voluptatem laborum.

  </p>
</section>
       </>)
}
