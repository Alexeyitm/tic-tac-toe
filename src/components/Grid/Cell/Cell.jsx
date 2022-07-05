import React from 'react';
import './Cell.css';

function Cell({ id, position, setIsPosition }) {

  const clickCell = () => {
    const newPosition = position;
    newPosition[id] = 'o'
    setIsPosition(newPosition);
    console.log(position)
  }
  
  return (
    <button className="tic-tac-toe__cell" onClick={clickCell}></button>
  );
}

export default Cell;