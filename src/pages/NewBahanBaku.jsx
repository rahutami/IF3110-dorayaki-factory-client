import React, { useRef } from "react";
import { api_base_url } from "../config";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

// Probably need to use fetch
function NewBahanBaku() {
  const nama_bahanbaku = useRef("");
  const stok = useRef(0);
  const satuan = useRef("");

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
      },
      body: JSON.stringify(body),
    });

    const responseBody = await response.json();
  }
  return (
    <MDBContainer>
    <MDBRow>
    <MDBCol md="6">
      <h1>Tambah Bahan Baku</h1>
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
      <MDBBtn onClick={submitBahanBaku}>Submit</MDBBtn>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
  );
}

export default NewBahanBaku;
