import React from "react";
import styles from "./styles.module.css"
import { ThemeContext } from "../Context/ThemeContextProvider";
import { useContext } from "react";

function Form() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme === "light" ? styles.light : styles.dark}>

            <form >
                <label htmlFor="">
                    User name:
                    <input type="text" placeholder="Enter your name" />
                </label>
                <br />
                <label htmlFor="">
                    Email:
                    <input type="text" placeholder="Enter your email" />
                </label>
                <br />
                <label htmlFor="">
                    Password:
                    <input type="text" placeholder="Enter your password" />
                </label>
            </form>
            <input type="submit" value="Submit" />

        </div>
    )
}
export default Form;