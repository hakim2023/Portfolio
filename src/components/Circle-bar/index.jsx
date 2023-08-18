import React, { useState, useRef, useEffect } from 'react';
import './Circle-bar.scss';
import { Circle } from 'rc-progress';

export default function CircleBar(props) {
  const [isInViewport, setIsInViewport] = useState(false);
  const progressContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
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
      {/* <div className="row progress__container" ref={progressContainerRef}>
        <div className=" col-12 col-lg-8">
          <div className='circle__container'> */}
            <svg className='svg ' ref={progressContainerRef} >
              <circle
                className='circle1'
                stroke={props.color}
                cx="50%"
                cy="70px"
                r="60px"
                strokeWidth="10"
                strokeDasharray="377" // (2 * Math.PI * 60)
                strokeDashoffset={(100 - progressBarNow) / 100 * 377} // Offset based on percentage
                fill="transparent"
                style={{ transition: 'stroke-dashoffset 0.8s ease-in-out' }} // 2 seconds animation
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
    //     </div>
    //   </div>
    // </div>
  );
}
