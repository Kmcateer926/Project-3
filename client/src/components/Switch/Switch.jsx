import React from "react";
import "./Switch.css";
const Switch = ({id, isOn, handleToggle }) => {
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

        style={{ background: isOn && "#15C217" }}

        className="react-switch-label"
        htmlFor={`react-switch-new-${id}`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
