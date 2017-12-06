import React from 'react';
import css from './Scroll.css';

const Scroll = ({data, opening}) => {
const text = data[opening].Opening;
const filmTitle = data[opening].Title;
const releaseDate = data[opening].Release;

  return (
    <div className="scroll-container">
      <p className="opening-crawl">{text}</p>
    </div>

  )
}

export default Scroll;
