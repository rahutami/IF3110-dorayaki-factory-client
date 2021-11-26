import React, { useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { api_base_url } from "../config";
import { TokenContext } from "../App";
import { Navigate } from "react-router-dom";

const Register = () => {
  const username = useRef("");
  const password = useRef("");
  const email = useRef("");
  const [token, loggedIn, handleToken, handleLogin, handleLogout] =
    React.useContext(TokenContext);

  async function register(e) {
    const body = {
      username: username.current.value,
      password: password.current.value,
      email: email.current.value,
    };

    const response = await fetch(`${api_base_url}/auth/register`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseBody = await response.json();

    if (responseBody.success) {
      handleToken(responseBody.token);
      handleLogin(true);
    }
  }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <p className="h4 text-center mb-4">Register</p>
          <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
            Username
          </label>
          <input
            type="text"
            id="defaultFormRegisterNameEx"
            className="form-control"
            ref={username}
          />
          <br />
          <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
            Email
          </label>
          <input
            type="email"
            id="defaultFormRegisterEmailEx"
            className="form-control"
            ref={email}
          />
          <br />
          <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
            Password
          </label>
          <input
            type="password"
            id="defaultFormRegisterPasswordEx"
            className="form-control"
            ref={password}
          />
          <div className="text-center mt-4" onClick={register}>
            <MDBBtn color="unique" type="submit">
              Register
            </MDBBtn>
            <a href="/login">
              <MDBBtn color="indigo" type="submit">
                Login
              </MDBBtn>
            </a>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Register;
