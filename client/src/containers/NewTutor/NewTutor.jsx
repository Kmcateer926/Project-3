import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TutorForm from "../../components/TutorForm/TutorForm";

const NewTutor = () => {
  const history = useHistory();
  //api call to post upon submitting the Tutor form
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
      });
  };

  return (
    <>
      <div>
        <TutorForm
          handleFormSubmit={handleFormSubmit}
          buttonText="Create New Tutor"
        />
      </div>
    </>
  );
};

export default NewTutor;
