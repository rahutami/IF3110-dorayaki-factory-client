import React from "react";

function ResepRow({ entry }) {
  return (
    <tr>
      <td className="tb-bb-body">{entry.id_bahanbaku}</td>
      <td className="tb-bb-body">{entry.nama_bahanbaku}</td>
      <td className="tb-bb-body">{`${entry.jumlah} ${entry.satuan}`}</td>
    </tr>
  );
}

export default ResepRow;