import React from 'react';
import './Grid.css';
import Cell from './Cell/Cell';

function Grid({ state, setIsState }) {

  return (
      <div className="grid">
        {Array.from(Array(9)
          .keys())
          .map(el => <Cell id={el} state={state} setIsState={setIsState}/>)
        }
      </div>
  );
}

export default Grid;