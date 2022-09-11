import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Timer from './Components/Timer';

function App() {
  const [showTimer, displayTimer] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {showTimer && <Timer />}
        <button onClick={() => displayTimer(!showTimer)}>
          {showTimer ? "Hide Counter" : "Show Counter"}
        </button>
      </header>
    </div>
  );
}

export default App;
