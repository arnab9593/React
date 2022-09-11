function TodoItem(props) {
    const { id, title, status, handleToggle, handleDelete } = props
    return (
        <li>
            {/* <h1>{title}</h1> */}
            {title} - {status ? "Completed" : "Not Completed"}
            <button onClick={() => handleToggle(id)}>TOGGLE</button>
            <button onClick={() => handleDelete(id)}>DELETE</button>
        </li>
    );
}

export default TodoItem;
