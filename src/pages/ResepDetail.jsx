import React, { useEffect, useState } from "react";
import { api_base_url } from "../config";
import axios from "axios";
import { useParams } from "react-router";
import ResepRow from "../components/ResepRow";

function ResepDetail() {
  const [resepDetails, setResepDetails] = useState({detailResep:[]});
  const { id } = useParams();

  useEffect(() => {
      getResepDetails();
  }, []);
  const getResepDetails = async () => {
      const response = await axios.get(`${api_base_url}/resep/${id}`);
      setResepDetails(response.data);
  }

  const detailResep = resepDetails.detailResep;


  if (resepDetails) {
    return (
      <div className="bahanbaku-detail">
        <h1>Detail Resep</h1>
        <h2>Dorayaki {resepDetails.namaDorayaki} (ID: {resepDetails.idDorayaki})</h2>
        <table>
          <thead>
            <tr>
              <th className="tb-bb-header">ID</th>
              <th className="tb-bb-header">Nama Bahan</th>
              <th className="tb-bb-header">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {
            detailResep.map((element) => {
              return <ResepRow entry={element} />;
            })}
          </tbody>
        </table>
      </div>
     );
  }
  else {
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