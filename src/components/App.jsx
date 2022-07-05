import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header'
import Grid from './Grid/Grid';

function App() {

  const [isType, setIsType] = useState(true);
  const [isPosition, setIsPosition] = useState({
    0: '', 1: '', 2: '',
    3: '', 4: '', 5: '',
    6: '', 7: '', 8: ''
  });
  const [isWin, setIsWin] = useState('');

  const check = () => {
    if ((isPosition[0] === "x" && isPosition[1] === "x" && isPosition[2] === "x") ||
        (isPosition[3] === "x" && isPosition[4] === "x" && isPosition[5] === "x") ||
        (isPosition[6] === "x" && isPosition[7] === "x" && isPosition[8] === "x") ||
        (isPosition[0] === "x" && isPosition[3] === "x" && isPosition[6] === "x") ||
        (isPosition[1] === "x" && isPosition[4] === "x" && isPosition[7] === "x") ||
        (isPosition[2] === "x" && isPosition[5] === "x" && isPosition[8] === "x") ||
        (isPosition[0] === "x" && isPosition[4] === "x" && isPosition[8] === "x") ||
        (isPosition[2] === "x" && isPosition[4] === "x" && isPosition[6] === "x")) {
      setIsWin('x')
    } else if
        ((isPosition[0] === "o" && isPosition[1] === "o" && isPosition[2] === "o") ||
        (isPosition[3] === "o" && isPosition[4] === "o" && isPosition[5] === "o") ||
        (isPosition[6] === "o" && isPosition[7] === "o" && isPosition[8] === "o") ||
        (isPosition[0] === "o" && isPosition[3] === "o" && isPosition[6] === "o") ||
        (isPosition[1] === "o" && isPosition[4] === "o" && isPosition[7] === "o") ||
        (isPosition[2] === "o" && isPosition[5] === "o" && isPosition[8] === "o") ||
        (isPosition[0] === "o" && isPosition[4] === "o" && isPosition[8] === "o") ||
        (isPosition[2] === "o" && isPosition[4] === "o" && isPosition[6] === "o")) {
      setIsWin('o')
    }
  }

  useEffect(() => {
    setTimeout(check, 500);
  });

  useEffect(() => {}, [isPosition]);


  return (
    <div className="App">
      <Header 
        setIsType={setIsType}
        setIsPosition={setIsPosition}
      />
      <Grid
        isType={isType}
        setIsType={setIsType}
        isPosition={isPosition}
        setIsPosition={setIsPosition}
      />
    </div>
  );
}

export default App;
