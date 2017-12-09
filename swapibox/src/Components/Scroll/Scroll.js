import React from 'react';
import './Scroll.css';
import PropTypes from 'prop-types';

const Scroll = ({data, opening}) => {
  console.log(data);
  console.log(opening);
  const text = data[opening].Opening;
  const filmTitle = data[opening].Title;
  const releaseDate = data[opening].Release;

  return (
    <div>
      <div className='crawl-container'>
        <div className='fade'>
        </div>
        <div className='star-wars'>
          <div className='crawl'>
            <p className='crawl-text'>{text}</p>
            <p className='film-title'>{filmTitle}</p>
            <p className='release-date'>{releaseDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Scroll.propTypes = {
  data: PropTypes.array,
  opening: PropTypes.number
};

export default Scroll;
