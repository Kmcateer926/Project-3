import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TutorForm from "../../components/TutorForm/TutorForm"
// import AlertContext from "../../utils/alertContext";

const NewTutor = () => {
//   const alert = useContext(AlertContext);
  const history = useHistory();

  const handleFormSubmit = (e, tutorData) => {
    e.preventDefault();
    axios
      .post("/api/tutors", tutorData)
      .then((response) => {
        console.log(response.data);
        history.push("/admin");
      })
      .catch((err) => {
        console.log(err);
        // alert.setAlert({
        //   message: "Failed to create new tutor.",
        //   type: "danger",
        // });
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="center-align">Add a New TUtor</h1>
        </div>
      </div>
      <div className="row">
        <TutorForm
          handleFormSubmit={handleFormSubmit}
          buttonText="Create New Tutor"
        />
      </div>
    </div>
  );
};

export default NewTutor;