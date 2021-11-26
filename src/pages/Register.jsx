import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const Register = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Register</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Username
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          Email
        </label>
        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          Password
        </label>
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
        <div className="text-center mt-4">
          <MDBBtn color="unique" type="submit">
            Register
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default Register;