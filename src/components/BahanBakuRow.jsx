import React from "react";

function BahanBakuRow({ bahanBaku }) {
  return (
    <tr>
      <td>{bahanBaku.nama_bahanbaku}</td>
      <td>{`${bahanBaku.stok} ${bahanBaku.satuan}`}</td>
      <td>
        <a href={`/bahanbaku/detail/${bahanBaku.id}`}>Edit</a>
      </td>
    </tr>
  );
}

export default BahanBakuRow;
