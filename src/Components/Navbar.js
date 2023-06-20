import React from "react";
// Pictures Import
import '../Styles/Navbar.css';
import Logo from "../Assets/logo.png";
import About from "./About";
import Capability from "./Capability";
import HireDev from "./HireDev";
import Insight from "./Insight";
import SideBar from "./SideBar";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-end mainnav " >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" className="imagelogo"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navcenter"  >
              <li className="nav-item dropdown" >
                <a
                  className="nav-link dropdown-toggle hide dropdown-toggle1"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  About Us
                </a>
                <ul className="dropdown-menu hide" aria-labelledby="navbarDropdown"  >
                  <li>
                    <a className="dropdown-item " href="#">
                    <About/>
                    </a>
                  </li>
                
                </ul>
                <div className="links">
                <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle1" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           About
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{textAlign:'center'}}>
            <li>About Us</li>
            <li>Our Ventures</li>
            <li>Partners</li>
            <li>How It Works</li>
            <li>Life At Askari</li>
            <li>Contact Us</li>
          </ul>
        </li>
            </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link   hide dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Capabilities
                </a>
                <ul className="dropdown-menu  hide" aria-labelledby="navbarDropdown " >
                  <li >
                    <a className="dropdown-item " href="#">
                     <Capability />
                    </a>
                  </li>
               
                </ul>
                <div className="links">
                <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle1" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Capabilities
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{textAlign:'center'}}>
            <li>Software Engineering</li>
            <li>E-commerce Development</li>
            <li>Devops</li>
            <li>Quality Engineering</li>
            <li>Cloud Application</li>
            <li>AI Development</li>
          </ul>
        </li>
            </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link  hide dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hire Developer
                </a>
                <ul className="dropdown-menu hide" aria-labelledby="navbarDropdown" >
                  <li>
                    <a className="dropdown-item" href="#">
                      {/* <HireDev/> */}
                      <SideBar/>
                    </a>
                  </li>
               
                </ul>
                <div className="links">
                <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle1" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Hire Developer
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{textAlign:'center'}}>
            <li>Development</li>
            <li>Ecommerce</li>
            <li>App Development</li>
            <li>CRM/ERP</li>
            <li>Salesoft</li>
            <li>Custom</li>
          </ul>
        </li>
            </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link  hide dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Insight
                </a>
                <ul className="dropdown-menu hide" aria-labelledby="navbarDropdown" >
                  <li>
                    <a className="dropdown-item" href="#">
                     <Insight/>
                    </a>
                  </li>
                </ul>
                <div className="links">
                <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle1" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Insight
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown"style={{textAlign:'center'}}>
            <li>Success stories</li>
            <li>Portfolio</li>
            <li>Testimonial</li>
            <li>Blog</li>
          </ul>
        </li>
            </div>
              </li>
            </ul>
            <button class="btn btn-contact" type="submit">
              Let's Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;