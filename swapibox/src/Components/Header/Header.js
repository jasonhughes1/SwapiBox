import React from 'react';
import css from './Header.css';
import Controls from './../Controls/Controls.js'


const Header = ({favFn, numFav}) => {
  return (
    <div className="header-container">
      <h1 className="main-header">SWAPI-Box</h1>
      <Controls className={' button favorite '}
        buttonText={'View Favorites' + numFav}
        favFn={favFn}
      />
    </div>
  )
}


export default Header;
