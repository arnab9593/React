import React, { useEffect, useState } from 'react'
const getData = ({ page }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then(res => {
        return res.json();
    })
}

const Todo = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const handelApi = async (page = 1) => {
        try {
            setLoading(true)
            const data = await getData({ page })
            setPost(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }
    useEffect(() => {
        handelApi(page)
    }, [page])
    if (loading) {
        return <h2>Loading....</h2>
    }
    const onClick = (change) => {
        setPage(change + page)
    }
    return (
        <div>
            {post.map(item => (
                <p key={item.id}>{item.id} - {item.title}</p>
            ))}
            <button disabled={page === 1} onClick={() => onClick(-1)}>Pre</button>
            <button>{page}</button>
            <button onClick={() => onClick(1)}>Next</button>
        </div>
    )
}

export default Todo