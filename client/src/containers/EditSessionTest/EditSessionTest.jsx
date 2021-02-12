import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import BookSession from "../../components/BookSession/BookSession";
import EditBookSession from "../../components/EditBookSession/EditBookSession";
// import ChalkBG from "../../components/ChalkBG/ChalkBG";

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

//   const testSubmit = () => {
//     console.log("test");
//   };
  return (
    // <ChalkBG>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <h1 className="center-align">Add a New Parent</h1> */}
          </div>
        </div>
      {/* </div> */}
      <div className="row">
        {/* <BookSession handleFormSubmit={handleFormSubmit} buttonText="Update"/> */}
        {/* {sessions.map((session)=>(
   <BookSession {...sessions} getSessions={getSessions}/>
          ))} */}
        <EditBookSession
          handleFormSubmit={handleFormSubmit}
          buttonText="Update"
        />
      </div>
      </div>
    // </ChalkBG>
  );
};

export default EditSessionTest;
