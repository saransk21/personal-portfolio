import React from 'react'
import'./projectprimary.css'
const ProjectPrimary = ({name,des,url,imgUrl}) => {
  const openProject=()=>{
    window.open(url,'_blank');
  }
  return (
    <div className='project-primary__container'>
        <div className='project-primary__content'>
            <h2>{name}</h2>
            <p>{des}</p>
            <button onClick={openProject}>View Project</button>
        </div>
        <img src={imgUrl}  alt='projectimg'/>
        
      
    </div>
  )
}

export default ProjectPrimary
