import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { addTodo, getTodo, toggleTodo, deleteTodo } from "./Api";
import TodoItem from "./TodoItem";

function Todos() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        handleGetTodo()
    });

    //fx to get data
    function handleGetTodo() {
        // setLoading(true);
        //  setError(false);
        getTodo().then((res) => {
            setData(res.data);
            setLoading(false)
        }).catch((err) => {
            console.log(err);
            setLoading(false);
            setError(true)
        })

    }

    //fx to add 
    function handleAddTodo(title) {
        addTodo({
            title,
            status: false
        }).then((res) => {
            handleGetTodo()
        })
    }

    function handleDelete(id) {
        setLoading(true);
        deleteTodo(id).then((res) => {
            handleGetTodo()
        })
    }

    function handleToggle(id, newStatus) {
        setLoading(true);
        toggleTodo({ id, newStatus }).then((res) => {
            handleGetTodo()
        })
    }


    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <AddTodo
                handleAddTodo={handleAddTodo}
            />
            {data.map((item) => (
                <div key={item.id}>
                    <TodoItem
                        key={item.id}
                        title={item.title}
                        id={item.id}
                        status={item.status}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
            ))}

        </div>
    )

}

export default Todos