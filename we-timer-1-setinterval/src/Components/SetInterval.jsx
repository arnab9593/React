import { useEffect, useState } from "react"
function SetInterval() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);
    return (
        <div>
            <h1>Counter : {count}</h1>
        </div>
    );
}
export default SetInterval;