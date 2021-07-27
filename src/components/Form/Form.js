import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    nick: "",
    experience: "junior",
    licence: false,
  };

  nameInputId = uuidv4();
  nickInputId = uuidv4();

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };
  resetForm() {
    this.setState({ name: "", nick: "" });
  }

  handleChecknoxChange = (e) => {
    this.setState({ licence: e.currentTarget.checked });
  };
  render() {
    const { experience, name, nick } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleInputChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.nickInputId}>
          Nick
          <input
            name="nick"
            type="text"
            value={nick}
            onChange={this.handleInputChange}
            id={this.nickInputId}
          />
        </label>
        <b>You level</b>
        <label>
          Junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleInputChange}
            checked={experience === "junior"}
          />
        </label>
        <label>
          Middle
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleInputChange}
            checked={experience === "middle"}
          />
        </label>
        <label>
          Senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleInputChange}
            checked={experience === "senior"}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleChecknoxChange}
          />
          apply for...
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;
