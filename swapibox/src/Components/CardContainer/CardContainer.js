import React from 'react';
import Card from './../Card/Card.js';
import './CardContainer.css';
import PropTypes from 'prop-types';


const CardContainer = ({ cardType, setFavorite, favArray}) => {


  if (cardType.length > 0) {
    const cards = cardType.map((card, index) => {
      let favClass = (favArray.find(favCard => {
        return card === favCard;
      })) ? 'active' : 'inactive';
      return <Card
        favClass={favClass}
        cardData={card}
        key={index}
        setFavorite={setFavorite}
      />;
    });

    return (
      <div className='card-container'>
        <div className='cards'>{cards}</div>
      </div>
    );
  } else {
    return (
      <h2 className='select-favs'>There are no favorites!</h2>
    );
  }
};

CardContainer.propTypes = {
  cardType: PropTypes.array,
  setFavorite: PropTypes.func,
  favArray: PropTypes.array
};

export default CardContainer;
