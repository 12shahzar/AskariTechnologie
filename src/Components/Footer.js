import React from "react";
import "../Styles/Footer.css";
import {} from "react-router-dom";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="body">
        <div className="row">
          <Link to={"/"}>
            <img
              src={require("../Assets/logo.png")}
              className="logo1"
              style={{ width: "400px", height: "80px" }}
            />
          </Link>
          <div className="row footerCon">
            <div className="col-md-2 col-sm-8">
              <Link to="/about">About Us</Link>
              <br></br>
              <Link to="/patner">Partners</Link>
              <br></br>
              <Link to="/ouventure">How It Work</Link>
              <br></br>
              <Link to="/contact">Contact Us</Link>
              <br></br>
              <Link to="/proeng">Software Engineering</Link>
              <br></br>
              <Link to="/patner">Partners</Link>
              <br></br>
              <Link to="/Quality">Quality Engineering</Link>
              <br></br>
              <Link to="/devops">Devops</Link>
              <br></br>
            </div>
            <div className="col-md-2 col-sm-8">
              <Link to="/Alml">AI Development</Link>
              <br></br>
              <Link to="/shopifydevelopment">Shopfiy Development</Link>
              <br></br>
              <Link to="/magentodevelopment">Magento Development</Link>
              <br></br>
              <Link to="/woocommerce">Woocommerce</Link>
              <br></br>
              <Link to="/Ecommerceapp">E Commerce App</Link>
              <br></br>
              <Link to="/Dynamic365">Dynamic 365</Link>
              <br></br>
              <Link to="/odoo">odoo</Link>
              <br></br>
              <Link to="/salesconsulting">Consulting</Link>
              <br></br>
            </div>
            <div className="col-md-2 col-sm-8">
              <Link to="/sol1">Asan ERP</Link>
              <br></br>
              <Link to="/sol2">Congnitive Edu</Link>
              <br></br>
              <Link to="/sol3">Client Connect</Link>
              <br></br>
              <Link to="/sol5">Instant Sales</Link>
              <br></br>
              <Link to="/sol6">Meadease</Link>
              <br></br>
              <Link to="/sol4">Angrisense</Link>
              <br></br>
              <Link to="/salesmigration">Migration</Link>
              <br></br>
              <Link to="/salesintregation">Intregation</Link>
              <br></br>
            </div>
            <div className="col-md-6 footright">
              <Link to="">Lastest news from us</Link>
              <div className="para3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
                volutpat ut dictum vel, in ut dolor, sapien urna.
              </div>
              <p className="email">Email </p>
              <div className="span"></div>
              <button type="button" class="btn signup">
                Sign Up
              </button>
              <div className="row social">
                <div className="col">
                  <img src={require("../Assets/facebook.png")} />
                </div>
                <div className="col">
                  <img src={require("../Assets/youtube.png")} />
                </div>
                <div className="col">
                  <img src={require("../Assets/twitter.png")} />
                </div>
                <div className="col">
                  <img src={require("../Assets/instagram.png")} />
                </div>
                <div className="col">
                  <img src={require("../Assets/facebook.png")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
