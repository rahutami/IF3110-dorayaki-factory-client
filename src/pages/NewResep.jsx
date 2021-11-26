import React, { useRef } from "react";
import { Navigate } from "react-router";
import { TokenContext } from "../App";
import { api_base_url } from "../config";

function NewResep() {
  const id_dorayaki = useRef(0);
  const id_bahanbaku = useRef(0);
  const jumlah = useRef(0);
  const [token, loggedIn] = React.useContext(TokenContext);

  async function submitResep(e) {
    const body = {
      id_dorayaki: id_dorayaki.current.value,
      id_bahanbaku: id_bahanbaku.current.value,
      jumlah: jumlah.current.value,
    };

    const response = await fetch(`${api_base_url}/resep`, {
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
        Note: ID Dorayaki harus valid (sudah tersedia di halaman sebelumnya)
      </p>
      <p>
        <label htmlFor="id_dorayaki-detail">
          <strong>ID Dorayaki:</strong>{" "}
        </label>
        <input
          type="text"
          id="id_dorayaki-new"
          name="id_dorayaki"
          ref={id_dorayaki}
        />
      </p>
      <p>
        <label htmlFor="id_bahanbaku-new">
          <strong>ID Bahanbaku:</strong>{" "}
        </label>
        <input
          type="number"
          id="id_bahanbaku-detail"
          name="id_bahanbaku"
          min="0"
          ref={id_bahanbaku}
        />
      </p>
      <p>
        <label htmlFor="jumlah-new">
          <strong>Jumlah:</strong>{" "}
        </label>
        <input type="text" id="jumlah-new" name="jumlah" ref={jumlah} />
      </p>
      <button onClick={submitResep}>Submit</button>
    </div>
  );
}

export default NewResep;
