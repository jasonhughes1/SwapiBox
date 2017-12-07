import React from 'react';
import css from './Controls.css';


const Controls = ({ buttonText, changeCards, num }) => {
  return (
    <div className='controls'>
      <button onClick={() => (changeCards(num))}>{buttonText}</button>
    </div>
  )
}


export default Controls;
