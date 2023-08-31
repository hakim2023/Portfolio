import React from 'react';
import {FaGithub} from 'react-icons/fa';
const Modal = ({ project, onClose }) => {
  return (
    <div className="modal__overlay "  >
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        
        <p>{project.longueDescription}</p>
        
        <div className="tech-buttons">
          {project.usedTech.map((tech, index) => (
            <button key={index} className="tech-button">
              {tech}
            </button>
          ))}
        </div>
        <div className='site__container'>
        <a className='site__logo' href={project.site} target='_blank' rel='noreferrer'>www</a>
        <a className='github__logo' href={project.github} target='_blank' rel='noreferrer'><FaGithub/></a>
        </div>
        {/* <div className="image-gallery">
          {project.pictures.map((picture, index) => (
            <img key={index} src={picture} alt={`Imag-x ${index + 1}`} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
