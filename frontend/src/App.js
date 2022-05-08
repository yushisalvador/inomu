import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Feed from "./Feed";
import NewPost from "./NewPost";
import axios from "axios";

function App() {
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/posts");
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <NewPost />
      <div>
        <Feed />
      </div>
    </div>
  );
}

export default App;
