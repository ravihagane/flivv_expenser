import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className=" flex justify-between border-b-2 h-16 items-center">
        <span className=" px-10 text-xl font-serif  font-bold">
          FlivvExpenser
        </span>
        <ul className=" flex items-center px-10 font-semibold">
          <Link to="/">
            <li className=" px-5">Home</li>
          </Link>
          <Link to="/Create">
            <li>Create</li>
          </Link>
          <Link to="/edit">
            <li className="px-5">Edit</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
