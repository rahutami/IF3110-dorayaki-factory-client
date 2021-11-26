import React, { useEffect, useState } from "react";
import { TokenContext } from "../App";
import BahanBakuRow from "../components/BahanBakuRow";
import { api_base_url } from "../config";

function BahanBaku() {
  const [bahanBakus, setBahanBakus] = useState([{}]);
  const [token, setToken] = React.useContext(TokenContext);

  useEffect(async () => {
    const result = await fetch(`${api_base_url}/bahanbaku`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const bahanBakuGet = await result.json();

    setBahanBakus(bahanBakuGet);
  }, []);

  return (
    <div className="bahan-baku">
      <a href="/bahanbaku/new">
        <button className="red-btn">Tambah Bahan Baku</button>
      </a>
      <table>
        <thead>
          <tr>
            <th className="tb-bb-header">Nama Bahan</th>
            <th className="tb-bb-header">Stok</th>
            <th className="tb-bb-header">Edit</th>
          </tr>
        </thead>
        <tbody>
          {bahanBakus.map((bahanBaku) => {
            return <BahanBakuRow bahanBaku={bahanBaku} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BahanBaku;
