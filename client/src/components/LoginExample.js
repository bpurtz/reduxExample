import React, { Component } from "react";
import PropTypes from "prop-types";
// This is what injects redux state into the component props
import { connect } from "react-redux";
// This is the action that will do an api call
import { loginUser, logoutUser } from "../actions/authActions";

class LoginExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: props.auth.isAuthenticated,
      data: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.auth.isAuthenticated !== state.isAuthenticated) {
      return {
        isAuthenticated: props.auth.isAuthenticated,
        data: props.auth.data
      };
    }
    return null;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onLogin(e) {
    e.preventDefault();
    this.props.loginUser(this.state.data);
  }

  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    let content;
    if (!this.state.isAuthenticated) {
      content = (
        <div>
          <h2>Information to persist in state</h2>
          <form>
            <div className="form-group">
              <textarea
                onChange={this.onChange}
                name="data"
                value={this.state.data}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-outline-primary"
                onClick={this.onLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      content = (
        <div>
          <h2>Here is your data</h2>
          <p>{this.state.data}</p>
          <button className="btn btn-outline-primary" onClick={this.onLogout}>
            Logout
          </button>
        </div>
      );
    }

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {content}
      </div>
    );
  }
}
LoginExample.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser, logoutUser }
)(LoginExample);
