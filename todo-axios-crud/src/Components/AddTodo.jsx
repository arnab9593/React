import React from "react"
import { useState } from "react";


function AddTodo({ handleAddTodo }) {
    const [text, setText] = useState('')
    return (
        <div>
            <input type="text" placeholder="Addtext" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => handleAddTodo(text)}>Add</button>
        </div>
    )
}

export default AddTodo