import React from "react";

function BahanBakuRow({ bahanBaku }) {
  return (
    <tr>
      <td className="tb-bb-body">{bahanBaku.nama_bahanbaku}</td>
      <td className="tb-bb-body">{`${bahanBaku.stok} ${bahanBaku.satuan}`}</td>
      <td className="tb-bb-body">
        <a href={`/bahanbaku/detail/${bahanBaku.id}`}>Edit</a>
      </td>
    </tr>
  );
}

export default BahanBakuRow;
