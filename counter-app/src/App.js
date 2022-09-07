import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Counter from './Components/Counter';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>

    </div>
  );
}

export default App;