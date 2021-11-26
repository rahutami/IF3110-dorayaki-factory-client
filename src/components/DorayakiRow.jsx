import React from "react";

function DorayakiRow({ dorayaki }) {
  return (
    <tr>
      <td className="tb-bb-body">{dorayaki.id}</td>
      <td className="tb-bb-body">{dorayaki.nama}</td>
      <td className="tb-bb-body">{dorayaki.deskripsi}</td>
    </tr>
  );
}

export default DorayakiRow;
