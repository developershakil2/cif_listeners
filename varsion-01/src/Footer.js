import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';

const Footer = ()=>{
    
    const linkedin = 'https://www.linkedin.com/in/developershakil';
    const fb = 'https://www.facebook.com/dev4website';
    const yt = 'https://www.youtube.com/channel/UCpeHVWT2ZCwHRgMb8YPlFRQ';
    return(
        <> 
        <footer  className="mt-4" >
            <div id="footer_co" className="container row m-auto">
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 mt-4">
                     <div className="footer_title"><h3 className="text-light text-center">About me</h3> </div>
                     <p className="text-justify text-light mt-4">
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

                <div className="col-12 col-md-6 col-lg-4 col-xl-4 mt-4">
                <div className="footer_title"><h3 className="text-light text-center">UseFull Link</h3> </div>
                 
                  <ul className="navBar-nav">
                      <li className="nav-item"><NavLink className="nav-link" to="/*">HOME</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/about">ABOUT ME</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/tutorial">TUTORIAL</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/blogs">BLOGS</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/fignd me">FIND ME</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/contact me">CONTACT ME</NavLink></li>
                  </ul>
                 
                 </div>

<div  className="col-12 col-md-6 col-lg-4 col-xl-4 mt-4">
<div className="footer_title"><h3 className="text-light text-center">Follow Me </h3> </div>

<div className="nav_social">
                      <a href={linkedin} target="_blank"> <LinkedInIcon style={{color:' #0e76a8',fontSize:'35px'}}/> </a>
                       <a href={fb} target="_blank"> <FacebookIcon style={{color:' #3b5998',fontSize:'35px'}}/> </a>
                       <a href={yt} target="_blank"> <YouTubeIcon style={{color:'#FF0000',fontSize:'35px'}}/> </a>
                 </div>

</div>


            </div>
        </footer>

        </>
    )
}

export default Footer;