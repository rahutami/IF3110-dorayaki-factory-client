import React, { useEffect, useState } from "react";
import { api_base_url } from "../config";
import axios from "axios";

function Resep() {
  const [reseps, setReseps] = useState([{}]);

  useEffect(() => {
    getReseps();
  }, []);
  const getReseps = async () => {
    const response = await axios.get(`${api_base_url}/resep`);
    setReseps(response.data);
  }

  return (
  <div className="bahan-baku">
    <h1>Resep yang tersedia saat ini:</h1>
             {reseps.map((resep) => {
            return <h1><a href={`/resep/detail/${resep.id}`}>{resep.id}. {resep.nama}</a></h1>;
           })}
                 <a href="/resep/new">
        <button className="red-btn">Tambah Resep</button></a>

        <p>Jika dorayaki belum tersedia, tambah dorayaki sebelum menambah resep:</p>
        <a href="/dorayaki/new">
        <button className="red-btn">Tambah Dorayaki</button></a>
  </div>
  
  );
}

export default Resep;
