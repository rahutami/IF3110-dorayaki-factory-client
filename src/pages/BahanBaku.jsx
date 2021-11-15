import React, { useEffect, useState } from "react";
import { api_base_url } from "../config";
import { encode } from "js-base64";

function BahanBaku() {
  const [bahanBakus, setBahanBakus] = useState([]);

  useEffect(() => {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Authorization", "Basic " + encode("test"));
    headers.append("Origin", "http://localhost:3000");

    fetch(`${api_base_url}/bahanbaku`)
      .then((res) => res.json())
      .then(
        (result) => {
          setBahanBakus(result);
        },
        (error) => {}
      );
  }, []);

  return (
    <div className="bahan-baku">
      {bahanBakus.map((bahanBaku) => {
        return (
          <BahanBaku
            key={bahanBaku.id}
            nama_bahanbaku={bahanBaku.nama_bahanbaku}
            stok={bahanBaku.stok}
            satuan={bahanBaku.satuan}
          />
        );
      })}
    </div>
  );
}

export default BahanBaku;
