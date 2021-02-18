import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
import board from "../../components/ChalkBG/chalkBoard.jpg";
import TutorTableRow from "../../components/TutorTableRow/TutorTableRow";

const Admin = () => {
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    getTutors();
  }, []);

  const getTutors = () => {
    axios
      .get("/api/tutors")
      .then((response) => {
        console.log(response.data);
        setTutors(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <body style={{ backgroundImage: `url(${board})` }}>
        <div style={{ height: "50px" }}></div>
        <div className="column is-12">
          <h1
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "60px",
              fontFamily: "Special Elite, cursive",
            }}
          >
            Admin View
          </h1>
          <div>
            <h4
              className="subtitle is-6 has-text-centered"
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "18px",
                fontFamily: "Special Elite, cursive",
              }}
            >
              Need a new tutor?<a href="/admin/new-tutor"> New Tutor</a>
            </h4>
          </div>
        </div>

        <div style={{ height: "50px" }}></div>
        <div className="container">
          <table
            id="admin-table"
            className="table is-bordered  is-narrow  is-fullwidth"
            style={{ backgroundImage: `url(${board})` }}
          >
            <thead>
              <tr>
                <th id="row">NAME</th>
                <th id="row">EDUCATION</th>
                <th id="row">SUBJECTS</th>
                <th id="row">YEARS</th>
                <th id="row">APPROVED</th>
                <th id="row"> DELETE</th>
              </tr>
            </thead>
            <tbody>
              {tutors.map((tutor) => (
                <TutorTableRow
                  key={tutor._id}
                  {...tutor}
                  getTutors={getTutors}
                />
              ))}
            </tbody>
          </table>
        </div>
      </body>
      <div style={{ height: "200px", backgroundImage: `url(${board})` }}></div>
    </>
  );
};

export default Admin;
