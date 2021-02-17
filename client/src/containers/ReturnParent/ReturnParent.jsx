import React from 'react';
import axios from "axios";
import LoginForm from "../../components/LoginForm/LoginForm"



const ReturnParent = () => {

    const handleLoginSubmit = (e, parentData) => {
        e.preventDefault();
        axios
          .post("/api/login", parentData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return (
        <div className="login">
              <LoginForm handleLoginSubmit={handleLoginSubmit} />
        </div>
    );
};

export default ReturnParent;