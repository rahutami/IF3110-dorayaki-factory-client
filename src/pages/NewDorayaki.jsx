import React, { useRef } from "react";
import { api_base_url } from "../config";

function NewDorayaki() {
  const nama = useRef("");
  const deskripsi = useRef("");

  async function submitDorayaki(e) {
    const body = {
      nama: nama.current.value,
      deskripsi: deskripsi.current.value,
    };

    const response = await fetch(`${api_base_url}/dorayaki`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseBody = await response.json();
  }
  return (
    <div className="new-bahanbaku">

        {/* <p>Note: ID Dorayaki harus valid (sudah tersedia di halaman sebelumnya)</p> */}
      <p>
        <label htmlFor="nama-new">
          <strong>Nama Dorayaki:</strong>{" "}
        </label>
        <input type="text" id="nama-new" name="nama" ref={nama} />
      </p>
      <p>
        <label htmlFor="deskripsi-new">
          <strong>Deskripsi:</strong>{" "}
        </label>
        <input type="text" id="deskripsi-new" name="deskripsi" ref={deskripsi} />
      </p>
      <button onClick={submitDorayaki}>Submit</button>
    </div>
  );
}

export default NewDorayaki;
