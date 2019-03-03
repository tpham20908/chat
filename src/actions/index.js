import * as types from "./types";

let nextMessageId = 0,
  nextUserId = 0;

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  payload: {
    id: nextMessageId++,
    message,
    author
  }
});

export const addUser = name => ({
  type: types.ADD_USER,
  payload: {
    id: nextUserId++,
    name
  }
});

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  payload: {
    id: nextMessageId++,
    message,
    author
  }
});

export const populateUserList = users => ({
  type: types.USERS_LIST,
  payload: users
});