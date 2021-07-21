import { Component } from "react";
import styles from "./Dropdown.module.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState((prewState) => ({ visible: !prewState.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className={styles.dropdown}>
        <button onClick={this.toggle}>
          {visible ? "Hide" : "Show"}
        </button>

        {this.state.visible && <div>Content DROPDOWN</div>}
      </div>
    );
  }
}
export default Dropdown;
