import React from 'react';
import './Cell.css';

function Cell({ id, state, setIsState }) {

  const clickCell = () => {
    console.log(id+1)
    setIsState({...state, id: true});
    console.log(state)
  }
  
  return (
    <button className="tic-tac-toe__cell" onClick={clickCell}></button>
  );
}

export default Cell;