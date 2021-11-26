import React, { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router";
import { TokenContext } from "../App";
import { api_base_url } from "../config";

function BahanBakuDetail() {
  const { id } = useParams();
  const [bahanBaku, setBahanBaku] = useState({});
  // const [nama_bahanbaku, setNama] = useState("");
  // const [stok, setStok] = useState(0);

  const nama_bahanbaku = useRef("");
  const stok = useRef(0);
  const [token, loggedIn] = React.useContext(TokenContext);

  useEffect(async () => {
    const result = await fetch(`${api_base_url}/bahanbaku/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const bahanBakuGet = await result.json();

    setBahanBaku({
      nama_bahanbaku: bahanBakuGet.nama_bahanbaku,
      stok: bahanBakuGet.stok,
      satuan: bahanBakuGet.satuan,
      id: bahanBakuGet.satuan,
    });
  }, [id]);

  async function submitUpdate(e) {
    const body = {
      nama_bahanbaku: nama_bahanbaku.current.value,
      stok: stok.current.value,
    };

    const response = await fetch(`${api_base_url}/bahanbaku/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const responseBody = await response.json();
    if (responseBody.success) {
      setBahanBaku({
        nama_bahanbaku: responseBody.nama_bahanbaku,
        stok: responseBody.stok,
        satuan: responseBody.satuan,
        id: responseBody.satuan,
      });
    }
  }

  if (!loggedIn) {
    return <Navigate to="/login" />;
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
            ref={nama_bahanbaku}
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
            ref={stok}
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
