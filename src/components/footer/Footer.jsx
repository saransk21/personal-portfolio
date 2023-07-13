import React from "react";
import "./footer.css";
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai";
const Footer = () => {
  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/saran-kumar-1a3a51200', '_blank');
  };
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <AiFillInstagram
          size={25}
          style={{ marginRight: "5px" }}
        />
        <AiFillLinkedin onClick={openLinkedin} size={25} style={{ marginRight: "5px",cursor:"pointer" }} />
        <AiFillMail onClick={() => (window.location = "mailto:sarankumar212002@google.com")} size={25} style={{cursor:"pointer"}}/>
      </div>
      <div className="footer-name">
        <p>SARAN KUMAR 2023</p>
      </div>

      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 300"
      >
        <path
          fill="#FDC435"
          fill-opacity="1"
          d="M0,160L40,181.3C80,203,160,245,240,240C320,235,400,181,480,170.7C560,160,640,192,720,218.7C800,245,880,267,960,240C1040,213,1120,139,1200,112C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      {/* <svg width="1440" height="344" viewBox="0 0 1440 344" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 258L60 229.333C120 200.667 240 143.333 360 150.5C480 157.667 600 229.333 720 229.333C840 229.333 960 157.667 1080 107.5C1200 57.3333 1320 28.6667 1380 14.3333L1440 0V344H1380C1320 344 1200 344 1080 344C960 344 840 344 720 344C600 344 480 344 360 344C240 344 120 344 60 344H0V258Z" fill="#FDC435"/>
</svg> */}
    </div>
  );
};

export default Footer;
