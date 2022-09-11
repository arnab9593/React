import logo from './logo.svg';
import './App.css';
import SetTimeout from './Components/SetTimeout';
import { useEffect, useState } from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Counter with set timeout</h3>
        <SetTimeout></SetTimeout>
      </header>
    </div>
  );
}

export default App;
