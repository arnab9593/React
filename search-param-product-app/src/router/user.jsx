import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";


function getData(text) {
    return fetch(`http://localhost:5000/products?name=${text}`).then((res) => res.json())
}



function User() {
    const [searchParams, setSearchParams] = useSearchParams()
    const initialText = searchParams.get('text') || 'Watch'
    const [data, setData] = useState([]);
    const [text, setText] = useState(initialText)

    // for searchParams
    useEffect(() => {
        setSearchParams({ text })
    }, [text])

    // at mounting phase
    useEffect(() => {
        handleSubmit();
    }, [])

    function handleSubmit() {

        getData(text).then((res) => {
            console.log(res);
            setData(res);
        }

        )
    }



    return (
        <>
            <input type="text" name="" placeholder="search something" onChange={(e) => setText(e.target.value)} />
            <input type="submit" value="submit" onClick={handleSubmit} />


            {data.map((item) => {

                return <div key={item.id}>
                    <img src={item.image} width="100px" alt={item.image} />
                    <h3>Name: {`${item.name}`}</h3>
                    <h3>Price: {item.price}</h3>

                </div>
            })}


        </>
    )
}
export default User;