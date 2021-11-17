import React, { useEffect, useState } from "react";
import BahanBakuRow from "../components/BahanBakuRow";
import { api_base_url } from "../config";

const dbBahanBaku = [
  { id: 1, nama_bahanbaku: "garam", stok: 200, satuan: "gram" },
  { id: 2, nama_bahanbaku: "gula", stok: 200, satuan: "gram" },
  { id: 3, nama_bahanbaku: "telur", stok: 20, satuan: "butir" },
  { id: 4, nama_bahanbaku: "stroberi", stok: 200, satuan: "buah" },
];

function BahanBaku() {
  const [bahanBakus, setBahanBakus] = useState([{}]);

  useEffect(async () => {
    const result = await fetch(`${api_base_url}/bahanbaku`);
    const bahanBakuGet = await result.json();

    setBahanBakus(bahanBakuGet);
    console.log(bahanBakus);
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
