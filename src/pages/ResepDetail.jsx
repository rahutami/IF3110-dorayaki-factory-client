import React, { useEffect, useState } from "react";
import { api_base_url } from "../config";
import { Navigate, useParams } from "react-router";
import ResepRow from "../components/ResepRow";
import { TokenContext } from "../App";

function ResepDetail() {
  const [resepDetails, setResepDetails] = useState({ detailResep: [] });
  const { id } = useParams();
  const [token] = React.useContext(TokenContext);

  useEffect(() => {
    getResepDetails();
  }, []);
  const getResepDetails = async () => {
    const response = await fetch(`${api_base_url}/resep/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resepGet = await response.json();

    setResepDetails(resepGet);
  };

  const detailResep = resepDetails.detailResep;

  if (resepDetails) {
    return (
      <div className="bahanbaku-detail">
        <h1>Detail Resep</h1>
        <h2>
          Dorayaki {resepDetails.namaDorayaki} (ID: {resepDetails.idDorayaki})
        </h2>
        <table>
          <thead>
            <tr>
              <th className="tb-bb-header">ID</th>
              <th className="tb-bb-header">Nama Bahan</th>
              <th className="tb-bb-header">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {detailResep.map((element) => {
              return <ResepRow entry={element} />;
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="bahanbaku-detail">
        <p>
          <strong>404 Error: Not Found</strong>
        </p>
      </div>
    );
  }
}
export default ResepDetail;
