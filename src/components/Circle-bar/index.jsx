import React, { useState, useRef, useEffect } from 'react';
import './Circle-bar.scss';

export default function CircleBar(props) {
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

  const isSmallScreen = window.innerWidth < 900;
  const progressBarNow = isInViewport ? props.percentage : 0;
  const strokeDashoffset = (100 - progressBarNow) / 100 * 377;

  return (
    <div>
      <svg className='svg' ref={progressContainerRef}>
        <circle
          className='circle1'
          stroke={props.color}
          cx="50%"
          cy="70px"
          r={isSmallScreen ? "50px" : "60px"} 
          strokeWidth={isSmallScreen ? "10" : "15"} 
          strokeDasharray="377"
          strokeDashoffset={isNaN(strokeDashoffset) ? "0" : strokeDashoffset}
          fill="transparent"
          style={{ transition: 'stroke-dashoffset 0.8s ease-in-out' }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(8, 92, 172)" />
            <stop offset="100%" stopColor="rgb(42, 152, 255)" />
          </linearGradient>
        </defs>
        <text x="50%" y="45%" textAnchor="middle" fontSize="1.3em" fill="white">
          {props.name}
        </text>
        <text x="50%" y="92%" textAnchor="middle" fontSize="1em" fill="white">
          {props.level}
        </text>
      </svg>
    </div>
  );
}
