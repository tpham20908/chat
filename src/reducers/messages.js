import { ADD_MESSAGE, MESSAGE_RECEIVED } from "../actions/types";

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
    case MESSAGE_RECEIVED:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default messages;