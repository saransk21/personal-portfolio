import React from 'react'
import Aboutdetails from './details/Aboutdetails'
import Aboutphoto from './photo/Aboutphoto'
import "./About.css"
const About = () => {
  return (
    <div className='about-container'>
      <Aboutdetails/>
      <Aboutphoto/>
    </div>
  )
}

export default About
