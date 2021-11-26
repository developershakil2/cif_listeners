import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = ()=>{
 return(
     <>

        
        <div  style={{height:'100vh' ,  display:'grid', placeItems:'center', background:'navy',color:'#fff'}}>

            <h1>404 sorry page not found</h1>
              <NavLink to="*" style={{background:"#15ff00",padding:'10px', textDecoration:'none',color:'#111'}}>  GO BACK</NavLink>
        </div>



     </>
 )


}

export default Error;