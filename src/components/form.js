import React, { useState } from "react";
// import Expense from "./Expense";
// import { useDispatch, useSelector, UseSelector } from "react-redux";

const inputStyle = " border border-opacity-100 border-black mx-4";

export default function Form(props) {
  const [expense, setExpense] = useState({
    title: "",
    description: "",
    amount: "",
    date: "",
  });

  const clickHandler = (e) => {
    e.preventDefault();
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  const changeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  return (
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
            value={expense.title}
            onChange={changeExpense}
            className={inputStyle}
          ></input>
        </div>
        <div>
          <label for="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={expense.description}
            onChange={changeExpense}
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
            value={expense.amount}
            onChange={changeExpense}
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
            value={expense.date}
            onChange={changeExpense}
            className={inputStyle}
          ></input>
        </div>
        <div>
          <input
            type="submit"
            value={props.buttonName}
            onClick={clickHandler}
            className=" bg-black text-white px-6 py-2 mx-4"
          ></input>
          <button
            className={`inline-block border-black border px-5 py-2 ${props.display}`}
          >
            {" "}
            DELETE
          </button>
        </div>
      </form>
    </div>

    //   <form>
    //      <label for="fname">First name:</label>
    //      <input type="text" id="fname" name="fname" value="John">
    //       <label for="lname">Last name:</label>
    //      <input type="text" id="lname" name="lname" value="Doe">
    //     </form>
  );
}

// const Expenses = () => {
//   const expenses = useSelector((state) => state.expenses);
//   if (!expenses || !expenses.length) {
//     return <div></div>;
//   }
//   return (
//     <div>
//       {expenses.map((expense) => (
//         <Expense></Expense>
//       ))}
//     </div>
//   );
// };

// const ExpenseInput = (props) => {
//   const dispatch = useDispatch();
//   const [expense, setExpense] = UseState();
//   const handleChange = (event) => setExpense(event.target.value);
//   const handleClick = () =>
//     dispatch({
//       type: "submit",
//       payload: {
//         label: expense,
//         id: Math.ceil(Math.random() * 100),
//       },
//     });
//   return (
//     <>
//       <input
//         type="text"
//         id="tilte"
//         name="title"
//         value={expense}
//         onChange={handleChange}
//         className={inputStyle}
//       ></input>

//       <input
//         type="submit"
//         value={props.buttonName}
//         onClick={handleClick}
//         className=" bg-black text-white px-6 py-2 mx-4"
//       ></input>
//     </>
//   );
// };
