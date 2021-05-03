import React, { useState } from "react";
import Form from "./form";
// import Create from "./Create";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { delete_Expense } from "../actions/index";

function Edit(props) {
  const inputStyle = " border border-opacity-100 border-black mx-4";

  return (
    <div className="  mx-10 my-10 ">
      <span className=" font-bold text-xl"> Edit</span>
      <div className=" items-center">
        <form className="flex flex-col w-1/2 items-center">
          <div className=" my-4">
            <label for="title" className="mx-6">
              Tilte
            </label>

            <input
              type="text"
              id="tilte"
              name="title"
              className={inputStyle}
            ></input>
          </div>
          <div>
            <label for="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              className={inputStyle}
            ></input>
          </div>
          <div className=" my-4">
            <label for="amount" className="mx-3">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              className={inputStyle}
            ></input>
          </div>
          <div className=" mb-4">
            <label for="createdat" className=" mx-1">
              CreatedAt
            </label>
            <input
              type="text"
              id="createdat"
              name="createdat"
              className={inputStyle}
            ></input>
          </div>
          <div>
            <input
              type="submit"
              value="ADD"
              className=" bg-black text-white px-6 py-2 mx-4"
            ></input>

            <button className={`inline-block border-black border px-5 py-2 `}>
              {" "}
              DELETE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
