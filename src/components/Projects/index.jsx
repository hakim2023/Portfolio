import React from 'react'
import './Projects.scss'
import Project from './../../components/Project';
import { projects } from '../../data/projects'
import { FaProjectDiagram } from 'react-icons/fa';

export default function Projects(props) {
  return (<>
    <div className='container-fluid projects__container'>
    <div className="row pt-4">
            <div className=" col-10 mx-auto py-4">
                <h2 className='d-flex gap-4'> <span className="icon__project"><FaProjectDiagram/></span> Mes Projets</h2>
            </div>
        </div>
        <div className="row  projects__wrapper d-flex justify-content-center align-items-center mx-auto ">
            <div className="col-12 col-md-10 proj__contain">
            {/* <div className=" row  d-flex justify-content-center align-items-center pb-5"> */}

    {projects.map((project) => (
                                
                                <Project
                                              key={project.id}
                                              title={project.title}
                                              cover={project.cover}
                                              shortDescription={project.shortDescription}
                                              longueDescription={project.longueDescription}
                                              usedTech={project.usedTech}
                              />  
                                         
                                ))}   
                               
           
    {/* </div> */}
    </div>
    </div>
        </div>
    </>)
  
}
