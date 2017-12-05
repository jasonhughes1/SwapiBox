import React from 'react';
import css from './Scroll.css';

const Scroll = ({scrollData}) => {
  console.log(scrollData);
  return (
    <div className="scroll-container">
      <p className="opening-crawl">{scrollData}</p>
    </div>

  )
}

export default Scroll;
