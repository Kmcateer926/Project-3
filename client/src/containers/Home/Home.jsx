import React, { Component } from "react";
import "./style.css";
import Video1 from "./video1.mp4";
import Video2 from "./video2.mp4";

class Home extends Component {
  render() {
    return (
      <>
        <div className="ParallaxVideo">
          <video autoPlay muted loop>
            <source src={Video1} type="video/mp4" />
          </video>
        </div>

        <div className="aboutTH">
          <i class="fas fa-apple-alt"></i> &nbsp; Find teachers in your existing
          school network to tutor your children at home.
        </div>

        <div className="ParallaxVideo2">
          <video autoPlay muted loop>
            <source src={Video2} type="video/mp4" />
          </video>
        </div>
      </>
    );
  }
}

export default Home;
