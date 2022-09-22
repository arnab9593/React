import axios from "axios"

export const addTodo = (data = {}) => {
    return axios.post(`http://localhost:3030/api/todo`, {
        title: data.title,
        status: fasle,
        id: Date.now()
    })
}