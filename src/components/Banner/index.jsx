import React from 'react'
import './Banner.scss'
import { Link } from 'react-router-dom';
// import background from '../../assets/background.jpeg'
import {FaGithub} from 'react-icons/fa';
import profile__photo from '../../assets/nft.png'

export default function Banner() {
  return (
    <div>
            <div className="banner-image1 w-100 vh-100  d-flex flex-column  flex-md-row justify-content-evenly align-items-center">
                <div className="title-container text-center d-flex flex-column align-items-center">
                   
                    
                    <h1 className='hero text-white'>Abdelhakim <span className='ouadie'>Ouadie</span><br />développeur web </h1>
                        <br />
                        <br />
                    {/* <h3 className="cv text-white">Télécharger mon CV <a href={background} download><i className="fas fa-arrow-circle-down"></i></a></h3> */}
                        <Link className='github__container 'to="https://github.com/hakim2023" target="_blank" rel="noopener noreferrer">
                          <div className='github__icon'><FaGithub/></div>
                          <h2>Github</h2>
                          </Link>
                      
                </div>

                <div className="container-hex d-flex justify-content-center align-items-center position-relative">
                     <div className="hexagone">
                        <div className="shape">
                            
                             <img src={profile__photo} width='100%' height="100%" alt="profile"/>
                        </div>
                        <a className="mail" href="mailto: hakim.ouadie@gmail.com"  target="_blank" rel ='noreferrer'>
                             <i className="fas fa-envelope fa-lg"></i>
                        </a>
                     </div>
                </div>
            </div>
    </div>
  )
            
};
