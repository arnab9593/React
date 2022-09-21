import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function getUser(id) {
    return fetch("http://localhost:5000/products/" + id).then((res) => res.json());
}

function ProductPage() {
    const [data, setData] = useState({});
    const params = useParams();
    useEffect(() => {
        getUser(params.id).then((res) => {
            setData(res);
        }).catch(error => {
            console.log(error);
        })
    }, [params.id]);
    return (
        <div>
            {data.name == undefined ? <Link to={"/allproduct"}>
                <img src="https://stores.lifestylestores.com/VendorpageTheme/Enterprise/EThemeForLifestyleUpdated/images/product-not-found.jpg" alt="Product not found" /></Link> :
                <div> <h1>USER ID: {params.id}</h1>
                    <div>
                        <img src={data.image} width="100px" alt={data.image} />
                        <h3>Name: {`${data.name}`}</h3>
                        <h3>Price: {data.price}</h3>
                        <p>Des: {data.description}</p>
                    </div>

                    <Link to="/allproduct">GO Back</Link>
                </div>
            }
        </div>
    );
}

export default ProductPage;