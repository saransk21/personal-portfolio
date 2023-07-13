import React from "react";
import "./ProjectSecondary.css";
const ProjectSecondary = ({name,des,url,imgUrl}) => {
  const openProject=()=>{
    window.open(url,'_blank');
  }
  return (
    <div className="project-secondary__container">
      <img src={imgUrl} alt="projectimg" />
      <div className="project-secondary__content">
        <h2>{name}</h2>
        <p>
          {des}
        </p>
        <button onClick={openProject}>View Project</button>
      </div>
    </div>
  );
};

export default ProjectSecondary;
