import React from "react";
import { connect } from "react-redux";
import Controls from "./Controls";
import Value from "./Value";
import * as actions from "../../redux/action";

const Counter = ({ value, onIncrement, onDecrement, step }) => {
  return (
    <div>
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />

      <Value value={value} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (step) => dispatch(actions.increment(step)),
    onDecrement: (step) => dispatch(actions.decrement(step)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
