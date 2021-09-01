import React from "react";

import Buttons from "./Buttons";
import Value from "./Value";
import { connect } from "react-redux";
import { decrement } from "../../../redux/action";
import { increment } from "../../../redux/action";

function Counter({ value, myState, step, onIncrement, onDecrement }) {
  return (
    <div>
      <Value value={value} />
      <Buttons
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
      <p>{myState}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
    step: state.counter.step,
    myState: state.test.my,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onIncrement: (value) => dispatch(increment(value)),
  onDecrement: (value) => dispatch(decrement(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
