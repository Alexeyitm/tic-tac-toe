import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header'
import Grid from './Grid/Grid';

function App() {

  const [isType, setIsType] = useState(true)

  const [isPosition, setIsPosition] = useState({
    0: '', 1: '', 2: '',
    3: '', 4: '', 5: '',
    6: '', 7: '', 8: ''
  });

  useEffect(() => {}, [isPosition]);

  return (
    <div className="App">
      <Header />
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
