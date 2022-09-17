import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Status from './Components/Status';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login></Login>
        <Status></Status>
      </header>
    </div>
  );
}

export default App;
