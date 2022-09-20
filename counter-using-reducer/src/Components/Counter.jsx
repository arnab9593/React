import { useReducer, useState } from "react"
import reducer from "./IncrementDecrement";
import { increment_amount } from "./Action";
import { decrement_amount } from "./Action";
import { reset_amount } from "./Action";
import { incrementByValue } from "./Action";
import { decrementByValue } from "./Action";

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        isAuth: true,
        todos: []
    });
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <h3>Count:{state.count}</h3>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))}></input>
            <button onClick={() => dispatch(increment_amount)}>Increment By 1000</button>
            <button disabled={state.count < 1000} onClick={() => dispatch(decrement_amount)}>Decrement By 1000</button>
            <button onClick={() => dispatch(incrementByValue(inputValue))}>Increment By Value</button>
            <button disabled={state.count === 0 && inputValue == null} onClick={() => dispatch(decrementByValue(inputValue))}>Decrement By Value</button>
            <button onClick={() => dispatch(reset_amount)}>RESET</button>
        </>
    )

}

export default Counter

