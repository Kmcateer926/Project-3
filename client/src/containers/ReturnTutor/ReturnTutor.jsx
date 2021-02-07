import React from 'react';
import axios from "axios";
import LoginForm from "../../components/LoginForm/LoginForm"



const ReturnTutor = () => {

    const handleLoginSubmit = (e, tutorData) => {
        e.preventDefault();
        axios
          .post("/api/tutors", tutorData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return (
        <div>
              <LoginForm handleLoginSubmit={handleLoginSubmit} />
        </div>
    );
};

export default ReturnTutor;