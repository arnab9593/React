import React from "react";
import axios from "axios";
import { useReducer } from "react";
import { useState } from "react";
import Reducer from "./Reducer";
import GithubRow from "./GithubRow";

function fetchData(dispatch, query) {
    dispatch({ type: "Loading" })
    axios.get(`https://api.github.com/search/users?q=${query}`).then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data.items });
        console.log(res);
    }).catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR" });
    })
}

const initvalue = {
    isLoading: false,
    isError: false,
    data: []
}

function GithubReducer() {
    const [state, dispatch] = useReducer(Reducer, initvalue)
    const [query, setQuery] = useState("")

    function handleClick() {
        fetchData(dispatch, query)
    }

    if (state.isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Search Username" onChange={(e) => setQuery(e.target.value)} />
                <button type="text" onClick={handleClick}>SUBMIT</button>
            </div>

            <GithubRow datas={state.data} />
        </div>
    )
}

export default GithubReducer;