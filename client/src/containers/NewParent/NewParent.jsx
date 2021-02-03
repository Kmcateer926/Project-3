  
import React from "react";
import axios from "axios";
import ParentForm from "../../components/ParentForm/ParentForm";

const NewParent = () => {
  const handleFormSubmit = (e, parentData) => {
    e.preventDefault();
    axios
      .post("/api/parents", parentData)
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
          <h1 className="center-align">Add a New Parent</h1>
        </div>
      </div>
      <div className="row">
        <ParentForm handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default NewParent;