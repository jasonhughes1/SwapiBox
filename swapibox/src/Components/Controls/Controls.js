import React from 'react';
import css from './Controls.css';


const Controls = ({ buttonText, changeCards, num, className }) => {
  return (
    <div className={`${className}`}>
      <button onClick={() => (changeCards(num))}>{buttonText}</button>
    </div>
  );
};

export default Controls;
