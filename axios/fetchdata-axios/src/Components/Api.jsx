import axios from "axios";

export const getData = () => {
    return axios.get("http://localhost:3030/api/todo")
}

