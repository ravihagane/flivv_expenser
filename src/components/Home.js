import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Expense from "./Expense";

function Home(props) {
  const [searchTerm, setSearchterm] = useState("");
  return (
    <div>
      <div className=" flex my-10  justify-between">
        <input
          className=" border-black  border-2 border-solid py-3 pr-72 pl-5 mx-auto"
          type="text"
          name="search"
          onChange={(event) => {
            setSearchterm(event.target.value);
          }}
          placeholder="Search..."
        ></input>
        {props.expenses
          .filter((expense) => {
            if (searchTerm === "") {
              return expense;
            } else if (
              expense.message.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return expense;
            }
          })
          .map((expense, index) => {
            return (
              <ul className="title flex flex-col mx-2" key={index}>
                <li>{expense.message}</li>
                <li>{expense.description}</li>
              </ul>
            );
          })}
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

const mapStateToProps = (state) => ({
  expenses: state.expenses.data,
  description: state.expenses.description,
  amount: state.expenses.amount,
  date: state.expenses.date,
});

export default connect(mapStateToProps)(Home);
