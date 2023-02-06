import React, { useEffect, useState } from 'react'

const getData = () => {
    return fetch(`https://itchy-coveralls-ox.cyclic.app/api/cakes`).then(res => {
        return res.json();
    })
}

function Home() {
    const [postData, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleApi = async () => {
        try {
            setLoading(true)
            const data = await getData();
            console.log(data);
            setData(data[0]);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e.message);
        }
    }

    useEffect(() => {
        handleApi()
    }, []);
    if (loading) {
        return <p>Loading..</p>
    }
    return (
        <>
            <div>
                {postData && postData.map(item => (
                    <div>
                        <img src={item.img} alt={`${item.name} image not found`}></img>
                        <p key={item.id}>{item.name}</p>
                        <p>$ {item.price}</p>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Home