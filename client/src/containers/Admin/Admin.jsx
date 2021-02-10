import React, { useEffect, useState } from "react";
import axios from "axios";
// import SessionTableRow from "../../components/SessionTableRow/SessionTableRow";
import TutorTableRow from "../../components/TutorTableRow/TutorTableRow"

const Admin = () => {
  // 1. hard code the render
  // 2. move the values to this.state
  // 3. make the api call to return the data dynamically.
  // 3a. Import useEffect - when to go get the data.
  // 3b. Import axios
  // 3c. Inside useEffect, make an axios call.
  // 3d. set the response.data on state (setProducts) NEVER DIRECTLY MUTATE STATE

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
                <th>Name</th>
                <th>education</th>
                <th>Subjects</th>
                <th>Experience</th>
                <th>Approved</th>
                <th>Edit</th>
                <th>Delete</th>
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
      </div>
    </div>
  );
};

export default Admin;