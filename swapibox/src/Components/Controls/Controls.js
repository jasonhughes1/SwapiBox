import React from 'react';
import css from './Controls.css';


const Controls = ({ buttonText, changeCards, num }) => {
  return (
    <div className='controls'>
      <button onClick={() => (changeCards(num))}>{buttonText}</button>
      <button>Planets</button>
      <button>Vehicles</button>
    </div>
  )
}


export default Controls;
