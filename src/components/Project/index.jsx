import React from 'react'
import './Project.scss'
export default function Project(props) {
  return (<>

                <div className="project__contain" >
                    <h3 >{props.title}</h3>
                    <div  onClick={props.onClick} className="card">
                    <img src={props.cover} alt={`${props.title} cover`}  />
                    </div>
                    {/* <p>{props.shortDescription}</p> */}
              </div>

    </>)
}
