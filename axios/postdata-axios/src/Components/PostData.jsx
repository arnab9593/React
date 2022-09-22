import Axios from "axios";
import { useState } from "react";

function PostData() {

    //method 1
    // const [todo, addTodo] = useState('');

    // const addTask = () => {
    //     Axios.post(`http://localhost:3030/api/todo`, {
    //         title: todo,
    //         status: false,
    //         id: Date.now()
    //     })
    //         .then((res) => console.log(res))
    //         .catch((err) => console.log(err))

    //     addTodo("")
    // }

    // return (
    //     <>
    //         <input type="text" placeholder="Enter task" value={todo} onChange={(e) => addTodo(e.target.value)} />
    //         <button onClick={addTask}>Add</button>
    //     </>
    // )

    //method 2

    const [todo, addTodo] = useState({
        title: "",
        // name: "",
        status: false,
        id: Date.now()
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        addTodo({ ...todo, [name]: value }) //
    }

    const addTask = () => {
        Axios.post(`http://localhost:3030/api/todo`, todo)
        addTodo({ title: "" })
    }

    return (
        <>
            <input type="text" placeholder="Enter task" name="title" value={todo.title} onChange={handleChange} />
            {/* <input type="text" placeholder="Enter Name" name="name" value={todo.name} onChange={handleChange} /> */}
            <button onClick={addTask}>Add</button>
        </>
    )

}

export default PostData

//without using Api.jsx