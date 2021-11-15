import React, { Component } from "react";

function CardBahanBaku({ id, nama_bahanbaku, stok, satuan }) {
  return (
    <div className="card card-bahanbaku">
      <h1>{nama_bahanbaku}</h1>
      <h2>Stok: {`${stok} ${satuan}`}</h2>
      <button>Edit</button>
    </div>
  );
}

export default CardBahanBaku;
