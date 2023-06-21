import React from "react";
import "../Styles/Hearder.css";
import Logo from "../Assets/logo.jpg.jpeg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import About from "./About";
import Capability from "./Capability";
import Insight from "./Insight";
import SideBar from "./SideBar";
import HireDevSidebar from "./HireDevSidebar";
import DevSidebar from "./DevSidebar";
import Solutions from "./Solutions";
import { Link } from "react-router-dom";
const NewHeader = () => {
  return (
    <>

<div>
  
</div>
      <header className="header viewnon" style={{display:'', justifyContent:'',alignItems:''}}>
        <div className="container1">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="">
                <Link to="/" style={{textDecoration:'none',color:'transparent'}}><img src={Logo} alt="" className="imagelogo " /></Link>
              </div>
            </div>
            {/* menu start here */}
            <div className="header-item item-center">
              <div className="menu-overlay"></div>
              <nav className="menu">
                <div className="mobile-menu-head" >
                  <div className="go-back">
                    <i className="fa fa-angle-left" />
                  </div>
                  <div className="current-menu-title" />
                  <div className="mobile-menu-close">X</div>
                </div>
                {/* <img src={Logo} alt="" className="imagelogo" style={{float:'left', marginLeft:'-400px'}}/> */}
                <ul className="menu-main">
                 
                  <li className="menu-item-has-children " style={{marginLeft:'20px'}}>
                    <a href="#" className="iconnone" style={{textDecoration:'none'}}>
                      ABOUT US <KeyboardArrowDownIcon />
                    </a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="" style={{ textAlign: "LEFT" }}>
                        <About />
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#"  className="iconnone" style={{textDecoration:'none'}}>
                      CAPABILITIES <KeyboardArrowDownIcon />
                    </a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="" style={{ textAlign: "LEFT" }}>
                        <Capability />
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#"  className="iconnone" style={{textDecoration:'none'}}>
                      DEVELOPMENT <KeyboardArrowDownIcon />
                    </a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                     <DevSidebar/>
                    </div>
                  </li>
                  {/* <li class="menu-item-has-children">
 							<a href="#">Blog <i class="fas fa-angle-down"></i></a>
 							<div class="sub-menu single-column-menu">
 								<ul>
 									<li><a href="#">Standard Layout</a></li>
 									<li><a href="#">Grid Layout</a></li>
 									<li><a href="#">single Post Layout</a></li>
 								</ul>
 							</div>
 						</li> */}
                  <li className="menu-item-has-children">
                    <a href="#"  className="iconnone" style={{textDecoration:'none'}}>
                      HIRE DEVELOPER <KeyboardArrowDownIcon />
                    </a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      {/* <SideBar/> */}
                     <HireDevSidebar/>
                    </div>
                  </li>

                  {/* <li className="menu-item-has-children">
                    <a href="#"  className="iconnone">
                      INSIGHTS <KeyboardArrowDownIcon />
                    </a>
                    <div
                      className="sub-menu mega-menu mega-menu-column-4"
                      style={{ textAlign: "left" }}
                    >
                      <Insight />
                    </div>
                    
                  </li> */}
                  <li className="menu-item-has-children">
                    <a href="#"  className="iconnone" style={{textDecoration:'none'}}>
                      SOLUTIONS <KeyboardArrowDownIcon />
                    </a>
                    <div
                      className="sub-menu mega-menu mega-menu-column-4"
                      style={{ textAlign: "left" }}
                    >
                      <Solutions />
                    </div>

                  </li>
                </ul>
              
              </nav>

            </div>
            
            {/* menu end here */}
            {/* <div className="header-item item-right">
              <a href="#">
                <i className="fas fa-search" />
              </a>
              <a href="#">
                <i className="far fa-heart" />
              </a>
              <a href="#">
                <i className="fas fa-shopping-cart" />
              </a>
              {/* mobile menu trigger */}
              {/* <div className="mobile-menu-trigger">
                <span />
              </div>
            </div> */} 
          </div>
          <Link to="/Contact" style={{textDecoration:'none',color:'transparent'}}><span style={{float:'right' }} className="spa"> <button className="navbtn">Lets Connect</button></span></Link>

        </div>
      </header>
    </>
  );
};

export default NewHeader;
