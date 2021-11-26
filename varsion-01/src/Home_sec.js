import React from 'react';
import Nav from './Nav';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './contact.css'
import './Home.css';
import Typed from 'react-typed';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tutorial.css';
import Footer from './Footer';

const Home = () =>{
    
    const linkedin = 'https://www.linkedin.com/in/developershakil';
    const fb = 'https://www.facebook.com/dev4website';
    const yt = 'https://www.youtube.com/channel/UCpeHVWT2ZCwHRgMb8YPlFRQ';
    return(
        <>
        <Nav/>
        <section id="home_sec">
            <div className="container row m-auto row">
                 <div className="col-12 col-md-8 col-lg-8 col-xl-8 m-auto">
                 <h1 className="text-center text-light ">  WELCOME TO <span style={{color:'#15ff00'}}>CREATIVE IT FORUM</span></h1>
                  <h2 className="text-center">

                  <Typed style={{color:'white', textAlign:'center', fontSize:'25px'}}
                    strings={[
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge',
                        'learn creatively ','remember time is money', 'stay with me for new knowladge'
                    ]}
                    typeSpeed={40}
                />
                  </h2>
                 </div>
            </div>
        </section>
                       
          
        <section id="second_sec">
       <div className="container m-auto row">
       <div className="head_title mt-4">
        <h2 className="text-center">Tutorial</h2>
      </div>
      <Tabs>
      <div className="m-auto mb-4 ">
      
    <TabList className="text-center mt-4">
      <Tab>all</Tab>
      <Tab>front-end</Tab>
      <Tab>wordpress</Tab>
      
    </TabList>
      </div>


     <div id="yt_wraper" className="mt-4">
    <TabPanel>
    
    <div className="m-auto row ">

    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe src="https://www.youtube.com/embed/EJdGxq2W3Zg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe  src="https://www.youtube.com/embed/6RA_FFlZb-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe  src="https://www.youtube.com/embed/lNvwZJ0saAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe src="https://www.youtube.com/embed/4GEaD3MSH7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe  src="https://www.youtube.com/embed/rVUrnFRHDhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe  src="https://www.youtube.com/embed/vigMMExd-qU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe src="https://www.youtube.com/embed/qSSk-M7o-zA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe src="https://www.youtube.com/embed/R29OjgTVMls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    </div>
      
    </TabPanel>

    <TabPanel>
    <div className="m-auto row ">
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe src="https://www.youtube.com/embed/4GEaD3MSH7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe  src="https://www.youtube.com/embed/rVUrnFRHDhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe  src="https://www.youtube.com/embed/vigMMExd-qU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe src="https://www.youtube.com/embed/qSSk-M7o-zA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe src="https://www.youtube.com/embed/R29OjgTVMls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>


       </div>

    </TabPanel>

       {/* wordpress start here */}
    <TabPanel >
     <div className="m-auto row ">
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe  src="https://www.youtube.com/embed/gTFKdF_laPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
              
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe  src="https://www.youtube.com/embed/8U1FYHftvDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
      


    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe src="https://www.youtube.com/embed/Wj9rceNFVoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe  src="https://www.youtube.com/embed/vF90RtSgcIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>


    
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe  src="https://www.youtube.com/embed/sSNezTi_rAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>


    
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe src="https://www.youtube.com/embed/EJdGxq2W3Zg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe  src="https://www.youtube.com/embed/6RA_FFlZb-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 you_video ">
    <iframe  src="https://www.youtube.com/embed/lNvwZJ0saAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>



</div>
    </TabPanel>



    </div>
  </Tabs>


       </div>
        </section>
        
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

export default Home;