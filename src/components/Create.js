import React, { useState } from "react";

import { connect } from "react-redux";
import { add_Expense } from "../actions/index";
import { add_Description } from "../actions/index";

function Create(props) {
  const inputStyle = " border border-opacity-100 border-black mx-4";

  return (
    <div className="  mx-10 my-10 ">
      <span className=" font-bold text-xl"> Create</span>
      <div className=" items-center">
        <form
          className="flex flex-col w-1/2 items-center"
          onSubmit={(e) => {
            e.preventDefault();
            let title = e.target.title.value;
            // props.dispatch(add_Expense(title));
            // console.log(title);
            let description = e.target.description.value;
            // props.dispatch(add_Expense(description));
            let amount = e.target.amount.value;
            // props.dispatch(add_Expense(amount));
            let date = e.target.date.value;
            props.dispatch(add_Expense(title, description, amount, date));
          }}
        >
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
              // value={expense.description}
              // onChange={changeExpense}
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
              // value={expense.amount}
              // onChange={changeExpense}
              className={inputStyle}
            ></input>
          </div>
          <div className=" mb-4">
            <label for="createdat" className=" mx-1">
              CreatedAt
            </label>
            <input
              type="text"
              id="date"
              name="date"
              // value={expense.date}
              // onChange={changeExpense}
              className={inputStyle}
            ></input>
          </div>
          <div>
            <input
              type="submit"
              value="ADD"
              // onClick={clickHandler}
              className=" bg-black text-white px-6 py-2 mx-4"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect()(Create);
