import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";


function getUsers() {
    return fetch("http://localhost:5000/products").then((res) => res.json());
}
function AllProductPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getUsers().then((res) => {
            //console.log(res);
            setData(res);
            console.log(data)
        });
    }, []);


    return (

        <>
            <table style={styles}>
                <tbody>

                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Details</th>
                    </tr>
                    {data?.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    {item.name}

                                </td>

                                <td>
                                    {item.price}

                                </td>

                                <td>
                                    <Link to={`/product/${item.id}`}>More</Link>

                                </td>

                            </tr>
                        )
                    })
                    }

                </tbody>
            </table>

        </>

    )

}


export default AllProductPage;