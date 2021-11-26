import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tutorial.css';
import Nav from './Nav';
import Footer from './Footer';

const Tutorial = ()=>{
    return(
        <>
        <Nav/>
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
        <Footer/>
        </>
    )
}
export default Tutorial ;
