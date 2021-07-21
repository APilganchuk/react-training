import { Component } from "react";

class Count extends Component {
  handlePlus = () => {
    const { name, updateBascet, value } = this.props;
    updateBascet(name, value + 1);
  };
  handleMinus = () => {
    const { name, updateBascet, value } = this.props;
    if (value === 0) {
      return;
    }

    updateBascet(name, value - 1);
  };

  render() {
    const { value } = this.props;

    return (
      <div>
        <button onClick={this.handlePlus}>+</button>
        <span> {value} </span>
        <button onClick={this.handleMinus}>-</button>
      </div>
    );
  }
}

export default Count;
