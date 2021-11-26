import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './contact.css';
import Nav from './Nav';
import Footer from './Footer';
const Contact = ()=>{
    
    const linkedin = 'https://www.linkedin.com/in/developershakil';
    const fb = 'https://www.facebook.com/dev4website';
    const yt = 'https://www.youtube.com/channel/UCpeHVWT2ZCwHRgMb8YPlFRQ';
    return(
        <>
        <Nav/>
        <section id="contact" style={{padding:'30px 0px' , marginTop:'20px'}}>

        <div className="container m-auto row">
        <div className="head_title mt-4">
                  <h2 className="text-center">Contact me</h2>
              </div>
  
       <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-4">
       <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-6">
    <input type="text" className="form-control" placeholder="enter FullName" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <input type="email" className="form-control" placeholder="enter your email"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div className="col-12">
   <textarea className="form-control" style={{height:'200px', resize:'none'}} type="text" placeholder="write your messge...." required>   </textarea>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-12">
    <button className="btn " type="submit" style={{background:'#15ff00',}}>Submit form</button>
  </div>
</form>


       </div>


            

       <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-4">
               <div className="title_so text-center mt-4"><h3>contact on social</h3></div>
       <div className="nav_social_contact mt-4 text-center ">
                       <p className="mt-4 mb-4" style={{color:'#15ff00', fontSize:"25px"}}>+8801610717159</p>
                      <a href={linkedin} target="_blank"> <LinkedInIcon style={{color:' #0e76a8',fontSize:'38px'}}/> </a>
                       <a href={fb} target="_blank"> <FacebookIcon style={{color:' #3b5998',fontSize:'38px'}}/> </a>
                       <a href={yt} target="_blank"> <YouTubeIcon style={{color:'#FF0000',fontSize:'38px'}}/> </a>
                
                 </div>

       </div>



     </div>





        </section>
        <Footer/>

        </>
    )
}
export default Contact;