import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Feed from "./Feed";
import NewPost from "./NewPost";

function App() {
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
