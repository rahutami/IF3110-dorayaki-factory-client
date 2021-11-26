import React, { useEffect, useState } from "react";
import { MDBDataTable, MDBBtn } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import { api_base_url } from "../config";
import { TokenContext } from "../App";
import axios from "axios";

function Request() {
  const [requests, setRequests] = useState([]);
  const [token, setToken] = React.useContext(TokenContext);

  useEffect(() => {
    getRequests();
  }, []);
  const getRequests = async () => {
    const result = await fetch(`${api_base_url}/requests`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const requestGet = await result.json();

    setRequests(requestGet);
  };

  async function acceptRequests(id) {
    await axios
      .put(
        `${api_base_url}/requests/accept/${id}`,
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setRequests(response.data.allRequests);
        }
        getRequests();
      });
  }
  async function declineRequests(id) {
    await axios
      .put(
        `${api_base_url}/requests/decline/${id}`,
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setRequests(response.data.allRequests);
        }
        getRequests();
      });
  }

  const requestRow = [];
  const completeRow = requests.map((item) => {
    const container = {};
    container.id = item.id;
    container.id_dorayaki = item.id_dorayaki;
    container.jumlah = item.jumlah;
    container.status = item.status;
    container.fieldTimestamp = item.timestamp;
    // KAYAKNYA sih kalo accepted gaada lagi tombol accept, kalo udah declined gaada lagi tombol declined.
    if (container.status === "waiting") {
      container.buttonAction = (
        <React.Fragment>
          <MDBBtn
            color="green"
            size="sm"
            onClick={() => {
              acceptRequests(container.id);
            }}
          >
            Accept
          </MDBBtn>
          <br />
          <MDBBtn
            color="red"
            size="sm"
            onClick={() => {
              declineRequests(container.id);
            }}
          >
            Decline
          </MDBBtn>
        </React.Fragment>
      );
    } else {
      container.buttonAction = "-";
    }
    return container;
  });
  completeRow.forEach((element) => {
    requestRow.push(element);
  });

  const data = {
    columns: [
      {
        label: "ID Request",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "ID Dorayaki",
        field: "id_dorayaki",
        sort: "asc",
        width: 270,
      },
      {
        label: "Jumlah",
        field: "jumlah",
        sort: "asc",
        width: 200,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "Request Timestamp",
        field: "fieldTimestamp",
        sort: "asc",
        width: 200,
      },
      {
        label: "Action",
        field: "buttonAction",
        // sort: 'asc',
        width: 100,
      },
    ],
    rows: requestRow,
  };
  return <MDBDataTable striped bordered small data={data} />;
}
export default Request;
