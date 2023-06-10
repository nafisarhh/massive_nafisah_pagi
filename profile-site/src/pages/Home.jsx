import React from 'react'
import LoaderHome from '../Components/loaderHome/LoaderHome'
import Hero from "../Components/Hero/Hero";
import About from '../Components/About/About';
import Navbar from '../Components/navbar/Navbar';
import Work from '../Components/work/Work';

const Home = () => {
  return (
    <div>
        <LoaderHome/>
        <Navbar />
        <Hero />
        <About />
        <Work />
    </div>
  );
};

export default Home;