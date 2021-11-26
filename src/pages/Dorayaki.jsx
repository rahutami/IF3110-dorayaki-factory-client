import React, { useEffect, useState } from "react";
import { api_base_url } from "../config";
import DorayakiRow from "../components/DorayakiRow";
import { TokenContext } from "../App";

function Dorayaki() {
  const [dorayakis, setDorayakis] = useState([{}]);
  const [token, setToken] = React.useContext(TokenContext);

  useEffect(() => {
    getDorayakis();
  }, []);
  const getDorayakis = async () => {
    const response = await fetch(`${api_base_url}/dorayaki`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const dorayakiGet = await response.json();

    setDorayakis(dorayakiGet);
  };

  return (
    <div className="bahan-baku">
      <h1>Dorayaki yang tersedia saat ini:</h1>

      <table>
        <thead>
          <tr>
            <th className="tb-bb-header">ID Dorayaki</th>
            <th className="tb-bb-header">Nama</th>
            <th className="tb-bb-header">Deskripsi</th>
          </tr>
        </thead>
        <tbody>
          {dorayakis.map((dorayaki) => {
            return <DorayakiRow dorayaki={dorayaki} />;
          })}
        </tbody>
      </table>

      <p>
        Jika dorayaki belum tersedia, tambah dorayaki sebelum menambah resep:
      </p>
      <a href="/dorayaki/new">
        <button className="red-btn">Tambah Dorayaki</button>
      </a>
    </div>
  );
}

export default Dorayaki;
