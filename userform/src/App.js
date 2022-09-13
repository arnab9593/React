import logo from './logo.svg';
import './App.css';
import Userform from './Components/Userform'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Userform />
      </header>
    </div>
  );
}

export default App;
