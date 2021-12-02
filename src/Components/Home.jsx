import React from "react";
import "./Home.scss";
import home_img from "../images/home.JPG";
import SkillSet from "./SkillSet";
import Contact from "./Contact";
import About from "./About";

function Home() {
  const skills = [
    {
      language: "React js",
      level: "75",
    },
    {
      language: "Java",
      level: "85",
    },
    {
      language: "javascript",
      level: "70",
    },
    {
      language: "Html",
      level: "90",
    },
    {
      language: "css",
      level: "77",
    },
    {
      language: "Spring boot",
      level: "88",
    },
    {
      language: "Microservice",
      level: "75",
    },
    {
      language: "Spring Security",
      level: "65",
    },
    {
      language: "JSON",
      level: "79",
    },
    {
      language: "SQL",
      level: "80",
    },
    {
      language: "MongoDb",
      level: "65",
    },
    {
      language: "Angular",
      level: "30",
    },
    {
      language: "TypeScript",
      level: "60",
    },
    {
      language: "Servlet & Jsp",
      level: "50",
    },
  ];

  return (
    <div className="home_container">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_container">
              <h2>I am Vishnu</h2>
              <p>
                I am Vishnu Lal an young Entrepreneur, programmer, Web
                developer, Full Stack developer.
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
                  href="https://m.facebook.com/profile.php?id=100012223186655"
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
          <div className="col-md-6 about_image_container">
            <img src={home_img} alt="noImg" className="image_about" />
          </div>
        </div>
      </div>

      <div className="container card_container_service">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-sm-12">
            <div class="card">
              <div className="card_img_container">
                <i className="fa fa-laptop fa-2x"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Web Development</h5>
                <p class="card-text">
                  Devleop your best websites/web application for you business.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12">
            <div class="card">
              <div className="card_img_container">
                <i className="fa fa-tablet fa-2x"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">App Development</h5>
                <p class="card-text">
                  Devleop your best Android application for you business.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12">
            <div class="card">
              <div className="card_img_container">
                <i className="fa fa-television fa-2x"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Full Stack Developmet</h5>
                <p class="card-text">
                  Devleop your best application based on you business
                  Requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12">
            <div class="card">
              <div className="card_img_container">
                <i className="fa fa-handshake-o fa-2x"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Application Support</h5>
                <p class="card-text">
                  Time-to-time application support and maintenance for your
                  application
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row skill_container">
          <div className="col-md-12">
            <h2>My skills</h2>
            <p>Have a look on my current ability</p>
          </div>

          {skills.map((data, index) => (
            <SkillSet value={data} key={index} />
          ))}
        </div>
      </div>

      <div className="compalin_container_ui" data-aos="fade-down">
        <Contact />
      </div>
      <div className="container git_hub_Button" data-aos="zoom-out">
        <h3>Check My gihub Might help you in Learning</h3>
        <a
          href="https://github.com/vishnu-20/"
          target="_blank"
          rel="noreferrer"
          className="link_icon"
        >
          <i className="fa fa-github-square fa-2x"></i>
        </a>
      </div>
       <About />
    </div>
  );
}

export default Home;
