import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BahanBaku from "./pages/BahanBaku";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/bahanbaku" element={<BahanBaku />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
