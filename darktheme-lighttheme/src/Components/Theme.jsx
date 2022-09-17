import { ThemeContext } from "../Context/ThemeContextProvider";
import { useContext } from "react";
import styles from "./styles.module.css";


function Theme() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div className={theme === "light" ? styles.light : styles.dark}>
            <h1>The Theme is {theme}</h1>
        </div>
    )

}
export default Theme;