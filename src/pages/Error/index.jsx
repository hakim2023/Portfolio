import React from 'react'
import { Link } from 'react-router-dom'
import './error.scss'

export default function Error() {
  return (
    <div className='error__main'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
   </div>
  )
}
