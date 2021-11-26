import React from "react";

function Navbar() {
  return (
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
      </ul>
    </nav>
  );
}

export default Navbar;
