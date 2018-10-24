import React from "react";
import "./AuthForm.scss";
import { checkWhoAreYou } from "../../actions";
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
    this.props.checkWhoAreYou(this.state);
  };

  render() {
    return (
      <div className="loginWrapper">
        <div className="logintop">
          <div className="container">
            Войдите в свой профиль ниже{" "}
            <span className="regLink">
              или <a href="/">Регистрация</a>
            </span>
          </div>
        </div>
        <div className="loginmain">
          <form className="container">
            <label htmlFor="id">ID администратора</label>
            <input
              name="id"
              id="id"
              onChange={e => this.handleId(e.target.value)}
              component="input"
              type="text"
              autoComplete="off"
            />
            <label htmlFor="password">Пароль</label>
            <input
              name="password"
              id="password"
              onChange={e => this.handlePassword(e.target.value)}
              component="input"
              type="password"
              autoComplete="off"
            />
            <input onClick={this.handleSubmit} type="submit" value={"Вход"} />
            <a className="forgotLink" href="/">
              Забыли пароль?
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { checkWhoAreYou }
)(AuthForm);
