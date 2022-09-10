import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  console.log("hello world");
  useEffect(() => {
    document.title = `You clicked ${count} times`
  },);
  console.log(count);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Count : {count}</h1>
        <button onClick={increment}>Increment</button>
      </header>
    </div>
  );
}

export default App;
