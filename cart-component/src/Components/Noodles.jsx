import { useState } from "react";

function Noodles({ passedData }) {

    const [count, setCount] = useState(0);
    const priceChange = (num) => {
        setCount(count + num)
        passedData(num * 30)
    }
    return (
        <div>
            <h3>Noodles</h3>
            <h3>30</h3>
            <div>
                <button disabled={count == 0} onClick={() => priceChange(-1)}> - </button>
                <h3>{count}</h3>
                <button onClick={() => priceChange(+1)}> + </button>
            </div>
        </div>
    )

}

export default Noodles

