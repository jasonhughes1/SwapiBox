import React from 'react';
import css from './Controls.css';


const activeButton = (currentView, category) => {
  if (currentView === category){
    return 'active-button';
  }
};

const Controls = ({ changeCategory, currentView }) => {
  return (
    <div className='controls'>
      <button className={activeButton(currentView, 'People')}
                   name='People'
                onClick={(event) => changeCategory(event.target.name, event)}>People</button>
      <button>Planets</button>
      <button>Vehicles</button>
    </div>
  )
}


export default Controls;
