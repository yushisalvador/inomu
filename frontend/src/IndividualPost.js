import React from "react";

export default function () {
  return (
    <div key={index} className=" h-90 w-80 p-4 border-4 ml-10">
      <div className="font-medium text-xl"> {postObj.cocktail_name}</div>
      <div>
        Posted by user <span className="font-medium">{postObj.username}</span>
      </div>
      <div>
        <img src="https://i.pinimg.com/originals/b8/6f/67/b86f67625bc4f99d4b3acfd7992b3c09.png" />
      </div>
      <div className="mt-2 mb-4">
        {" "}
        <div>Ingredients : </div>
        <div>{postObj.ingredients} </div>
      </div>{" "}
      <div> Recipe :</div>
      <div>{postObj.recipe}</div>
    </div>
  );
}
