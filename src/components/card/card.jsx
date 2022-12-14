import React from 'react';
import './card.css';

const card = ({image, header, detail}) => {
  return (
    <div className="card">
        <img src={image} alt="" />
        <span>{header}</span>
        <span>{detail}</span>
    </div>
  )
};

export default card;