import { ADD_USER, USERS_LIST } from "../actions/types";

const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case USERS_LIST:
      return action.payload;
    default:
      return state;
  }
}

export default users;