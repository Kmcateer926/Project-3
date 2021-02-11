import React from "react";
import ChalkBG from "../../components/ChalkBG/ChalkBG";
// import axios from "axios";
import ParentForm from "../../components/ParentForm/ParentForm";
import "./NewParent.css"
// import API from "../../utils/API"

const NewParent = () => {
  return (
    <ChalkBG>
      <div className="container">
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="row parentRow">
          <ParentForm />
        </div>
      </div>
    </ChalkBG>
  );
};

export default NewParent;
