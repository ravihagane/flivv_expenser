import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import Header from "./Header";
import Expense from "./Expense";

export default function Home() {
  return (
    <div>
      <div className=" flex my-10  justify-between">
        <input
          className=" border-black  border-2 border-solid py-3 pr-72 pl-5 mx-auto"
          type="text"
          name="search"
          placeholder="Search..."
        ></input>
        <div className=" flex ">
          <div className=" mx-4 font-bold">
            Total :<span>$300</span>
          </div>
          <div className="mx-6 font-bold text-blue-500">
            Threshold :<span>$500</span>
          </div>
        </div>
      </div>
      <Expense />
    </div>
  );
}
