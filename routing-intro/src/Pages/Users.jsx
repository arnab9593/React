
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const getData = ({ page }) => {
    return fetch(`https://reqres.in/api/users?page=${page}`).then(res => {
        return res.json();
    })
}

const Products = () => {

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
            {post?.data?.map((user) => (
                <div
                    key={user.id}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: '50px'
                    }}
                >
                    <img src={user.avatar} alt="prof-pic" />
                    <Link to={`/users/${user.id}`}>{user.first_name}</Link>
                </div>
            ))}
            <button disabled={page === 1} onClick={() => onClick(-1)}>Pre</button>
            <button>{page}</button>
            <button disabled={page === 2} onClick={() => onClick(1)}>Next</button>
        </div>
    )

}
export default Products