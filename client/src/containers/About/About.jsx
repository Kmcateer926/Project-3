import React from "react";
import Video2 from "../Home/video2.mp4";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <video controls>
            <source src={Video2} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default About;
