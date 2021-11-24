import React, { useEffect, useState } from "react";
import { MDBDataTable, MDBBtn} from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
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
  // console.log(requests);
  const requestRow = [];
  const completeRow = requests.map(item => {
    const container = {};
    container.id = item.id;
    container.id_dorayaki = item.id_dorayaki;
    container.jumlah = item.jumlah;
    container.status = item.status;
    // TODO timestamp belum muncul entah kenapa
    container.timestamp = item.timestamp;
    // TODO ganti link untuk accept and decline
    container.buttonAccept = <React.Fragment><MDBBtn color="green" size="sm" ><a href="/request">Accept</a></MDBBtn></React.Fragment>;
    container.buttonDecline = <React.Fragment><MDBBtn color="red" size="sm" ><a href="/request">Decline</a></MDBBtn></React.Fragment>;
    return container;
  })
  completeRow.forEach(element => {
    requestRow.push(element);
  })
  // console.log(requestRow);

  const data = {
    columns: [
      {
        label: 'ID Request',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'ID Dorayaki',
        field: 'id_dorayaki',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Jumlah',
        field: 'jumlah',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Timestamp',
        field: 'timetamp',
        sort: 'asc',
        width: 100
      },    
      {
        label: 'Accept',
        field: 'buttonAccept',
        // sort: 'asc',
        width: 100
      },
      {
        label: 'Decline',
        field: 'buttonDecline',
        // sort: 'asc',
        width: 100
      }
    ],
    rows: requestRow
  }
  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />);
  // return(
  //   <table>
  //       <thead>
  //           <tr>
  //               <td>Request id</td>
  //               <td>id dorayaki</td>
  //               <td>Jumlah</td>
  //               <td>Status</td>
  //               <td>Action</td>
  //           </tr>
  //       </thead>
  //       <tbody>
  //     {requests.map((request) => {
  //       return (
  //           <tr>
  //               <td>{request.id}</td>
  //               <td>{request.id_dorayaki}</td>
  //               <td>{request.jumlah}</td>
  //               <td>{request.status}</td>
  //               <td>
  //                 {/* TODO ganti path nya */}
  //                 <a href="/request">Accept</a>
  //                 <br />
  //                 <a href="/request">Decline</a>

  //               </td>
  //           </tr>
  //       );
  //     })}
  //     </tbody>
  //   </table>
  // );
}
export default Request;
