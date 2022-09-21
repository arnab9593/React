import axios from "axios";

const Search = (query) => {

    if (!query) {
        return Promise.reject("Enter search parmeters")
    }
    return axios.get("https://api.github.com/search/users", {
        params: {
            q: query
        }
    })

}

export default Search
