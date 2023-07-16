import React from "react";
import "./details.css";
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
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
            Passionate software developer with a drive for innovation and problem-solving.
          </p>
        </div>
        <div className="buttons">
          <button className="primary" onClick={openGithub}>
            
            <AiFillGithub size={40} />
          </button>
          <button className="secondary" onClick={openLinkedin}>
            <AiFillLinkedin size={40}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
