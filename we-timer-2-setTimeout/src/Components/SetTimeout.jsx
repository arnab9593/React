import { useEffect, useState } from "react";

function SetTimeout() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);
    return (
        <div>
            <h1>Count : {count}</h1>
        </div>
    );
}
export default SetTimeout;