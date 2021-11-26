import React from "react";
import { TokenContext } from "../App";

function Navbar() {
  const [token, loggedIn, handleToken, handleLogin, handleLogout] =
    React.useContext(TokenContext);
  const logout = (e) => {
    handleLogout();
  };
  if (loggedIn) {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/bahanbaku">Bahan Baku</a>
            </li>
            <li>
              <a href="/resep">Resep</a>
            </li>
            <li>
              <a href="/requests">Requests</a>
            </li>
            <li>
              <a href="/dorayaki">Dorayaki</a>
            </li>
            <li onClick={logout}>
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
        <br />
        <br />
      </div>
    );
  }
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/login">Dorayaki Factory</a>
          </li>
        </ul>
      </nav>
      <br />
      <br />
    </div>
  );
}

export default Navbar;
