import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import EditBookSession from "../../components/EditBookSession/EditBookSession";

const EditSessionTest = () => {
  const history = useHistory();

  const handleFormSubmit = (e, sessionData, id) => {
    console.log(sessionData);
    console.log("click");
    e.preventDefault();
    axios
      .put(`/api/sessions/${id}`, sessionData)
      .then((response) => {
        console.log(response.data);
        history.push("/landing");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const styles = {
    edit: {
      backgroundImage: `url("https://t4.ftcdn.net/jpg/03/67/24/77/360_F_367247734_rml9UJtyflIYwvH5Sp6zQkAoxDOnksSS.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100%",
      position: "fixed",
      minWidth: "100%",
      backgroundAttachment: "fixed",
      color: "#ffffff",
      textAlign: "center",
    },
  };

  return (
    <>
      <body style={styles.edit}>
        <EditBookSession
          handleFormSubmit={handleFormSubmit}
          buttonText="Update"
        />
      </body>
    </>
  );
};

export default EditSessionTest;
