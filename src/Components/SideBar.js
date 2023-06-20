import React, { useState } from "react";
import "../Styles/Navbar.css";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import TerminalIcon from '@mui/icons-material/Terminal';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TuneIcon from '@mui/icons-material/Tune';

const SideBar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };
  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };
  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };
  // setTimeout(function() {
  //   <div className="">
  //   <div>
  //     <div>
  //       {isHovering4 && <h5>aaaaabbbbbbbbbbb777777777777777bbbaaaaaaaaaaaaaaaaaaaaaaa</h5>}
  //     </div>
  //   </div>
  // </div>
  // }, 9000); // 1000ms = 1s delay
  return (
    <>
      <div className="container"  style={{height:'320px' ,width:'700px'}}>
        <div className="row ">
          <div className="col-4 sidebar" >
            <ul className="ul">
              <div className="options">
                <li><h3>Development</h3></li>
              </div>
              <div className="options" >
              <div onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}>
              <div className='row option1'>
            <div className='col-2'>
            <AddBusinessIcon style={{color:'orange'}}/> 
            </div>
            <div className='col-10'>
             <h6>Ecommerce</h6>
            </div>           
           </div>
              </div>
              </div>
              <div className="options">
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <div className='row option1'>
            <div className='col-2'>
            <AppSettingsAltIcon style={{color:'purple'}}/> 
            </div>
            <div className='col-10 options'>
             <h6>Mobile</h6>
             
            </div>           
           </div>
              </div>
             </div>
              <div className="options">
                <div
                  onMouseOver={handleMouseOver1}
                  onMouseOut={handleMouseOut1}
                >
                   <div className='row option1'>
            <div className='col-2'>
            < TerminalIcon  style={{color:'pink'}}/> 
            </div>
            <div className='col-10'>
             <h6>Front End</h6>
            </div>           
           </div>
                </div>
              </div>
              <div className="options">
                <div
                  onMouseOver={handleMouseOver2}
                  onMouseOut={handleMouseOut2}
                >
                   <div className='row option1'>
            <div className='col-2'>
            <PsychologyIcon style={{color:'seagreen'}}/> 
            </div>
            <div className='col-10'>
             <h6>Back End</h6>
            </div>           
           </div>
                </div>
              </div>
              <div className="options">
                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className='row option1'>
            <div className='col-2'>
            <TuneIcon  style={{color:'orange'}}/> 
            </div>
            <div className='col-10'>
             <h6>CRM/ERP</h6>
            </div>           
           </div>
                </div>
              </div>
              <div className="options"></div>
            </ul>
          </div>
          <div className="col-8">
          <div className="">
            
              <div>
                {isHovering && <h5>ffytftyyjjhgjjhr555555555hghjriuguhdfjiohgy</h5>}
              </div>
            </div>
            <div className="">
              <div>
                {isHovering1 && <h5>ffytftyyjjhgjjhrhghjriuguhdfjiohgy</h5>}
              </div>
            </div>
            <div className=" ">
              <div>
                <div>{isHovering2 && <h5>f6342876437847545545</h5>}</div>
              </div>
            </div>
            <div className=" ">
              <div>
                <div>
                  {isHovering3 && <h5>aaaaabbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaa</h5>}
                </div>
              </div>
            </div>
            <div className="">
              <div>
                <div>
                  {isHovering4 && <h5>aaaaabbbbbbbbbbb777777777777777bbbaaaaaaaaaaaaaaaaaaaaaaa</h5>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
