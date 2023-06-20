import React from "react";
import "../Styles/Hearder.css";
import Logo from "../Assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import About from "./About";
import Capability from "./Capability";
import Insight from "./Insight";
import SideBar from "./SideBar";
import HireDevSidebar from "./HireDevSidebar";
import DevSidebar from "./DevSidebar";
import Solutions from "./Solutions";
const NewHeader = () => {
  return (
    <>
      <header className="header viewnon">
        <div className="container1">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="logo">
                <img src={Logo} alt="" className="imagelogo" />
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
                <ul className="menu-main" >
                  <li className="menu-item-has-children ">
                    <a href="#" className="iconnone">
                      ABOUT US <KeyboardArrowDownIcon />
                    </a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="" style={{ textAlign: "LEFT" }}>
                        <About />
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#"  className="iconnone">
                      CAPABILITIES <KeyboardArrowDownIcon />
                    </a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="" style={{ textAlign: "LEFT" }}>
                        <Capability />
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#"  className="iconnone">
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
                    <a href="#"  className="iconnone">
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
                    <a href="#"  className="iconnone">
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
          <span style={{float:'right' ,marginTop:'-50px'}}> <button className="navbtn">Lets Connect</button></span>

        </div>
      </header>
    </>
  );
};

export default NewHeader;
