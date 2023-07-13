import React from "react";
import "./details.css";
const Details = () => {
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/saran-kumar-1a3a51200", "_blank");
  };
  const openGithub = () => {
    window.open("https://github.com/saransk21", "_blank");
  };
  return (
    <div className="details-container">
      <div className="details-title">SOFTWARE TRAINEE</div>

      <div className="details-content">
        <div className="heading">
          <h1>Hello, my name is Saran Kumar</h1>
        </div>
        <div className="subheading">
          <p>
            I am a highly skilled and experienced Front-End Developer with a
            proven track record in designing and developing captivating web
            applications. With expertise in HTML, CSS, JavaScript, React, Redux,
            and GraphQL
          </p>
        </div>
        <div className="buttons">
          <button className="primary" onClick={openGithub}>
            GitHub
          </button>
          <button className="secondary" onClick={openLinkedin}>
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
