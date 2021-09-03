import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  counter: {
    value: 10,
    step: 10,
  },
  test: {
    my: "states",
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "counter/increment":
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + payload,
        },
      };
    case "counter/decrement":
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
