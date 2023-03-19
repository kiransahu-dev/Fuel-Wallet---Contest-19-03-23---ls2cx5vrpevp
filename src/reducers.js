import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "AddUser":
      const newUser = {
        id: uuidv4(),
        name: action.payload,
        balance: 10,
      };
      return {
        ...state,
        users: [...state.users, newUser],
      };
    case "Wallet":
      const newBalance = state.walletBalance -50;
      return {
        ...state,
        walletBalance: newBalance >= 0 ? newBalance : state.walletBalance,
      };
    default:
      return state;
  }
};

export default reducer;
