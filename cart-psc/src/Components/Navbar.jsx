import React from "react";
import { Link } from "react-router-dom";

const links = [
    { path: '/', title: "Home" },
    { path: '/about', title: "About" },
    { path: '/contact', title: "Contact" },
    { path: '/products', title: "Products" },
    { path: '/login', title: "Login" },
];

const Navbar = () => {
    return (
        <div style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        }}>
            {links.map((link) => (
                <Link key={link.path} to={link.path}>{link.title}</Link>
            ))}
        </div>
    )

}

export default Navbar
