import React from "react";
import { api_base_url } from "../config";

// Probably need to use fetch
function NewBahanBaku() {
  return (
    <div className="new-bahanbaku">
      <form action={`${api_base_url}/bahanbaku`} method="post" target="#">
        <p>
          <label htmlFor="nama_bahanbaku-detail">
            <strong>Nama:</strong>{" "}
          </label>
          <input type="text" id="nama_bahanbaku-new" name="nama_bahanbaku" />
        </p>
        <p>
          <label htmlFor="stok-new">
            <strong>Stok:</strong>{" "}
          </label>
          <input type="number" id="stok-detail" name="stok" min="0" />
        </p>
        <p>
          <label htmlFor="satuan-new">
            <strong>Satuan:</strong>{" "}
          </label>
          <input type="text" id="satuan-new" name="satuan" />
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewBahanBaku;
