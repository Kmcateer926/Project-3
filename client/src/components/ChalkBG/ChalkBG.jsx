import React from "react";
import "./ChalkBG.css";
import ChalkB from "./chalkBoard.jpg";

const ChalkBG = () => {
  return (
    <div className="chalkBG">
      <img src={ChalkB} alt="a black chalkboard with eraser marks" />
    </div>
  );
};

export default ChalkBG;
