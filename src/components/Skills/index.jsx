import React from 'react'
import './Skills.scss'
import ContactUs from './../../components/ContactUs';
import Competences from './../../components/Competences';
import Projects from './../../components/Projects';

export default function Skills() {
  
  return (<>
            <section id="competences" >
                <Competences/> 
            </section>

            <section id='projets'>
               <Projects/>  
            </section>
            
            <section id='contact'>
               <ContactUs/>  
            </section>

       </>)
       }
