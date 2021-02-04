import React from "react";
import axios from "axios";
import EditSessionForm from "../../components/EditSessionForm/EditSessionForm";

const EditSession = () => {
  const handleFormSubmit = (e, sessionData) => {
    e.preventDefault();
    axios
      .post("/api/sessions", sessionData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="center-align">Edit Session</h1>
        </div>
      </div>
      <div className="row">
        <EditSessionForm handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default EditSession;