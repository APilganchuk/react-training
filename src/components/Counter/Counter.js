import React from "react";
import PropTypes from "prop-types";
import Controls from "./Controls";
import Value from "./Value";
import styles from "./Counter.module.css";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 1,
  };
  static propTypes = {
    onClick: PropTypes.string,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prewState) => ({ value: prewState.value + 1 }));
    console.log(this);
  };
  handleDecrement = () => {
    this.setState((prewState) => ({ value: prewState.value - 1 }));
  };

  render() {
    return (
      <div className={styles.box}>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        >
          <Value state={this.state.value} />
        </Controls>
      </div>
    );
  }
}

export default Counter;
