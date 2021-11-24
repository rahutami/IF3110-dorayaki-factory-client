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

  async function acceptRequests(id) {
    await axios
      .put(`${api_base_url}/requests/accept/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setRequests(response.data.allRequests);
          // alert('bisa');
        }
        else {
          // alert('gabisa');
        }
        getRequests();

      });
  }
  async function declineRequests(id) {
    await axios
      .put(`${api_base_url}/requests/decline/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setRequests(response.data.allRequests);
          // alert('bisa');
        }
        else {
          // alert('gabisa');
        }
        getRequests();
      });
  }

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
    // KAYAKNYA sih kalo accepted gaada lagi tombol accept, kalo udah declined gaada lagi tombol declined.
    if (item.status === "waiting") {
      // const urlAccept = `${api_base_url}/requests/accept/` + container.id;
      // const urlDecline = `${api_base_url}/requests/decline/` + container.id;
      // const urlUpdate = `${api_base_url}/requests/update/` + container.id;
      container.buttonAction = <React.Fragment><MDBBtn color="green" size="sm" onClick={() => { acceptRequests(container.id) }}>Accept</MDBBtn>< br/><MDBBtn color="red" size="sm" onClick={() => { declineRequests(container.id) }}>Decline</MDBBtn></React.Fragment>;
      // container.buttonAction = <React.Fragment><MDBBtn color="green" size="sm"><a href={urlAccept}>Accept</a></MDBBtn>< br/><MDBBtn color="red" size="sm" ><a href={urlDecline}>Decline</a></MDBBtn></React.Fragment>;
      // container.buttonAction = <React.Fragment><MDBBtn color="green" size="sm" onClick={acceptRequests(item.id)}><a href={urlAccept}>Accept</a></MDBBtn>< br/><MDBBtn color="red" size="sm" ><a href={declineRequests(item.id)}>Decline</a></MDBBtn></React.Fragment>;
    }
    else {
      container.buttonAction = "-";
    }
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
        label: 'Action',
        field: 'buttonAction',
        // sort: 'asc',
        width: 100
      },
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
}
export default Request;
