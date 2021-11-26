import React, { useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { api_base_url } from "../config";
import { TokenContext } from "../App";
import { Navigate } from "react-router-dom";
const Login = () => {
  const username = useRef("");
  const password = useRef("");
  const [token, loggedIn, handleToken, handleLogin] =
    React.useContext(TokenContext);

  async function login(e) {
    const body = {
      username: username.current.value,
      password: password.current.value,
    };
    console.log(body);

    const response = await fetch(`${api_base_url}/auth/login`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseBody = await response.json();
    console.log(responseBody);
    if (responseBody.success) {
      handleToken(responseBody.token);
      handleLogin();
      localStorage.setItem("loggedIn", JSON.stringify(true));
    }
  }

  if (loggedIn) {
    return <Navigate to="/requests" />;
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <p className="h4 text-center mb-4">Sign in</p>
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Email
          </label>
          <input
            type="email"
            id="defaultFormLoginEmailEx"
            className="form-control"
            ref={username}
          />
          <br />
          <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
            Password
          </label>
          <input
            type="password"
            id="defaultFormLoginPasswordEx"
            className="form-control"
            ref={password}
          />
          <div className="text-center mt-4">
            <MDBBtn color="indigo" type="submit" onClick={login}>
              Login
            </MDBBtn>
            <a href="/register">
              <MDBBtn color="unique" type="submit">
                Register
              </MDBBtn>
            </a>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
