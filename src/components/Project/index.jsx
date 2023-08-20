import React from 'react'
import './Project.scss'
export default function Project(props) {
  return (<>

                <div className="project__contain">
                    <h3>{props.title}</h3>
                    <div className="card">
                    <img src={props.cover} alt={`${props.title} cover`} style={{width:'100%'}}  />
                    </div>
              </div>

    </>)
}
