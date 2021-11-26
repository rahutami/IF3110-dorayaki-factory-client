import React, { useRef } from "react";
import { Navigate } from "react-router";
import { TokenContext } from "../App";
import { api_base_url } from "../config";

// Probably need to use fetch
function NewBahanBaku() {
  const nama_bahanbaku = useRef("");
  const stok = useRef(0);
  const satuan = useRef("");
  const [token, loggedIn] = React.useContext(TokenContext);

  async function submitBahanBaku(e) {
    const body = {
      nama_bahanbaku: nama_bahanbaku.current.value,
      stok: stok.current.value,
      satuan: satuan.current.value,
    };

    const response = await fetch(`${api_base_url}/bahanbaku`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const responseBody = await response.json();
  }

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="new-bahanbaku">
      <p>
        <label htmlFor="nama_bahanbaku-detail">
          <strong>Nama:</strong>{" "}
        </label>
        <input
          type="text"
          id="nama_bahanbaku-new"
          name="nama_bahanbaku"
          ref={nama_bahanbaku}
        />
      </p>
      <p>
        <label htmlFor="stok-new">
          <strong>Stok:</strong>{" "}
        </label>
        <input type="number" id="stok-detail" name="stok" min="0" ref={stok} />
      </p>
      <p>
        <label htmlFor="satuan-new">
          <strong>Satuan:</strong>{" "}
        </label>
        <input type="text" id="satuan-new" name="satuan" ref={satuan} />
      </p>
      <button onClick={submitBahanBaku}>Submit</button>
    </div>
  );
}

export default NewBahanBaku;
