import React from 'react'
import '../Styles/Navbar.css'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
    <div className='container cont' >
      <div className='row'>
       <h1>About</h1>
       <div className=' col' style={{marginBottom:'30px'}}>
       <p>
       At Askari technology, we infuse innovation with technology to build futuristic solutions. Our expertise <br/>lies in building sustainable software solutions.
       </p>
       </div>
       </div>
       <div className='row'>
         <div className='col' style={{height:'100px'}}>
         <Link to="/aboutp">
           <div className='row'>
           
            <div className='col-2'>
            <BusinessCenterIcon style={{color:'orange'}} className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6>About Us</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>   
                  
           </div>
           </Link>  
         </div>
         {/* <div className='col'>
         <div className='row'>
         <Link to="/ourventure">
            <div className='col-2'>
            <CurrencyExchangeIcon style={{color:'purple'}}className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6>Our Ventures</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>  
            </Link>          
           </div>
         </div> */}
         <div className='col'>
         <Link to="/patner">
         <div className='row'>
        
            <div className='col-2'>
            < HandshakeIcon style={{color:'pink'}} className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6>Partners</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>  
                        
           </div>
           </Link> 
         </div>
       </div>
       <div className='row'>
         <div className='col'>
         <Link to="/ouventure">
         <div className='row'>
         
            <div className='col-2'>
            <Diversity2Icon style={{color:'seagreen'}} className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6>How It Works</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>  
                     
           </div>
           </Link> 
         </div>
         {/* <div className='col'>
         <div className='row'>
            <div className='col-2'>
            <TagFacesIcon style={{color:'orange'}} className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6>Life At Askari</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>           
           </div>
         </div> */}
         <div className='col'>
         <Link to="/contact">
         <div className='row'>
         
            <div className='col-2'>
            <ContactMailIcon style={{color:'orange'}}className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6>Contact Us</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>   
                     
           </div>
           </Link>
         </div>
       </div>
    
    </div>
    </>
  )
}

export default About