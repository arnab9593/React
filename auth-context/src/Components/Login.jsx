
import { useContext, useState } from "react";
import { AppContext } from "../Context/AuthContextProvider";
import Form from './Form';


const Login = () => {

    const { handleLogin } = useContext(AppContext);
    const [username, setUsername] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
        handleLogin(username);
    };
    return (
        <Form title="Login" onSubmit={onSubmit}>
            <input onChange={(event) => setUsername(event.target.value)} type='text' placeholder="Name"></input>
        </Form>
    )

}

export default Login
