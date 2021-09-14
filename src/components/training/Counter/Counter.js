import React from "react";

import Buttons from "./Buttons";
import Value from "./Value";
import { connect } from "react-redux";
import * as action from "../../../redux/counter/counter-actions";

function Counter({ value, text, myState, step, onIncrement, onDecrement }) {
  return (
    <div>
      <Value value={value} />
      <Buttons
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
      <p>{myState}</p>
      <b>{text}</b>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onIncrement: (value) => dispatch(action.increment(value)),
  onDecrement: (value) => dispatch(action.decrement(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
