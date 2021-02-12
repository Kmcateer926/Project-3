import React from "react";
import ChalkBG from "../../components/ChalkBG/ChalkBG";
// import axios from "axios";
import ParentForm from "../../components/ParentForm/ParentForm";
import "./NewParent.css"
// import API from "../../utils/API"

const NewParent = () => {
  const styles = {
    signUp: {
      backgroundImage: `url("https://t4.ftcdn.net/jpg/03/67/24/77/360_F_367247734_rml9UJtyflIYwvH5Sp6zQkAoxDOnksSS.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundSize: "cover",
	  backgroundRepeat: "no-repeat",
	  width: "100%",
    //   maxWidth: "2310vw",
      height: "100vh",
      position: "fixed",
      minWidth: "100%",
      backgroundAttachment: "fixed",
      
     
    }
  }
  return (
    // <ChalkBG>
      <div className="container" style={styles.signUp}>
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="row parentRow">
          <ParentForm />
        </div>
      </div>
    // </ChalkBG>
  );
};

export default NewParent;
