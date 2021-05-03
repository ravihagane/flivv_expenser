// import { createSlice, configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// const initialState = {
//   expenses: [],
// };

// const addReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "submit":
//       return {
//         ...state,
//         expenses: [...state.expenses, action.payload],
//       };
//     case "delete":
//       return {
//         ...state,
//         expenses: state.expenses.filter(
//           (expense) => expense.id !== action.payload
//         ),
//       };

//     default:
//       return state;
//   }
// };

// const store = createStore(addReducer);

// export default store;

// createSlice({
//   name: "add",
//   initialState: "",
//   reducers: {
//     title(state) {
//       state.title=
//     },
//     description() {},
//     amount() {},
//     createdAt() {},
//     submit(){}
//   },
// });
