import React from "react";

export default function IndividualPost({ setView, postData, selectedPost }) {
  return (
    <div>
      <div className="text-left m-10" onClick={() => setView("feed")}>
        back
      </div>
      <div className="flex flex-col items-center">
        <div className="font-medium text-2xl">
          {" "}
          {postData[selectedPost].cocktail_name}
        </div>
        <div>
          Posted by user{" "}
          <span className="font-medium">{postData[selectedPost].username}</span>
        </div>
        <div className="flex flex-row justify-center">
          <img
            src={postData[selectedPost].image}
            className="w-96 "
            alt="cocktail"
          />
        </div>
        <div className="mt-2 mb-4 w-2/4">
          {" "}
          <div>Ingredients : </div>
          <div>{postData[selectedPost].ingredients} </div>
        </div>{" "}
        <div className="w-2/4">
          <div> Recipe :</div>
          <div>{postData[selectedPost].recipe}</div>
        </div>
      </div>
    </div>
  );
}
