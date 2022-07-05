import React from 'react';
import './Popup.css';

function Popup({ isWin, resetApp }) {
  const resetAndAgain = () => {
    resetApp();
  }

  return (
    <div className={"popup " + (isWin !== "" && "popup_opened")}>
      <div className="popup__container">
        <div className="popup__gif"></div>
        <p className="popup__text">{isWin === "x" ? "X" : "O"} - WIN!!!</p>
        <button className="popup__again" onClick={resetAndAgain}>AGAIN</button>
      </div>
    </div>
  );
}

export default Popup;