import React from 'react'
import '../Styles/Navbar.css'
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import Diversity2Icon from '@mui/icons-material/Diversity2';
// import TagFacesIcon from '@mui/icons-material/TagFaces';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import TerminalIcon from '@mui/icons-material/Terminal';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TuneIcon from '@mui/icons-material/Tune';
const HireDev = () => {
  return (
    <>
    <div className='container' >
      <div className='row'>
       <h1>Development</h1>
       <div className=' col' style={{marginBottom:'30px'}}>
       <p>
       At Askari technology, we infuse innovation with technology to build futuristic solutions. Our expertise <br/>lies in building sustainable software solutions.
       </p>
       </div>
       </div>
       <div className='row'>
         <div className='col' style={{height:'100px'}}>
           <div className='row'>
            <div className='col-2'>
            <AddBusinessIcon style={{color:'orange'}}/> 
            </div>
            <div className='col-10'>
             <h6>Ecommerce</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>           
           </div>
         </div>
         <div className='col'>
         <div className='row'>
            <div className='col-2'>
            <AppSettingsAltIcon style={{color:'purple'}}/> 
            </div>
            <div className='col-10'>
             <h6>App Development</h6>
             
            </div>           
           </div>
         </div>
         <div className='col'>
         <div className='row'>
            <div className='col-2'>
            < TerminalIcon  style={{color:'pink'}}/> 
            </div>
            <div className='col-10'>
             <h6>CRM/ERP</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>           
           </div>
         </div>
       </div>
       <div className='row'>
         <div className='col'>
         <div className='row'>
            <div className='col-2'>
            <PsychologyIcon style={{color:'seagreen'}}/> 
            </div>
            <div className='col-10'>
             <h6>Salesoft</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>           
           </div>
         </div>
         <div className='col'>
         <div className='row'>
            <div className='col-2'>
            <TuneIcon  style={{color:'orange'}}/> 
            </div>
            <div className='col-10'>
             <h6>Custom</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>           
           </div>
         </div>
         <div className='col'>
         {/* <div className='row'>
            <div className='col-2'>
            <ContactMailIcon style={{color:'orange'}}/> 
            </div>
            <div className='col-10'>
             <h6>Contact Us</h6>
             <p>Lorem ipum hdbhfbsd</p>
            </div>           
           </div> */}
         </div>
       </div>
    
    </div>
    </>
  )
}

export default HireDev