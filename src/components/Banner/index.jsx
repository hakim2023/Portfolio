import React from 'react'
import './Banner.scss'
import background from '../../assets/background.jpeg'
import profile__photo from '../../assets/nft.png'

export default function Banner() {
  return (
    <div>
            <div class="banner-image1 w-100 vh-100  d-flex flex-column  flex-md-row justify-content-evenly align-items-center">
                <div class="content text-center">
                   
                    
                    <h1 class='hero text-white'>Abdelhakim <span class='ouadie'>Ouadie</span><br />développeur web </h1>
                        <br />
                        <br />
                    <h3 class="cv text-white">Télécharger mon CV <a href={background} download><i class="fas fa-arrow-circle-down"></i></a></h3>
                    
                </div>

                <div class="container-hex d-flex justify-content-center align-items-center position-relative">
                     <div class="hexagone">
                        <div class="shape">
                            
                             <img src={profile__photo} width='100%' height="100%" alt="profile"/>
                        </div>
                        <a class="mail" href="mailto: hakim.ouadie@gmail.com"  target="_blank" rel ='noreferrer'>
                             <i class="fas fa-envelope fa-lg"></i>
                        </a>
                     </div>
                </div>
            </div>
    </div>
  )
            
};
