import { useReducer } from "react"
import reducer from "./IncrementDecrement";
import { increment_amount } from "./Action";
import { decrement_amount } from "./Action";
import { reset_amount } from "./Action";

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <h3>Count:{state}</h3>
            <button onClick={() => dispatch(increment_amount)}>Increment By 1000</button>
            <button disabled={state === 0} onClick={() => dispatch(decrement_amount)}>Decrement By 500</button>
            <button onClick={() => dispatch(reset_amount)}>RESET</button>
        </>
    )

}

export default Counter

