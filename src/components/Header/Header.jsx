import React from 'react';
import './Header.css';

function Header({ setIsType, setIsPosition }) {

  const resetApp = () => {
    setIsType(true);
    setIsPosition({
      0: '', 1: '', 2: '',
      3: '', 4: '', 5: '',
      6: '', 7: '', 8: ''
    })
  }

  return (
    <header className="header">
      <a className="header__logo" href='https://en.wikipedia.org/wiki/Tic-tac-toe' 
      rel="noreferrer" target="_blank" title="Wiki">-</a>
      <h1 className="header__title">Tic-Tac-Toe</h1>
      <button className="header__reset" onClick={resetApp}></button>
    </header>
  );
}

export default Header;