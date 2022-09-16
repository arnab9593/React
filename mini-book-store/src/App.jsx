import React from "react";
import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";

function App() {

  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
  }


  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={handleToggle}>{toggle ? 'Non-Fiction Books' : 'Fictional Books'}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {
          toggle ? <Fiction /> : <NonFiction />
        }
      </div>
    </div>
  );
}

export default App;
