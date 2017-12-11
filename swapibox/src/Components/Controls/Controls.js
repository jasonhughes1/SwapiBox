import React from 'react';
import './Controls.css';
import PropTypes from 'prop-types';


const Controls = ({ buttonText, changeCards, num, className, currentData }) => {
  const buttonClass = num === currentData ?
    className + 'active' :
    className + 'inactive';
  return (
    <div >
      <button className={`${buttonClass}`}
        onClick={() => (changeCards(num))}>{buttonText}</button>
    </div>
  );
};

Controls.propTypes = {
  buttonText: PropTypes.string,
  changeCards: PropTypes.func,
  className: PropTypes.string,
  num: PropTypes.number
};

export default Controls;
