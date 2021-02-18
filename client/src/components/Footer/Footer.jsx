import React from "react";

const style = {
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  background: "#2674DB",
  opacity: "0.8",
  color: "white",
  flexShrink: "0",
  fontFamily: "Special Elite, cursive",
};
const phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

const Footer = () => {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <div>&copy; Copyright 2021</div>
      </div>
    </div>
  );
};

export default Footer;
