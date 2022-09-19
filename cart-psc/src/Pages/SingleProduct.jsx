import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import React from "react";

// http://localhost:3030/api/products?id=${products_id}

const SingleProduct = () => {

    const getData = (url) => {
        return fetch(url).then((res) => res.json())
    }

    const { products_id } = useParams();

    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        getData(`http://localhost:3030/api/products?id=${products_id}`).then((res) => {
            setProductDetails(res)
            // console.log(res.id);
        }
        ).catch((err) => {
            console.log(err);
        })

    }, [products_id])
    console.log(productDetails[0]);
    return (
        <div key={productDetails.id} >
            {/* <h2>Single Product</h2>
            <img src={productDetails.image} alt='error'></img>
            <p>{productDetails.title}</p> */}
            {productDetails && productDetails.map((item) =>
                <div>
                    <img src={item.image} alt="error"></img>
                    <p></p>
                </div>

            )}
        </div>

    )
}

export default SingleProduct
