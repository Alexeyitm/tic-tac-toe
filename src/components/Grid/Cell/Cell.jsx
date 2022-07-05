import React from 'react';
import './Cell.css';

function Cell({ id, isType, setIsType, isPosition, setIsPosition }) {

  const clickCell = () => {

    if (isPosition[id] === 'o' || isPosition[id] === 'x') {
      return null
    }

    setIsType(!isType);

    const newPosition = isPosition;
    isType ? newPosition[id] = 'o' : newPosition[id] = 'x'
    setIsPosition(newPosition);
    console.log(isPosition)
  }
  
  return (
    <button className="tic-tac-toe__cell" onClick={clickCell}>
      <div className={"tic-tac-toe__symbol " + 
      (isPosition[id] === "o" ? "tic-tac-toe__symbol_x " : "") +
      (isPosition[id] === "x" ? "tic-tac-toe__symbol_o": "")}></div>
    </button>
  );
}

export default Cell;