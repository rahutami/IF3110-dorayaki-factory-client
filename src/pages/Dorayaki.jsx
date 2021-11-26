import React, { useEffect, useState } from "react";
import { api_base_url } from "../config";
import axios from "axios";

function Dorayaki() {
  const [dorayakis, setDorayakis] = useState([{}]);

  useEffect(() => {
    getDorayakis();
  }, []);
  const getDorayakis = async () => {
    const response = await axios.get(`${api_base_url}/dorayaki`);
    setDorayakis(response.data);
  }

  return (
  <div className="bahan-baku">
    <h1>Dorayaki yang tersedia saat ini:</h1>
             {dorayakis.map((dorayaki) => {
            return <h1>{dorayaki.id}. {dorayaki.nama}</h1>;
           })}

        <p>Jika dorayaki belum tersedia, tambah dorayaki sebelum menambah resep:</p>
        <a href="/dorayaki/new">
        <button className="red-btn">Tambah Dorayaki</button></a>
  </div>
  
  );
}

export default Dorayaki;
