import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import React, { useRef } from "react";
import { api_base_url } from "../config";

function NewResep() {
  const id_dorayaki = useRef(0);
  const id_bahanbaku = useRef(0);
  const jumlah = useRef(0);

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
      },
      body: JSON.stringify(body),
    });

    const responseBody = await response.json();
  }
  return (
      
    <MDBContainer>
        <MDBRow>
        <MDBCol md="6">
        <h1>Tambah Resep</h1>
        <p>Note: ID Dorayaki harus valid (sudah tersedia di halaman sebelumnya)</p>
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
        <input type="number" id="id_bahanbaku-detail" name="id_bahanbaku" min="0" ref={id_bahanbaku} />
      </p>
      <p>
        <label htmlFor="jumlah-new">
          <strong>Jumlah:</strong>{" "}
        </label>
        <input type="text" id="jumlah-new" name="jumlah" ref={jumlah} />
      </p>
      <MDBBtn type="submit" onClick={submitResep}>
            Submit
          </MDBBtn>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default NewResep;
