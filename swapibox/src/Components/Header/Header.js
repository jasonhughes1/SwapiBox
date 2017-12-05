import React from 'react';
import css from './Header.css';


const Header = () => {
  return (
    <div className="header-container">
      <h1 className="main-header">SWAPI-Box</h1>
      <button className="fav-button">Favorites: <span>0</span></button>
    </div>
  )
}


export default Header;
