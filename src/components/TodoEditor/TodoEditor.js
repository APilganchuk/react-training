import { Component } from "react";

class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleCnange = (e) => {
    this.setState({ message: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.resetForm();
  };
  resetForm() {
    this.setState({ message: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleCnange}
        ></textarea>
        <button style={{ display: "block" }} type="submit">
          Save
        </button>
      </form>
    );
  }
}
export default TodoEditor;
