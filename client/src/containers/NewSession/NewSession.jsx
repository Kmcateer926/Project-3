import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import SessionForm from "../../components/SessionForm/SessionForm";

const NewSession = () => {
  const history = useHistory();

  const handleFormSubmit = (e, sessionData) => {
    e.preventDefault();
    axios
      .post("/api/sessions", sessionData)
      .then((response) => {
        console.log(response.data);
        history.push("/landing");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="center-align">Add a New Product</h1>
        </div>
      </div>
      <div className="row">
        <SessionForm
          handleFormSubmit={handleFormSubmit}
          buttonText="Create New Session"
        />
      </div>
    </div>
  );
};

export default NewSession;
