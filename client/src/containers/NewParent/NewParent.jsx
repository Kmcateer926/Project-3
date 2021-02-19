import React from "react";
import ParentForm from "../../components/ParentForm/ParentForm";
import "./NewParent.css";

const NewParent = () => {
  const styles = {
    signUp: {
      backgroundImage: `url("https://t4.ftcdn.net/jpg/03/67/24/77/360_F_367247734_rml9UJtyflIYwvH5Sp6zQkAoxDOnksSS.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100vh",
      position: "fixed",
      minWidth: "100%",
      backgroundAttachment: "fixed",
    },
  };
  return (
    <div className="container" style={styles.signUp}>
      <div className="row">
        <div className="col"></div>
      </div>
      <div className="row parentRow">
        <ParentForm />
      </div>
    </div>
  );
};

export default NewParent;
