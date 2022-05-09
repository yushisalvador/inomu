import React, { useState } from "react";

export default function Feed({ postData }) {
  if (postData !== null) {
    return (
      <div>
        <div className="font-bold pb-2 m-12 text-center text-4xl text-primary border-b border-gray-200">
          Cocktail Feed
        </div>

        <div className="flex flex-row">
          {postData.map((post, index) => {
            const postObj = {
              username: post.username,
              cocktail_name: post.cocktail_name,
              ingredients: post.ingredients,
              recipe: post.recipe,
              posted: post.updated_at,
            };
            return (
              <div key={index} className=" h-90 w-80 p-4 border-4 ml-10">
                <div className="font-medium text-xl">
                  {" "}
                  {postObj.cocktail_name}
                </div>
                <div>
                  Posted by user{" "}
                  <span className="font-medium">{postObj.username}</span>
                </div>
                <div>
                  <img src="https://i.pinimg.com/originals/b8/6f/67/b86f67625bc4f99d4b3acfd7992b3c09.png" />
                </div>
                <div
                  onClick={() => {
                    alert("hello");
                  }}
                >
                  {" "}
                  See Recipe
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
