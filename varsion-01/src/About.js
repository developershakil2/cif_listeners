import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import './about.css';
import Footer from './Footer';
const About = () =>{
    return(
        <>
        <Nav/>
          <div className="container row m-auto">
              <div className="head_title mt-4">
                  <h2 className="text-center">About me</h2>
              </div>

              <div id="about_left" className="col-12 col-md-6 col-lg-6 col-xl-6 mt-4 ">
                  <p className="text-justify">
                  hi there this is shakil hossain co-founder of <span style={{color:'#15ff00'}}>
                  CREATIVE IT FORUM
                  </span>
                  I had started the YouTube channel on 23 Aug 2021, and my target is I want to teach new technology to all interested people and all premium courses I'm just giving totally free without any cost I'm teaching in the Bengali language if you know the Bengali language you can subscribe my YouTube channel       
          I'm also providing the front-end web development +  WordPress +  PSD XD Figma to HTML convert services visit my Channel <a style={{textDecoration:'none', color:'red' , textDecoration:'underline'}} target="_blank" href="https://www.youtube.com/channel/UCpeHVWT2ZCwHRgMb8YPlFRQ">YouTube</a>
                  </p>
              </div>

              <div id="img-righ-for-about" className="  col-12 col-md-6 col-lg-6 col-xl-6  mt-4 ">

                  <img className="m-auto" src="image/yt.jpg" alt="yt"/>
              </div>
          </div>


          <div className="container row m-auto">
          <div  className=" col-12 col-md-6 col-lg-6 col-xl-6 mb-4  mt-4 ">

                  <img id="about_img" src="image/my.jpg" alt="yt"/>
              </div>
             
              <div id="about_left2" className="col-12 col-md-6 col-lg-6 col-xl-6 mt-4 ">
              <p className="text-justify">
                     <span style={{color:"#ff0000", fontWeight:'bold'}}>who I'm </span>
                   I'm shakil hossain co-founder of <span style={{color:'#15ff00'}}>
                   CREATIVE IT FORUM 
                 
                  </span>
                  and front-end and WordPress expert I have also good experience with
                  PSD XD FIGMA to convert into HTML with all devices responsive 
                  I'm working in this field for a long time now I'm focusing on interested people who want to learn 
                  all new technologies I'm also happy to teach they all
                  </p>
              </div>

              
          </div>


            <Footer/>
        </>
    )
}

export default About;