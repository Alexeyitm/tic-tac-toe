import React from 'react';
import './Header.css';

function Header({ setIsType, setIsPosition, setIsWin, resetApp }) {

  return (
    <header className="header">
      <a className="header__logo" href="https://en.wikipedia.org/wiki/Tic-tac-toe" 
      rel="noreferrer" target="_blank" title="Wiki">-</a>
      <h1 className="header__title">Tic-Tac-Toe</h1>
      <button className="header__reset" onClick={resetApp}></button>
    </header>
  );
}

export default Header;