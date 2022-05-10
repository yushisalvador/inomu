import React from "react";

export default function IndividualPost({ setView, postData, selectedPost }) {
  return (
    <div>
      <div onClick={() => setView("feed")}>back</div>
      <div className="font-medium text-xl">
        {" "}
        {postData[selectedPost].cocktail_name}
      </div>
      <div>
        Posted by user{" "}
        <span className="font-medium">{postData[selectedPost].username}</span>
      </div>
      <div>
        <img src={postData[selectedPost].image} />
      </div>
      <div className="mt-2 mb-4">
        {" "}
        <div>Ingredients : </div>
        <div>{postData[selectedPost].ingredients} </div>
      </div>{" "}
      <div> Recipe :</div>
      <div>{postData[selectedPost].recipe}</div>
    </div>
  );
}
