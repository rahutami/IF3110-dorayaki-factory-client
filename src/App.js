// import logo from "./logo.svg";

import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BahanBaku from "./pages/BahanBaku";
import Request from "./pages/RequestPage";
import BahanBakuDetail from "./pages/BahanBakuDetail";
import NewBahanBaku from "./pages/NewBahanBaku";
import Navbar from "./components/Navbar";
import Resep from "./pages/Resep";
import ResepDetail from "./pages/ResepDetail";
import NewResep from "./pages/NewResep";
import NewDorayaki from "./pages/NewDorayaki";
import Dorayaki from "./pages/Dorayaki";
import Register from "./pages/Register";
import Login from "./pages/Login";

export const TokenContext = React.createContext();

if (!localStorage.getItem("token"))
  localStorage.setItem("token", JSON.stringify(""));
if (!localStorage.getItem("logedIn"))
  localStorage.setItem("loggedIn", JSON.stringify(false));

function App() {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjM3OTA0NjExfQ.HjumPqbgT-bdH6tm4BtvKkvQoe1tsGQDcpc0IHKNamI"
  );
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => setLoggedIn(false);
  const handleToken = (newToken) => setToken(newToken);
  return (
    <div className="App">
      <TokenContext.Provider
        value={[token, loggedIn, handleToken, handleLogin, handleLogout]}
      >
        <Navbar />
        <Router>
          <Routes>
            <Route path="/bahanbaku/detail/:id" element={<BahanBakuDetail />} />
            <Route path="/bahanbaku/new" element={<NewBahanBaku />} />
            <Route path="/bahanbaku" element={<BahanBaku />} />
            <Route path="/requests" element={<Request />} />
            <Route path="/resep" element={<Resep />} />
            <Route path="/resep/detail/:id" element={<ResepDetail />} />
            <Route path="/resep/new" element={<NewResep />} />
            <Route path="/dorayaki/new" element={<NewDorayaki />} />
            <Route path="/dorayaki" element={<Dorayaki />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Request />} />
          </Routes>
        </Router>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
