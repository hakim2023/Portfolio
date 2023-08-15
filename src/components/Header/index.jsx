import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (<>
    
        <header id="accueil">
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg navbar-transparent  bg-transparent p-md-1">   
                <div className="container">

                     {/* <!-- Logo --> */}
                     <Link to="/" className="navbar-brand">
                         Ouadie
                     </Link>
        
                   

                     {/* <!-- hamburger button --> */}
                     <button
                        className='navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around'
                        type='button'
                        data-bs-target='#navbarText'
                        data-bs-toggle='collapse'
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle Navbar"
                        >
                            <span className="toggler-icon top-bar" ></span>
                            <span className="toggler-icon mid-bar" ></span>
                            <span className="toggler-icon bottom-bar" ></span>
                     </button>

                    {/* <!-- navbar menu --> */}
                    <div className="collapse navbar-collapse" id="navbarText">
                            <div className="mx-auto"></div>

                                <Nav variant="pills" defaultActiveKey="/">
                                <Nav.Item className='nav__item'>
                                    <Nav.Link className="navbar__link" href="/">Accueil</Nav.Link>
                                </Nav.Item >
                                <Nav.Item  className='nav__item'>
                                    <Nav.Link  className="navbar__link" href="/#competences">Compétences</Nav.Link>
                                </Nav.Item>
                                <Nav.Item  className='nav__item'>
                                    <Nav.Link  className="navbar__link" href="/#projets">Projets</Nav.Link>
                                </Nav.Item>
                                <Nav.Item  className='nav__item'>
                                    <Nav.Link  className="navbar__link" href="/#contact">Contact</Nav.Link>
                                </Nav.Item>
                                </Nav>

                    </div>
                </div>
            </nav>


    </header>

    
    </>
  )
}



