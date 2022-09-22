import axios from "axios";

export function getTodo() {
    return axios.get(`http://localhost:5000/posts`)
}

export function addTodo({ title, status }) {
    return axios({
        url: `http://localhost:5000/posts`,
        method: "post",
        data: { title, status }
    })
}

export function deleteTodo(id) {
    return axios({
        url: `http://localhost:5000/posts/${id}`,
        method: "delete"
    })
}

export function toggleTodo({ id, newStatus }) {
    return axios({
        url: `http://localhost:5000/posts/${id}`,
        method: "patch",
        data: { status: newStatus }
    })
}

