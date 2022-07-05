import { useState } from 'react';
import './App.css';
import Header from './Header/Header'
import Grid from './Grid/Grid';

function App() {

  const [position, setIsPosition] = useState({
    0: '', 1: '', 2: '',
    3: '', 4: '', 5: '',
    6: '', 7: '', 8: ''
  });

  return (
    <div className="App">
      <Header />
      <Grid position={position} setIsPosition={setIsPosition}/>
    </div>
  );
}

export default App;
