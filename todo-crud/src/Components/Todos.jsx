import { useState, useEffect } from "react";
import Addtodo from "./Addtodo";


const getData = ({ page }) => {
    return fetch(`https://stormy-ravine-55039.herokuapp.com/api/todo?_limit=5&_page=${page}`).then(res => {
        return res.json();
    })
}

//delete todo fx to server
const deleteTodo = (id) => {
    return fetch(`https://stormy-ravine-55039.herokuapp.com/api/todo/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },

    }).then(res => res.json());
}

//toggle todo fx to server
const toggleTodo = (id, status) => {
    return fetch(`https://stormy-ravine-55039.herokuapp.com/api/todo/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ status: !status })
    }).then(res => res.json());
}

const Todos = ({ handleDelete, handleToggle, id, status }) => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const handleApi = async (page = 1) => {
        try {
            setLoading(true);
            const data = await getData({ page });
            setPost(data);
            setLoading(false);

        } catch (err) {
            setLoading(false);
            console.log(err);

        }
    }

    useEffect(() => {
        handleApi(page)
    }, [page])

    if (loading) {
        return <h2>Loading...</h2>
    }

    const onClick = (change) => {
        setPage(change + page)
    }

    //delete todo fx
    handleDelete = async (id) => {
        // console.log(id);
        await deleteTodo(id);
    }

    handleToggle = async (id, status) => {
        await toggleTodo(id, status)
    }

    return (
        <div>
            <Addtodo></Addtodo>
            {post.map(item => (
                <>
                    <div className="showDataDiv">
                        <li key={item.id}>
                            {/* {item.title} */}
                            {item.title} - {item.status ? "Completed" : "Not Completed"}

                        </li>
                    </div>
                    <button className="delteBtn" onClick={() => handleDelete(item.id)}>Delete</button>
                    <button className="toggleBtn" onClick={() => handleToggle(item.id, item.status)}>Toggle</button>

                </>

            ))}
            <div>
                <button onClick={() => onClick(-1)}>Previous</button>
                <button>{page}</button>
                <button onClick={() => onClick(1)}>Next</button>
            </div>

        </div>
    )

}

export default Todos