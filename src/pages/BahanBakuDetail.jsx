import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api_base_url } from "../config";

function BahanBakuDetail() {
  const { id } = useParams();
  const [bahanBaku, setBahanBaku] = useState({});
  const [nama_bahanbaku, setNama] = useState("");
  const [stok, setStok] = useState(0);

  useEffect(async () => {
    const result = await fetch(`${api_base_url}/bahanbaku/${id}`);
    const bahanBakuGet = await result.json();

    setBahanBaku(bahanBakuGet);
  }, [id]);

  async function submitUpdate(e) {
    const response = await fetch(`${api_base_url}/bahanbaku/${id}`, {
      method: "put",
      body: {
        nama_bahanbaku,
        stok,
      },
    });
  }

  if (bahanBaku) {
    return (
      <div className="bahanbaku-detail">
        <h1>Detail</h1>
        <p>
          <strong>Nama:</strong> {bahanBaku.nama_bahanbaku}
        </p>
        <p>
          <strong>Stok:</strong> {`${bahanBaku.stok} ${bahanBaku.satuan}`}
        </p>

        <h1>Edit</h1>
        <p>
          <label htmlFor="nama_bahanbaku-detail">
            <strong>Nama:</strong>{" "}
          </label>
          <input
            type="text"
            id="nama_bahanbaku-detail"
            name="nama_bahanbaku"
            onChange={(e) => setNama(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="stok-detail">
            <strong>Stok:</strong>{" "}
          </label>
          <input
            type="number"
            id="stok-detail"
            name="stok"
            min="0"
            onChange={(e) => setStok(parseInt(e.target.value))}
          />
          <label htmlFor="stok-detail">{` ${bahanBaku.satuan}`}</label>
        </p>
        <button onClick={submitUpdate}>Submit</button>
      </div>
    );
  } else {
    return (
      <div className="bahanbaku-detail">
        <p>
          <strong>404 Error: Not Found</strong>
        </p>
      </div>
    );
  }
}

export default BahanBakuDetail;
