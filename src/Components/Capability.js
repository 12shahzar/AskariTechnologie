import React from 'react'
import '../Styles/Navbar.css'
import CodeIcon from '@mui/icons-material/Code';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { Link } from "react-router-dom";



const Capability = () => {
  return (
    <>
    <div className='container' >
      <div className='row'>
       <h1>End-to-End Solutions</h1>
       <div className=' col' style={{marginBottom:'30px'}}>
       <p>
       At Askari , we infuse innovation with technology to build futuristic solutions. Our expertise lies in building.<br/> sustainable software solutions.
       </p>
       </div>
       </div>
       <div className='row'>
         <div className='col' style={{height:'100px'}}>
         <Link to="/proeng" style={{textDecoration:"none",color:"black"}}>
           <div className='row'>
            <div className='col-2'>
            <CodeIcon style={{color:'orange'}}className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6 style={{marginTop:'15px'}}>Software Engineering</h6>
            </div>           
           </div>
           </Link>
         </div>
         <div className='col' >
         {/* <div className='row'>
            <div className='col-'>
            <CurrencyExchangeIcon style={{color:'purple'}}/> 
            </div>
            <div className='col' >
             
            </div>           
           </div> */}
            <Link to="/Ecommerce" style={{textDecoration:"none",color:"black"}}>
           <div className='row'>
                <div className='col-2'>
                <ShoppingCartCheckoutIcon style={{color:'purple'}}className='biglogo'/> 

                </div>
                <div className='col-10' >
                <h6 style={{marginTop:'15px'}}>E-commerce Development </h6>
                </div>
           </div>
           </Link>
         </div>
         <div className='col'>
         <Link to="/devops" style={{textDecoration:"none",color:"black"}}>
         <div className='row'>
            <div className='col-2'>
            <ConnectedTvIcon style={{color:'pink'}}className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6 style={{marginTop:'15px'}}>Devops</h6>
            </div>           
           </div>
           </Link>
         </div>
       </div>
       <div className='row'>
         <div className='col'>
         <Link to="/Quality" style={{textDecoration:"none",color:"black"}}>
         <div className='row'>
            <div className='col-2'>
            <StorefrontIcon style={{color:'seagreen'}}className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6 style={{marginTop:'15px'}}>Quality Engineering</h6>
            </div>           
           </div>
           </Link>
         </div>
         <div className='col'>
         <Link to="/Cloudsol" style={{textDecoration:"none",color:"black"}}>
         <div className='row'>
            <div className='col-2'>
            <VideoSettingsIcon style={{color:'orange'}}className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6 style={{marginTop:'15px'}}>Cloud Application</h6>
            </div>           
           </div>
           </Link>
         </div>
         <div className='col'>
         <Link to="/Alml" style={{textDecoration:"none",color:"black"}}>
         <div className='row'>
            <div className='col-2'>
            <CastForEducationIcon style={{color:'orange'}} className='biglogo'/> 
            </div>
            <div className='col-10'>
             <h6 style={{marginTop:'15px'}}>AI Development</h6>
            </div>           
           </div>
           </Link>
         </div>
       </div>
     
    </div>
    </>
  )
}

export default Capability