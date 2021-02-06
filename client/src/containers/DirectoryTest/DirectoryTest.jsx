  
import React from "react";
import axios from "axios";
import BookSession from "../../components/BookSession/BookSession";

const NewSession = () => {
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
          {/* <h1 className="center-align">Add a New Parent</h1> */}
        </div>
      </div>
      <div className="row">
        <BookSession handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default NewSession;