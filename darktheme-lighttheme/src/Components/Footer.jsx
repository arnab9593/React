
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";
import styles from "./styles.module.css"


function Footer() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme === "light" ? styles.light : styles.dark}>
            <h1>This is Footer</h1>
        </div>
    )
}
export default Footer;