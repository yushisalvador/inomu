import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Feed from "./Feed";
import NewPost from "./NewPost";
import axios from "axios";
import IndividualPost from "./IndividualPost";
import Banner from "./Banner";

function App() {
  const [postData, setPostData] = useState(null);
  const [view, setView] = useState("feed");
  const [selectedPost, setSelectedPost] = useState([][0]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/posts");
    console.log(response.data);
    setPostData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Banner />
      <NewPost />
      <div>
        {view === "feed" ? (
          <Feed
            postData={postData}
            setSelectedPost={setSelectedPost}
            setView={setView}
          />
        ) : view === "single" ? (
          <IndividualPost
            setView={setView}
            postData={postData}
            selectedPost={selectedPost}
            setSelectedPost={setSelectedPost}
          />
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
}

export default App;
