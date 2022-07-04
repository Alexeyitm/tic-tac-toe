import React from 'react';
import './Cell.css';

function Cell({ id, state, setIsState }) {

  const clickCell = () => {
    setIsState({...state, id: 'o'});
    console.log(state)
  }
  
  return (
    <button className="tic-tac-toe__cell" onClick={clickCell}></button>
  );
}

export default Cell;