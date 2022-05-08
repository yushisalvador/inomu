import React, { useState } from "react";

export default function NewPost() {
  const [button, setShowButton] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const hideForm = () => {
    setShowForm(false);
    setShowButton(true);
  };
  const hideButton = () => {
    setShowForm(true);
    setShowButton(false);
  };

  return (
    <div className=" flex justify-center">
      {showForm ? (
        <div className="flex flex-col bg-slate-100 p-10 mt-4">
          <form>
            <div className="flex flex-col mb-4">
              <label>Username </label>
              <input type="text" className="border border-red-600 " />
            </div>
            <div className="flex flex-col mb-4">
              <label>Drink Name </label>
              <input type="text" className="border border-red-600" />
            </div>
            <div className="flex flex-col mb-4">
              <label>Description </label>
              <textarea className="border border-red-600 " />
            </div>
            <div className="flex flex-col mb-4">
              <label>Recipe </label>
              <textarea className="border border-red-600 " />
            </div>
          </form>
          <button className="border  border-red-600 px-10 py-2 mt-2">
            {" "}
            Post
          </button>
          <button
            className="border  border-red-600 px-10 py-2 mt-2"
            onClick={hideForm}
          >
            {" "}
            Cancel
          </button>
        </div>
      ) : null}

      {button ? (
        <div>
          <button
            className="border-solid border-2 border-primary p-3 rounded-lg mt-5"
            onClick={hideButton}
          >
            ADD NEW COCKTAIL
          </button>
        </div>
      ) : null}
    </div>
  );
}
