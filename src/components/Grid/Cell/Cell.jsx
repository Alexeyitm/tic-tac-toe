import React from 'react';
import './Cell.css';

function Cell({ id, isType, setIsType, isPosition, setIsPosition }) {

  const clickCell = () => {
    setIsType(!isType)
    console.log(isType)

    const newPosition = isPosition;
    isType ? newPosition[id] = 'o' : newPosition[id] = 'x'
    setIsPosition(newPosition);
    console.log(isPosition)
  }
  
  return (
    <button className="tic-tac-toe__cell" onClick={clickCell}></button>
  );
}

export default Cell;