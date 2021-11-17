// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BahanBaku from "./pages/BahanBaku";
import Request from "./pages/RequestPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/bahanbaku" element={<BahanBaku />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
