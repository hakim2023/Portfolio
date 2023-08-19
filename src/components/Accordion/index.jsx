import './Accordion.scss'
import React, { useState } from 'react'



export default function Accordion(props) {
const [selected , setSelected] = useState(false); 
// on fait appel a useState qui return 2 valeur(les valuerus sont retoutné dans un tableu array)
// la premiere est selected dans notre cas est une valeur boolean qui montre si le dropdown est ouvert ou pas
// la deuxime valeurs est  fonction quon utilise pour changer la state ou l'etat de dropdown 

  function toggleAccordion(){
    setSelected(!selected)
    // quand l'utiliateur clic sur le bouton - le setSelected change l'etat de dropdown  à l'opposé de ce qu'ill etait 
    // ( true devient false et false deviens true)
  }
  return (<>
  
         <div onClick={() => toggleAccordion()}className="accordion-header d-flex justify-content-between  align-items-center  p-3 mb-2">

            <h4  className=" text-dark">{props.name}</h4>

            <div className="bars d-flex justify-content-center align-items-center ">
                <div className ={selected?'accordion-bar bar--down ':'accordion-bar bar--up'} ></div>
                
            </div>

        </div>
        <p className={selected ?'p show accordion-body  mx-auto':'p hide'} >{props.description} </p>



    </> )
}
