import React from "react";

export default function Navbar({ setView }) {
  return (
    <div className="text-primary sticky top-0 z-50 text-3xl font-body border-b border-gray-100 flex flex-row justify-between pt-10 h-26 bg-slate-100 w-full">
      {" "}
      <div>
        <div className="ml-3 text-5xl font-body">INOMU</div>
      </div>
      <ul className="flex flex-row self-stretch">
        <li
          className="ml-4 text-2xl hover:underline hover:cursor-pointer"
          onClick={() => setView("feed")}
        >
          Home
        </li>
        <li className="ml-4 text-2xl hover:underline hover:cursor-pointer">
          My cocktails
        </li>
        <li className="ml-4 text-2xl hover:underline hover:cursor-pointer">
          {" "}
          Favorites
        </li>
      </ul>
      <div className="flex flex-row pr-4">
        <div className=" text-2xl hover:underline hover:cursor-pointer">
          Login
        </div>
        <div className="  text-2xl ml-3 hover:underline hover:cursor-pointer">
          Sign up
        </div>
      </div>
    </div>
  );
}
