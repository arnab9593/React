import './App.css';
import './Components/components.css';
import React, { useState } from "react";
import Noodles from './Components/Noodles';
import Biriyani from './Components/Biriyani';
import Chips from './Components/Chips';

//setting state for increment or decrement of the price on clicking of buttons  

function App() {
  const [priceChange, setpriceChange] = useState(0)
  const passedData = (data) => {
    setpriceChange(priceChange + data)
  }
  return (
    <div className="App">

      {/* sending parameters in the function as price of products */}

      <Noodles passedData={passedData}></Noodles>
      <Biriyani passedData={passedData}></Biriyani>
      <Chips passedData={passedData}></Chips>
      <h3>Total {priceChange}</h3>
    </div >
  );
}

export default App;


