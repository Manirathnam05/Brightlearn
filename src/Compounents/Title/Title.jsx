import React from 'react';
import "./Title.css";

const Title = ({title,subtitle}) => {
  return (
    <div className='title'>
        <span id='title1'>{title}</span>
        <h1>{subtitle}</h1>
    </div>
  )
}

export default Title;
