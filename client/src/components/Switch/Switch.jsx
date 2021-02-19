import React from "react";
import "./Switch.css";
const Switch = ({id, isOn, handleToggle }) => {
  //this renders the toggle switch on the admin page
  //handle toggle triggers an api post to change the tutor from approved:true to approved:false
  //each button has its own id so each button works independently
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new-${id}`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#15C217", transform: "translate(30%, -40%)" }}
        className="react-switch-label"
        htmlFor={`react-switch-new-${id}`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
