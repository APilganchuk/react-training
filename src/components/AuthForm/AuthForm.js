import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Component } from "react";

export class AuthForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <TextField
            onChange={this.handleInputChange}
            value={email}
            name="email"
            label="EMAIL"
            variant="outlined"
          />
          <TextField
            onChange={this.handleInputChange}
            value={password}
            type="password"
            name="password"
            label="PASSWORD"
            variant="outlined"
          />
          <Button
            type="submit"
            style={{ width: 200, height: 54 }}
            variant="contained"
            color="primary"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    );
  }
}
