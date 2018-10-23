import React from "react";
import "./AuthForm.scss";
import { isAdmin } from "../../actions";
import { connect } from "react-redux";

class AuthForm extends React.Component {
  state = {
    id: "",
    password: ""
  };
  handleId = value => {
    this.setState({
      id: value
    });
  };
  handlePassword = value => {
    this.setState({
      password: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.isAdmin(this.state);
  };
  render() {
    return (
      <div>
        <h2>Вход</h2>
        <form>
          <input
            name="id"
            onChange={e => this.handleId(e.target.value)}
            component="input"
            type="text"
            autoComplete="off"
          />
          <input
            name="password"
            onChange={e => this.handlePassword(e.target.value)}
            component="input"
            type="password"
            autoComplete="off"
          />
          <input onClick={this.handleSubmit} type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { isAdmin }
)(AuthForm);
