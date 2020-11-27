import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state);
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <Link to="/home">
          <input type="submit" value="submit" className="btn btn-primary" />
        </Link>
      </form>
    );
  }
}
