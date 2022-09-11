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
  console.log("welcome to React world");

  return (
    <div className="App">
      <header className="App-header">
        <h3>It will display how many times count button has been clicked in the title of the page</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Count : {count}</h1>
        <button onClick={increment}>Increment</button>
      </header>
    </div>
  );
}

export default App;
