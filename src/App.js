// import logo from "./logo.svg";

import "./App.css";
import React, { useState } from "react";
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

export const TokenContext = React.createContext();

function App() {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjM3OTA0NjExfQ.HjumPqbgT-bdH6tm4BtvKkvQoe1tsGQDcpc0IHKNamI"
  );

  return (
    <div className="App">
      <TokenContext.Provider value={[token, setToken]}>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/bahanbaku/detail/:id" element={<BahanBakuDetail />} />
            <Route path="/bahanbaku/new" element={<NewBahanBaku />} />
            <Route path="/bahanbaku" element={<BahanBaku />} />
            <Route path="/requests" element={<Request />} />
            <Route path="/datatable" element={<DataTablePage />} />
            <Route path="/resep" element={<Resep />} />
            <Route path="/resep/detail/:id" element={<ResepDetail />} />
            <Route path="/resep/new" element={<NewResep />} />
            <Route path="/dorayaki/new" element={<NewDorayaki />} />
            <Route path="/dorayaki" element={<Dorayaki />} />
          </Routes>
        </Router>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
