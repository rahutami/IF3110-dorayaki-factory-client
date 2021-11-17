import React, { useEffect, useState } from "react";
import { api_base_url } from "../config";
import axios from "axios";

function Request() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
      getRequests();

  }, []);
  const getRequests = async () => {
      const response = await axios.get(`${api_base_url}/requests`);
      setRequests(response.data);
  }

  return (
    <table>
        <thead>
            <tr>
                <td>Request id</td>
                <td>id dorayaki</td>
                <td>Jumlah</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
      {requests.map((request) => {
        return (
            <tr>
                <td>{request.id}</td>
                <td>{request.id_dorayaki}</td>
                <td>{request.jumlah}</td>
                <td>{request.status}</td>
                <td>TODO: Nanti ini ada tombol accept/decline</td>
            </tr>
        );
      })}
      </tbody>
    </table>
  );
}

export default Request;
