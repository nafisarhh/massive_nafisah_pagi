import React from 'react';
import "./work.css";
import Picture from "../../assets/ngoding.jpg";

const Work = () => {
  return (
  <section className='work' id="work">
   <div className="workMain">
    <img className='workImage' src={Picture} alt="" />
    <div className='workText'>
        <span className='workNumber'>01.</span>
        <div className="workTitle">
            <span>Saya mahasiswa semester 4 jurusan Teknik Informatika</span>
            <span>Saya sedang belajar React JS</span>
        </div>
    </div>
</div>
<div className="workLink">
    <a className='workLinked' href="#">
        Online Preview
    </a>
</div>
 </section> 
  );
};

export default Work;