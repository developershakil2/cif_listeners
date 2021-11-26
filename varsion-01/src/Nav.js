import React, {useState} from 'react';
import { NavLink ,} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from '@mui/material/Button';
import './Nav.css';

const Nav = ()=>{
    const openDefault = '-99999%';
    const [open, setOpen] = useState(openDefault);
    const [closee , setClose] = useState(openDefault);
    const close = '0%';
    const openClick = ()=>{
            setOpen(close)
    }

    const closeClick = ()=>{
        setClose(openDefault);
        setOpen(closee)

    }
    const linkedin = 'https://www.linkedin.com/in/developershakil';
    const fb = 'https://www.facebook.com/dev4website';
    const yt = 'https://www.youtube.com/channel/UCpeHVWT2ZCwHRgMb8YPlFRQ';
    return(
        <>
          <nav>
              <div className="container row m-auto">
              <div id="logo_wraper" className="nav_left  col-6 col-md-3 col-lg-3 col-xl-3">
                  <div className="logo">
                  <img src="image/logo.jpg"  alt="logo"/>
                  </div>

              </div>

              <div id="navMenu_wraper" style={{left:open}} className="nav_right col-12 col-md-9 col-lg-9 col-xl-9   row">
              <Button onClick={closeClick} id="close" ><CloseIcon style={{color:'#111', fontSize:'30px'}}/></Button>
        
                  <div className="nav_menu col-12 col-md-8 col-lg-8 col-xl-8">
                  <ul>
                      <li><NavLink to="/*">HOME</NavLink></li>
                      <li><NavLink to="/about">ABOUT</NavLink></li>
                      <li><NavLink to="/tutorial">TUTORIAL</NavLink></li>
                      <li><NavLink to="/error">BLOGS</NavLink></li>
                      <li><NavLink to="/error">FIND ME</NavLink></li>
                      <li><NavLink to="/contact">CONTACT</NavLink></li>
                  </ul>
                  </div>
 
                  <div className="nav_social col-12 col-md-12 col-lg-4 col-xl-4">
                      <a href={linkedin} target="_blank"> <LinkedInIcon style={{color:' #0e76a8',fontSize:'28px'}}/> </a>
                       <a href={fb} target="_blank"> <FacebookIcon style={{color:' #3b5998',fontSize:'28px'}}/> </a>
                       <a href={yt} target="_blank"> <YouTubeIcon style={{color:'#FF0000',fontSize:'28px'}}/> </a>
                 </div>
              </div>
              </div>
              <Button onClick={openClick} id="open" ><DehazeIcon style={{color:'#111', fontSize:'30px'}}/></Button>
        
          </nav>
        </>
    )
}

export default Nav;