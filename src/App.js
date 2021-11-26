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
import Resep from "./pages/Resep";
import ResepDetail from "./pages/ResepDetail";
import NewResep from "./pages/NewResep";
import NewDorayaki from "./pages/NewDorayaki";
import Dorayaki from "./pages/Dorayaki";

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
          <Route path="/resep" element={<Resep/>} />
          <Route path="/resep/detail/:id" element={<ResepDetail />} />
          <Route path="/resep/new" element={<NewResep />} />
          <Route path="/dorayaki/new" element={<NewDorayaki />} />
          <Route path="/dorayaki" element={<Dorayaki />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
