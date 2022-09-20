import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css";
const links = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/login",
        title: "Login"
    },
    {
        path: "/dashboard",
        title: "Dashboard"
    },
    {
        path: "/settings",
        title: "Settings"
    }
];


const Navbar = () => {
    return (
        <div>
            {links.map((link) => (
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.default
                    }
                    key={link.path}
                    to={link.path}
                >
                    {link.title}
                </NavLink>
            ))}
        </div>
    )
}

export default Navbar