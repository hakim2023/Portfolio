import React, { useState, useRef, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Progress-bar.scss';

export default function ProgressBarLanguages(props) {
  const [isInViewport, setIsInViewport] = useState(false);
  const progressContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    }, options);

    if (progressContainerRef.current) {
      observer.observe(progressContainerRef.current);
    }

    return () => {
      if (progressContainerRef.current) {
        observer.unobserve(progressContainerRef.current);
      }
    };
  }, []);

  const progressBarNow = isInViewport ? props.percentage : 0;

  return (
    <div>
      <div className="row progress__container" ref={progressContainerRef}>
        <div className="col-12 col-lg-2">{props.name}</div>
        <div className="col-12 col-lg-8">
          <div className="progress">
            <ProgressBar now={progressBarNow} style={{ width:  '100%', background: props.color }} variant ={props.color} />
          </div>
        </div>
      </div>
    </div>
  );
}
