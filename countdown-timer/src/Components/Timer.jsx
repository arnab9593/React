import { useEffect, useState, useRef } from "react";

const fixTimeString = (time) => (time < 10 ? `0${time}` : time);

const formatTimeToString = (time) => {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const outputString = `00:${fixTimeString(minutes)}:${fixTimeString(seconds)}`;
    return outputString;
};

const Timer = () => {

    const [timer, setTimer] = useState(0)
    const ref = useRef(null);

    useEffect(() => {
        const cleanup = () => {
            stopTimer();
        };
        return cleanup;
    }, []);



    //start timer fx
    const startTimer = () => {
        if (ref.current !== null) {
            return;
        }
        ref.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1)
        }, 1000);
    }

    //stop timer fx
    const stopTimer = () => {
        clearInterval(ref.current);
        ref.current = null;
    }

    //reset timer
    const resetTimer = () => {
        setTimer(0)
        stopTimer()
    }

    //to display in title
    useEffect(() => {
        document.title = formatTimeToString(timer)
    })

    return (
        <div>
            <h2>{formatTimeToString(timer)}</h2>
            <button onClick={startTimer}>START</button>
            <button onClick={stopTimer}>STOP</button>
            <button onClick={resetTimer}>RESET</button>
        </div>
    )

}
export default Timer;