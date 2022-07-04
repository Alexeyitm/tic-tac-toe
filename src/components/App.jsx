import { useState } from 'react';
import './App.css';
import Header from './Header/Header'
import Grid from './Grid/Grid';

function App() {

  const [state, setIsState] = useState({
    1: false, 2: false, 3: false,
    4: false, 5: false, 6: false,
    7: false, 8: false, 9: false
  });

  return (
    <div className="App">
      <Header />
      <Grid state={state} setIsState={setIsState}/>
    </div>
  );
}

export default App;
