
import './App.css';
import { useState } from "react";

const getData = async () => {
  try {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=20`
    );

    let data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};


function App() {
  const [posts, setPosts] = useState([]);

  const fetchAndUpdateData = async () => {
    try {
      // 1. make API call
      // 2. get the data
      const data = await getData();
      // 3. update the state "posts" with that response from server;
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <button onClick={fetchAndUpdateData}>Get Posts</button>
      <ul>
        {posts.map((postItem) => (
          <li key={postItem.id}>{postItem.title}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;
