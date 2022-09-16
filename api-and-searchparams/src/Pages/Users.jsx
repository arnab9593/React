import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Users = () => {

    const getData = (page) => {

        return fetch(`https://reqres.in/api/users?page=${page}`).then((res) => res.json())

    }

    const [data, setData] = useState({})
    const [page, SetPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        getData(page).then((res) => {
            // console.log((res));
            setData(res)
        }, [page])
    })

    useEffect(() => {
        setSearchParams(({ page }))
    }, [page, setSearchParams])

    return (
        <div>
            <h3>Users</h3>

            {data?.data?.map((user) =>
                <div>
                    <img src={user.avatar} alt=""></img>
                    <p><Link to={`/users/${user.id}`}>{user.first_name}</Link></p>
                </div>

            )}

            <button disabled={page === 1} onClick={() => SetPage(page - 1)}>PREVIOUS</button>
            <button>{page}</button>
            <button disabled={page === 2} onClick={() => SetPage(page + 1)}>NEXT</button>
        </div>
    )
}

export default Users