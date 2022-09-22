import { useEffect, useState } from "react"
import { getData } from "./Api"

const FetchData = () => {
    const [todos, getTodofromApi] = useState([]);

    useEffect(() => {
        getData().then((res) => getTodofromApi(res.data));
    }, []);

    return (
        <div>
            <h2>TODOS</h2>
            {todos.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    )

}

export default FetchData
