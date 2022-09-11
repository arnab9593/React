import { useState, useEffect } from "react";

function Timer() {
    const [time, setTimer] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setTimer((prevTime) => prevTime + 1)
        }, 1000)
        const cleanTimer = () => {
            clearInterval(id);
        }
        return cleanTimer
    }, [])

    return (
        <>
            <h3>Timer:{time}</h3>
        </>
    )

}

export default Timer
