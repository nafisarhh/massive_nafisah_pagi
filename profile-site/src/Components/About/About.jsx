import React from 'react'
import "./about.css";

const About = () => {
  return (
  <section className="about" id="about">
    <div className="aboutTypo">
      <span className= "aboutTypoText">about me</span>
      <span className= "aboutTypoText">about me</span>
      <span className= "aboutTypoText">about me</span>
    </div>
    <div className="aboutContent">
      <h1 className="aboutInfo">Hello! i am Nafisah Rahmadani, i am passionate
      about developing applications both use interface.</h1>
   <a className="aboutButton" href="#">Read more About Me</a>
    </div>
  </section>
  )
}

export default About;