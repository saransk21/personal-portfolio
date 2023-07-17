import React from "react";
import "./Aboutdetails.css";
import cv from "./resume.pdf";
const Aboutdetails = () => {
  return (
    <div className="about-details__container">
      <h2>About me</h2>
      <p>
             Software Trainee at Tringapps and experienced Front-End Developer with a
            proven track record in designing and developing captivating web
            applications. With expertise in HTML, CSS, JavaScript, React, Redux,
            and GraphQL
      </p>
    
      <a href={cv} download>
        Resume
      </a>
      
      
    </div>
  );
};

export default Aboutdetails;
