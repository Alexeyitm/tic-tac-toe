import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header'
import Grid from './Grid/Grid';

function App() {

  const [state, setIsState] = useState({
    0: '', 1: '', 2: '',
    3: '', 4: '', 5: '',
    6: '', 7: '', 8: ''
  });

  useEffect(() => {
  }, [state])

  return (
    <div className="App">
      <Header />
      <Grid state={state} setIsState={setIsState}/>
    </div>
  );
}

export default App;
