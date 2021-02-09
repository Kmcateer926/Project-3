import React, { useEffect, useState } from "react";
import axios from "axios";
import SessionTableRow from "../../components/SessionTableRow/SessionTableRow";

const Admin = () => {
  // 1. hard code the render
  // 2. move the values to this.state
  // 3. make the api call to return the data dynamically.
  // 3a. Import useEffect - when to go get the data.
  // 3b. Import axios
  // 3c. Inside useEffect, make an axios call.
  // 3d. set the response.data on state (setProducts) NEVER DIRECTLY MUTATE STATE

  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    getSessions();
  }, []);

  const getSessions = () => {
    axios
      .get("/api/sessions")
      .then((response) => {
        console.log(response.data);
        setSessions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">Admin View</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <table className="striped">
            <thead>
              <tr>
                <th>Tutor</th>
                <th>Date</th>
                <th>SessionLength</th>
                <th>Time</th>
                <th>Approved</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {sessions.map((session) => (
                <SessionTableRow
                  key={session._id}
                  {...session}
                  getSessions={getSessions}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;