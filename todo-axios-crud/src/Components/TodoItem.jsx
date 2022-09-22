import React from "react"

function TodoItem({ handleDelete, title, id, status, handleToggle }) {
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <button onClick={() => handleToggle(id, !status)}>
                {status ? 'Done' : 'Not Done'}
            </button>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default TodoItem
