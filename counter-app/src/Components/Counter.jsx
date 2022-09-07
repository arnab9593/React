import { useState } from "react";
function Counter() {
    const [amt, setAmt] = useState(0);
    const handleDep = () => {
        setAmt(amt + 100);
    }
    const handleWith = () => {
        setAmt(amt - 100);
    }
    return (
        <>
            <h1>Count : {amt}</h1>
            <button onClick={handleDep}>INCREMENT</button>
            <button onClick={handleWith} disabled={amt === 0}>DECREMENT</button>
        </>
    )
}

export default Counter