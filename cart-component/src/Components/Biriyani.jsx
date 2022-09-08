import { useState } from "react";

function Biriyani({ passedData }) {

    const [count, setCount] = useState(0);
    const priceChange = (num) => {
        setCount(count + num)
        passedData(num * 90)
    }
    return (
        <div>
            <h3>Biriyani</h3>
            <h3>90</h3>
            <div>
                <button disabled={count == 0} onClick={() => priceChange(-1)}> - </button>
                <h3>{count}</h3>
                <button onClick={() => priceChange(+1)}> + </button>
            </div>
        </div>
    )

}

export default Biriyani

