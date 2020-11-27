import React, { Component } from "react";

import "./styles/loginStyles.css";
import Form from "../components/Form";

export default class Login extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center login-container">
          <div className="border p-3">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
