import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import Footer from "./footer";
import "./home.css";

const Home = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <Footer />
    </div>
    
  )
}

export default Home;