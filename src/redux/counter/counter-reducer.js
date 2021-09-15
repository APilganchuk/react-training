import { combineReducers } from "redux";
import * as actionTypes from "../counter/counter-types";
const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 10, action) => state;
export const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});
