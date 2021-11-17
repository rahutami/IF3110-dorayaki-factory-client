import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BahanBaku from "./pages/BahanBaku";
import BahanBakuDetail from "./pages/BahanBakuDetail";
import NewBahanBaku from "./pages/NewBahanBaku";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/bahanbaku/detail/:id" element={<BahanBakuDetail />} />
          <Route path="/bahanbaku/new" element={<NewBahanBaku />} />
          <Route path="/bahanbaku" element={<BahanBaku />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
