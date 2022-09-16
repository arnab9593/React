import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar';
// import { Form } from 'react-router-dom';
import AllRoutes from './Pages/AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
    </div>
  );
}

export default App;
