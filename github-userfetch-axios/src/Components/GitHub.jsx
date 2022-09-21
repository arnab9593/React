import { useState, useEffect } from "react";
import '../App.css';
import Search from "./Search";
const GitHub = () => {

    const [query, setQuery] = useState("")
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(false)
        Search("").then((res) => {
            setUser(res.data.items);
        })
    }, [])

    const handleSearch = () => {
        setLoading(true)
        Search(query).then((res) => {
            setUser(res.data.items)
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            <h2>Git Hub</h2>
            <div>
                <input type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)}></input>
                <button onClick={handleSearch} disabled={loading}>{loading ? "Loading" : "Search"}</button>
            </div>
            <div >
                {user?.map((item) => (
                    <div className="userDiv" key={item.id}>
                        {item.login}
                        <img src={item.avatar_url}></img>
                    </div>
                ))}
            </div>
        </>
    )

}

export default GitHub
