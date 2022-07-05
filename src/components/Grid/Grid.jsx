import React from 'react';
import './Grid.css';
import Cell from './Cell/Cell';

function Grid({ isType, setIsType, isPosition, setIsPosition }) {

  return (
      <div className="grid">
        {Array.from(Array(9)
          .keys())
          .map(el => <Cell 
                      id={el}
                      isType={isType}
                      setIsType={setIsType}
                      isPosition={isPosition} 
                      setIsPosition={setIsPosition} 
                      key={el} />
          )
        }
      </div>
  );
}

export default Grid;