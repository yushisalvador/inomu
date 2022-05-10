import React, { useState } from "react";

export default function Feed({ postData, setSelectedPost, setView }) {
  if (postData !== null) {
    return (
      <div>
        <div className="font-bold pb-2 m-10 text-center text-4xl text-primary border-b border-gray-200">
          Cocktail Feed
        </div>

        <div className="flex flex-row flex-wrap justify-center ">
          {postData.map((post, index) => {
            const postObj = {
              username: post.username,
              image: post.image,
              cocktail_name: post.cocktail_name,
              ingredients: post.ingredients,
              recipe: post.recipe,
              posted: post.updated_at,
            };
            return (
              <div key={index} className=" h-90 w-80 p-4 border-4 ml-10 mt-20">
                <div className="font-medium text-xl ">
                  {" "}
                  {postObj.cocktail_name}
                </div>
                <div>
                  Posted by user{" "}
                  <span className="font-medium">{postObj.username}</span>
                </div>
                <div>
                  <img src={postObj.image} alt="cocktail" />
                </div>
                <div
                  onClick={() => {
                    setSelectedPost(index);
                    setView("single");
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
