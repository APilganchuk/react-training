import { createStore } from "redux";

const reducer = (state = {}, action) => {
  console.log("reducer", action);

  return state;
};

const store = createStore(reducer);

export default store;
