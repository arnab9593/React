
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const getCurrentPageUrl = (value) => {
    value = Number(value);
    if (typeof value === 'number' && value <= 0) {
        value = 1;
    }
    if (!value) {
        value = 1;
    }
    return value;
};

function getUrl(url, sort, orderBy, filterBy) {

    if (sort && orderBy && filterBy) {
        url = `${url}&_sort=${sort}&_order=${orderBy}&category=${filterBy}`;
    }
    else if (sort && orderBy) {
        url = `${url}&_sort=${sort}&_order=${orderBy}`
    }
    else if (filterBy) {
        url = `${url}&category=${filterBy}`
    }

    return url;
}

const Products = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = React.useState([]);
    const [totalCount, setTotalCount] = React.useState(0)
    const [page, setPage] = React.useState(getCurrentPageUrl(searchParams.get("page")) || 1);
    const [orderBy, setOrderBy] = React.useState("");
    const limit = 6;
    const sort = 'price';
    const [filterBy, setFilterBy] = React.useState("")

    React.useEffect(() => {

        let apiUrl = getUrl(
            `http://localhost:3030/api/products?_page=${page}&_limit=${limit}`,
            sort,
            orderBy,
            filterBy
        );

        fetch(apiUrl)
            .then((res) => {
                setTotalCount(Number(res.headers.get("X-Total-Count")));
                return res.json()
            })
            .then((res) => {
                setData(res)
            })
    }, [page, orderBy, filterBy]);

    React.useEffect(() => {
        let paramsObj = { page };
        if (orderBy) {
            paramsObj.orderBy = orderBy
        }

        if (filterBy) {
            paramsObj.filterBy = filterBy
        }

        setSearchParams(paramsObj)
    }, [page, orderBy, filterBy])

    return (
        <div>
            <div style={{
                marginTop: '20px'
            }}>
                <button onClick={() => setOrderBy("asc")}>Sort Price By Ascending</button>
                <button onClick={() => setOrderBy("desc")}>Sort Price By Descending</button>
                <button onClick={() => setOrderBy("")}>Reset</button> <br></br>
                <button onClick={() => setFilterBy("jewellery")}>Filter By Jewellery</button>
                <button onClick={() => setFilterBy("electronics")}>Filter By Electronics</button>
                <button onClick={() => setFilterBy("clothing")}>Filter By Clothing</button>
                <button onClick={() => setFilterBy("")}>Reset</button>
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                width: "80%",
                margin: "auto",
                gap: '20px',
                marginTop: '20px'
            }}>
                {data?.map((prod) => (
                    <div key={prod.id} style={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: '1px solid gray',
                        padding: '10px'
                    }}>
                        <img src={prod.image} alt="prod-img" height={100} width={100}></img>
                        <p>{prod.title}</p>
                        <p>{prod.price}</p>
                        <Link to={`/products/${prod.id}`}>More Details</Link>
                    </div>
                ))}
            </div>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Pre</button>
            <button>{page}</button>
            <button disabled={page === Math.ceil(totalCount / limit)} onClick={() => setPage(page + 1)}>Next</button>
        </div>
    )
}

export default Products

