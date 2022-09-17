import logo from './logo.svg';
import './App.css';
import Theme from './Components/Theme';
import Form from './Components/Forms';
import Footer from './Components/Footer';
import { ThemeContext } from './Context/ThemeContextProvider';
import { useContext } from 'react'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className="App">
      <button onClick={toggleTheme} style={theme === "light" ? {
        background: "black",
        color: "white",
        border: "none",
        padding: "5px",
      } : {
        background: "teal",
        color: "black",
        border: "none",
        padding: "5px",
      }
      }>CHANGE THEME</button>
      <Theme />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
