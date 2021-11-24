// import logo from "./logo.svg";

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BahanBaku from "./pages/BahanBaku";
import Request from "./pages/RequestPage";
import BahanBakuDetail from "./pages/BahanBakuDetail";
import NewBahanBaku from "./pages/NewBahanBaku";
import Navbar from "./components/Navbar";
import DataTablePage from "./pages/DataTablePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/bahanbaku/detail/:id" element={<BahanBakuDetail />} />
          <Route path="/bahanbaku/new" element={<NewBahanBaku />} />
          <Route path="/bahanbaku" element={<BahanBaku />} />
          <Route path="/requests" element={<Request />} />
          <Route path="/datatable" element={<DataTablePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
