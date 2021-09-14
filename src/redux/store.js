import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "counter/increment":
      return state + payload;

    case "counter/decrement":
      return state - payload;

    default:
      return state;
  }
};
const stepReducer = (state = 10, action) => state;
const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});
const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
