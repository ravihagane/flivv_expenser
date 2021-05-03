const initialState = {
  data: [],
  description: [],
  amount: [],
  date: [],
};

const expenses = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        data: [
          ...state.data,
          {
            message: action.message,
            id: action.id,
          },
        ],
        description: [
          ...state.description,
          {
            description: action.description,
            id: action.id,
          },
        ],
        amount: [
          ...state.amount,
          {
            amount: action.amount,
            id: action.id,
          },
        ],
        date: [
          ...state.date,
          {
            date: action.date,
            id: action.id,
          },
        ],
      };
    case "ADD_DESCRIPTION":
      return {
        ...state,
        data: [
          ...state.data,
          {
            description: action.description,
            id: action.id,
          },
        ],
      };
    case "DELETE_EXPENSE":
      return {};
    default:
      return state;
  }
};

export default expenses;
