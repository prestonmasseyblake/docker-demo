import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import React, {useEffect, useState} from 'react'

function App() {
  const [mode, setMode] = useState(false);


  function toggleMode(){
    console.log("calling this function");
    setMode(!mode);
  }

  return (
    <div className={`App { ${mode == true ? "dark-bg" : "white-bg" } ` }>
        <Home toggleMode={toggleMode} mode={mode} />
    </div>
  );
}

export default App;
