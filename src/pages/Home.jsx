import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Photo from '../components/photo/Photo'
import Details from '../components/details/Details'
import Project from '../components/projects/Project'
import Footer from '../components/footer/Footer'
import About from './about/About'


const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Photo/>
        <Details/>
        {/* <About/> */}
        <Project/>
        {/* <Footer /> */}

    </div>
  )
}

export default Home
