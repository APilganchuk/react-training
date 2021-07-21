import { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = { actvOptionIndex: 1 };

  setActiveIndex = (index) => {
    this.setState({ actvOptionIndex: index });
  };

  makeOptionClassName = (index) => {
    const optionClasess = ["ColorPicker__option"];
    if (index === this.state.actvOptionIndex) {
      optionClasess.push("ColorPicker__option--active");
    }
    return optionClasess.join(" ");
  };

  render() {
    const { options } = this.props;
    const { actvOptionIndex } = this.state;
    const { label } = options[actvOptionIndex];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>current color:{label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
