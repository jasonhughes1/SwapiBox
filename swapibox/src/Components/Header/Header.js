import React from 'react';
import './Header.css';
import Controls from './../Controls/Controls.js';
import PropTypes from 'prop-types';


const Header = ({favFn, numFav, changeCards, num}) => {
  return (
    <div className="header-container">
      <h1 className="main-header">SWAPI-Box</h1>
      <div className="header">
      </div>
      <Controls className={' button-favorite '}
        buttonText={'View Favorites:  ' + numFav}
        favFn={favFn}
        changeCards={changeCards}
        num={num}
      />
    </div>
  );
};

Header.propTypes = {
  changeCards: PropTypes.func,
  favFn: PropTypes.func,
  num: PropTypes.number,
  numFav: PropTypes.number
};

export default Header;
