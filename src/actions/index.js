const ADD_EXPENSE = "ADD_EXPENSE";
export const add_Expense = (message, description, amount, date) => ({
  type: ADD_EXPENSE,
  message,
  description,
  amount,
  date,
  id: Math.random(),
});

const ADD_DESCRIPTION = "ADD_DESCRIPTION";
export const add_Description = (description) => ({
  type: ADD_DESCRIPTION,
  description,
  id: Math.random(),
});

const DELETE_EXPENSE = "DELETE_EXPENSE";
export const delete_Expense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

const EDIT_EXPENSE = "EDIT_EXPENSE";
export const edit_Expense = (id, message) => ({
  type: EDIT_EXPENSE,
  message,
  id,
});
