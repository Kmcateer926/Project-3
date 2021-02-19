import React from "react";
import Video3 from "./tutorHubVid.mp4";
import "./About.css";
import Thumbnail from "./thumbnail.png";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="videoDiv">
            <video width="1100" height="350" controls poster={Thumbnail}>
              <source src={Video3} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
