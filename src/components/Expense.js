import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { delete_Expense } from "../actions";

function Expense(props) {
  return (
    <div>
      {props.expenses.map((expense, index) => (
        <div className=" bg-yellow-300  w-1/2 h-1/2 my-5  flex flex-col mx-auto rounded shadow">
          <div className="flex">
            <span
              className=" self-start font-bold mr-auto ml-5 mt-3 text-xl"
              key={index}
            >
              Title :{expense.message}
            </span>
            <span className=" ml-auto mr-5 mt-3 font-semibold" key={index}>
              {expense.amount}
            </span>
          </div>
          <div className="mr-auto ml-4 mt-3">
            <p key={index}>Description :{expense.description}</p>
          </div>
          <div className="mb-4 mr-auto ml-4 mt-3" key={index}>
            Date :{expense.date}
          </div>

          <button
            onClick={() => props.dispatch(delete_Expense(expense.id))}
            className=" bg-red-600 w-1/4 py-2 my-4 ml-auto mr-5 shadow-xl rounded"
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.expenses.data,
  description: state.expenses.description,
  amount: state.expenses.amount,
  date: state.expenses.date,
});

export default connect(mapStateToProps)(Expense);
