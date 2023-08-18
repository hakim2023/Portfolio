// import React from 'react'
// import Nav from 'react-bootstrap/Nav';
// import './Header.scss'
// import { Link } from 'react-router-dom'

// export default function Header() {
//   return (<>
    
//         <header id="accueil">
//             {/* <!-- Navbar --> */}
//             <nav className="navbar navbar-expand-lg navbar-transparent  bg-transparent p-md-1">   
//                 <div className="container">

//                      {/* <!-- Logo --> */}
//                      <Link to="/" className="navbar-brand">
//                          Ouadie
//                      </Link>
        
                   

//                      {/* <!-- hamburger button --> */}
//                      <button
//                         className='navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around'
//                         type='button'
//                         data-bs-target='#navbarText'
//                         data-bs-toggle='collapse'
//                         aria-controls="navbarNav"
//                         aria-expanded="false"
//                         aria-label="Toggle Navbar"
//                         >
//                             <span className="toggler-icon top-bar" ></span>
//                             <span className="toggler-icon mid-bar" ></span>
//                             <span className="toggler-icon bottom-bar" ></span>
//                      </button>

//                     {/* <!-- navbar menu --> */}
//                     <div className="collapse navbar-collapse" id="navbarText">
//                             <div className="mx-auto"></div>

//                                 <Nav  defaultActiveKey="/">
//                                 <Nav.Item className='nav__item'>
//                                     <Nav.Link className="navbar__link" href="/">Accueil</Nav.Link>
//                                 </Nav.Item >
//                                 <Nav.Item  className='nav__item'>
//                                     <Nav.Link  className="navbar__link" href="/#competences">Compétences</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item  className='nav__item'>
//                                     <Nav.Link  className="navbar__link" href="/#projets">Projets</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item  className='nav__item'>
//                                     <Nav.Link  className="navbar__link" href="/#contact">Contact</Nav.Link>
//                                 </Nav.Item>
//                                 </Nav>

//                     </div>
//                 </div>
//             </nav>


//     </header>

    
//     </>
//   )
// }


import React, { useState, useEffect } from 'react';
import './Header.scss';
import { Nav } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

export default function Header() {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'competences', 'projets', 'contact'];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);

        if (element && element.offsetTop <= window.scrollY + 500) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="accueil">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent p-md-1">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            Ouadie
          </Link>

          {/* hamburger button */}
          <button
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-target="#navbarText"
            data-bs-toggle="collapse"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle Navbar"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon mid-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>

          {/* navbar menu */}
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="mx-auto"></div>

            <Nav defaultActiveKey="/">
              <Nav.Item className="nav__item">
                {/* <Link to="/" className="navbar__link">
                  Accueil
                </Link> */}
                  <ScrollLink
                  to="accueil"
                  className={`navbar__link ${
                    activeSection === 'accueil' ? 'active' : ''
                  }`}
                  smooth={true}
                  duration={500}
                >
                  Accueil
                </ScrollLink>
              </Nav.Item>
              <Nav.Item className="nav__item">
                <ScrollLink
                  to="competences"
                  className={`navbar__link ${
                    activeSection === 'competences' ? 'active' : ''
                  }`}
                  smooth={true}
                  duration={500}
                >
                  Compétences
                </ScrollLink>
              </Nav.Item>
              <Nav.Item className="nav__item">
                <ScrollLink
                  to="projets"
                  className={`navbar__link ${
                    activeSection === 'projets' ? 'active' : ''
                  }`}
                  smooth={true}
                  duration={500}
                >
                  Projets
                </ScrollLink>
              </Nav.Item>
              <Nav.Item className="nav__item">
                <ScrollLink
                  to="contact"
                  className={`navbar__link ${
                    activeSection === 'contact' ? 'active' : ''
                  }`}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </ScrollLink>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </nav>
    </header>
  );
}
