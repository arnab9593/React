import { useState } from 'react';

//this fx is for post the data to the json server
const addTodos = (todo) => {
    return fetch('https://stormy-ravine-55039.herokuapp.com/api/todo', {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(todo)
    }).then(res => res.json());
}

//this is the main fx
const Addtodo = () => {
    const [todo, setTodo] = useState("");

    //this fx for getting the value from the input box
    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    //this fx to add new data to the list in the form of object 
    const handleAdd = () => {
        const items = {
            title: todo,
            status: false,
            id: Date.now()
        }
        //this fx is sending the data to the setver after getting the data from the user 
        //and set it to 'todo' in the key name of items
        addTodos(items).then(res => {
            res.json()
        })
    }
    console.log(todo);

    return (
        <div >
            <input className = 'inputForm' type="text" value={todo} placeholder="Enter task name" onChange={handleChange}></input>
            <button className = 'inputSubmit' onClick={handleAdd}>ADD</button>
        </div>
    )

}

export default Addtodo
