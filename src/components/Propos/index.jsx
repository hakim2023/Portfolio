import React from 'react'
import './Propos.scss'

export default function Propos() {
  return (
    <div className='propos__container d-flex justify-content-center flex-column align-items-center'>
      <h2><strong>À propos de moi</strong></h2>
         <p className='propos__desktop'>En tant que développeur web débutant, je suis enthousiaste à l'idée de créer des expériences en ligne captivantes. Mon expertise actuelle se concentre sur le développement front-end, où j'associe créativité et compétences techniques pour donner vie à des interfaces attrayantes. Chaque projet est une opportunité d'apprentissage et de croissance, et mon objectif constant est de progresser tout en créant des solutions web efficaces et esthétiques.</p>
         <p className='propos__mobile'>je suis passionné par la création d'expériences en ligne captivantes grâce à mes compétences en développement front-end. Chaque projet est une opportunité d'apprentissage pour progresser tout en concevant des solutions web esthétiques et efficaces..</p>
    </div>
  )
}
