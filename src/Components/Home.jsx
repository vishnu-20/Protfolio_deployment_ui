import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="home_container">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_container">
              <h2>I am Vishnu</h2>
              <p>
                An young programmer, Web developer, Full Stack developer, Java
                developer.
              </p>
              <div className="gitHub_container">
                <a
                  href="https://github.com/vishnu-20/"
                  target="_blank"
                  rel="noreferrer"
                  className="git_icon"
                >
                  <i className="fa fa-github fa-2x"></i>
                </a>
                <a
                  href="https://github.com/vishnu-20/"
                  target="_blank"
                  rel="noreferrer"
                  className="fb_icon"
                >
                  <i className="fa fa-facebook-square fa-2x"></i>
                </a>
                <a
                  href="https://github.com/vishnu-20/"
                  target="_blank"
                  rel="noreferrer"
                  className="insta_icon"
                >
                  <i className="fa fa-instagram fa-2x"></i>
                </a>
                <a
                  href="https://github.com/vishnu-20/"
                  target="_blank"
                  rel="noreferrer"
                  className="link_icon"
                >
                  <i className="fa fa-linkedin-square fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                    
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}

export default Home;
