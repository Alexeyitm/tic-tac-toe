import React from 'react';
import './Grid.css';
import Cell from './Cell/Cell';

function Grid({ position, setIsPosition }) {

  return (
      <div className="grid">
        {Array.from(Array(9)
          .keys())
          .map(el => <Cell 
                      id={el}
                      position={position} 
                      setIsPosition={setIsPosition} 
                      key={el} />
          )
        }
      </div>
  );
}

export default Grid;