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
import Asanerp from "../Assets/erplogosvg.svg"
import CogEdu from "../Assets/Edusvg.svg"
import Med from "../Assets/medsvg.svg"
import CC from "../Assets/clientsvg.svg"
import InstantSales from "../Assets/saleforsvg.svg"
import Agri from "../Assets/agrisvg.svg"


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
            <img src={Asanerp}/>
            </div>
            <div className='col-10'>
             <h6>Asaan ERP</h6>
             <p>Simplify, Streamline, Succeed.</p>
            </div>           
           </div>
           </Link>
         </div>
         <div className='col'>
         <Link to="/sol2">
         <div className='row'>
            <div className='col-2'>
            <img src={CogEdu}/>
            </div>
            <div className='col-10'>
             <h6>Cognitive Edu</h6>
             <p>Empowering Minds, Evolving Education.</p>
            </div>           
           </div>
           </Link>
         </div>
         
         <div className='col'>
          <Link to="sol3">
         <div className='row'>
            <div className='col-2'>
            <img src={CC}/>
            </div>
            <div className='col-10'>
             <h6>Client Connect</h6>
             <p>Seamless Client Engagement.</p>
            </div>           
           </div></Link>
         </div>
         {/* <div className='col'>
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
         </div> */}
         
       </div>
       <div className='row'>
         <div className='col'>
         <Link to="/sol5">
         <div className='row'>
            <div className='col-2'>
            <img src={InstantSales}/>
            </div>
            <div className='col-10'>
             <h6>Instant Sales</h6>
             <p>Accelerate Sales Velocity.</p>
            </div>           
           </div>
           </Link>
         </div>
         <div className='col'>
         <Link to="/sol6">
         <div className='row'>
            <div className='col-2'>
            <img src={Med}/>
            </div>
            <div className='col-10'>
             <h6>Medease</h6>
             <p>Streamline Medical Operations.</p>
            </div>           
           </div>
           </Link>
         </div>
        <div className='col'>
          <Link to="sol4">
        <div className='row'>
            <div className='col-2'>
            <img src={Agri}/>
            </div>
            <div className='col-10'>
             <h6>Agrisense</h6>
             <p>Empowering Agriculture Technology.</p>
            </div>           
           </div></Link>
        </div>
       </div>
    
    </div>
    </>
  )
}

export default Solutions