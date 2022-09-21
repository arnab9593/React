import { NavLink } from "react-router-dom";
import styles from "./style.module.css"
const links = [
    {
        path: "/",
        title: "Home",
    },

    {
        path: "/allproduct",
        title: "AllProduct",
    },

    {
        path: "/user",
        title: "User",
    }
];

function Navabr() {
    return (
        <div>
            {
                links.map((link) => (
                    <NavLink className={({ isActive }) =>
                        isActive ? styles.active : styles.default} key={link.path} to={link.path}>{link.title}</NavLink>
                ))
            }

        </div>
    )
}
export default Navabr;