import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Feed from "./Feed";
import NewPost from "./NewPost";
import axios from "axios";

function App() {
  const [postData, setPostData] = useState(null);
  const [singleView, setSingleView] = useState("preview");
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/posts");
    console.log(response.data);
    setPostData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <NewPost />
      <div>
        <Feed postData={postData} />
      </div>
    </div>
  );
}

export default App;
