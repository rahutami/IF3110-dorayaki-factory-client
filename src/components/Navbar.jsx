import React from "react";

function Navbar() {
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
          <li>
            <a href="/Login">Login</a>
          </li>
          <li>
            <a href="/Register">Register</a>
          </li>
          <li>
            <a href="/Logout">Logout</a>
          </li>
        </ul>
      </nav>
      <br />
      <br />
    </div>

    // <Route path="/bahanbaku/detail/:id" element={<BahanBakuDetail />} />
    // <Route path="/bahanbaku/new" element={<NewBahanBaku />} />
    // <Route path="/bahanbaku" element={<BahanBaku />} />
    // <Route path="/requests" element={<Request />} />
    // <Route path="/datatable" element={<DataTablePage />} />
    // <Route path="/resep" element={<Resep />} />
    // <Route path="/resep/detail/:id" element={<ResepDetail />} />
    // <Route path="/resep/new" element={<NewResep />} />
    // <Route path="/dorayaki/new" element={<NewDorayaki />} />
    // <Route path="/dorayaki" element={<Dorayaki />} />
    // <Route path="/register" element={<Register />} />
    // <Route path="/login" element={<Login />} />
  );
}

export default Navbar;
