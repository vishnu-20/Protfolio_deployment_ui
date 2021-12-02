import React from "react";
import "./About.scss";
import me from "../images/mw.JPG";

function About() {
  return (
    <div className="container" style={{ marginTop: "50px",paddingBottom:"50px" }}>
      <h2>About Me</h2>
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-6" data-aos="fade-left">
          <img src={me} alt="" className="ab_me" />
        </div>

        <div className="col-md-6" data-aos="fade-right">
          <p>
            I am Vishnu. An young programmer, web developer, full stack
            developer. I have good knowledge in react js and backend framework
            Spring boot
          </p>

          <p>Connect with me for creating your best web application.</p>

          <p>
            <i className="fa fa-envelope fa-1x"></i> <span>vishnulaleng@gmail.com </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
