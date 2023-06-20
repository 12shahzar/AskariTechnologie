import React from 'react'
import '../Styles/Navbar.css'
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import Diversity2Icon from '@mui/icons-material/Diversity2';
// import TagFacesIcon from '@mui/icons-material/TagFaces';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import BookIcon from '@mui/icons-material/Book';
import { Link } from "react-router-dom";


const Solutions = () => {
  return (
    <>
    <div className='container' >
      <div className='row'>
       <h1>Solutions</h1>
       <div className=' col' style={{marginBottom:'30px'}}>
       <p>
       Optimize your digital products or build the latest, on-demand solutions today with our diverse range of software solutions.
       </p>
       </div>
       </div>
       <div className='row'>
         <div className='col' style={{height:'100px'}}>
         <Link to="/sol1">
           <div className='row'>
            <div className='col-2'>
            <ThumbUpAltIcon style={{color:'orange'}}className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6>Success stories</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>           
           </div>
           </Link>
         </div>
         <div className='col'>
         <Link to="/sol2">
         <div className='row'>
            <div className='col-2'>
            <AssignmentIndIcon style={{color:'purple'}}className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6>Portfolio</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>           
           </div>
           </Link>
         </div>
         <div className='col'>
         <Link to="/sol3">
         <div className='row'>
            <div className='col-2'>
            <AssignmentIndIcon style={{color:'purple'}}className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6>sol2</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>           
           </div>
           </Link>
         </div>
         <div className='col'>
         <Link to="/sol4">
         <div className='row'>
            <div className='col-2'>
            <AssignmentIndIcon style={{color:'purple'}}className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6>sol3</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>           
           </div>
           </Link>
         </div>
         
       </div>
       <div className='row'>
         <div className='col'>
         <Link to="/sol5">
         <div className='row'>
            <div className='col-2'>
            <StarHalfIcon style={{color:'seagreen'}}className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6>Testimonial</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>           
           </div>
           </Link>
         </div>
         <div className='col'>
         <Link to="/sol6">
         <div className='row'>
            <div className='col-2'>
            <BookIcon style={{color:'orange'}}className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6>Blog</h6>
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

export default Solutions