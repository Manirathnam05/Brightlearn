import React from 'react';
import './Hero.css';
import dark_arrow from '../../Assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container hero'>
       <div className='hero-text'>
        <h1>We ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic field of education.
        </p>
        <button className='btn hero-btn'>
       Explore More <img src={dark_arrow} alt="Arrow pointing to more content" className='darkarrow'/>
        </button>
      </div> 
    
    </div>
    
    // 

  );
};

export default Hero;
