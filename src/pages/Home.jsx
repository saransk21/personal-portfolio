import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Photo from '../components/photo/Photo'
import Details from '../components/details/Details'
import Project from '../components/projects/Project'
import Footer from '../components/footer/Footer'


const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Photo/>
        <Details/>
        <Project/>
        {/* <Footer /> */}

    </div>
  )
}

export default Home
