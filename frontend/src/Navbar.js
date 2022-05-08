import React from "react";

export default function Navbar() {
  return (
    <div className="text-primary text-3xl font-body border-b border-gray-100 flex flex-row justify-between pt-6 pb-1 bg-slate-100">
      {" "}
      <div className="ml-3">INOMU</div>
      <ul className="flex flex-row self-stretch">
        <li className="ml-4 text-2xl">Home</li>
        <li className="ml-4 text-2xl">My cocktails</li>
        <li className="ml-4 text-2xl"> Favorites</li>
      </ul>
      <div className="flex flex-row pr-4">
        <div className=" text-2xl">Login</div>
        <div className="  text-2xl ml-3">Sign up</div>
      </div>
    </div>
  );
}
