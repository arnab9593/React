import React from "react";
import styles from "./style.module.css"
import { Link } from "react-router-dom"
export default function Errorpage() {
    return (
        <>

            <Link to={"/"}><img src="https://colorlib.com/cdn-cgi/image/width=1200,height=686,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/sites/2/404-error-page-templates.jpg" alt="Errorpage" /></Link>
        </>
    )
}