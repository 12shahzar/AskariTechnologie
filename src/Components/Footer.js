import React from "react";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="body">
        <div className="row">
          <img src={require('../Assets/logo.png')} className="logo1" style={{width:'400px',height:'60px'}} />
          <div className="row footerCon">
            <div className="col-md-2 col-sm-8">
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
            </div>
            <div className="col-md-2 col-sm-8">
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
            </div>
            <div className="col-md-2 col-sm-8">
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
              <p>Footer Text #1</p>
            </div>
            <div className="col-md-6 footright">
              <p>Lastest news from us</p>
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
                  <img  src={require('../Assets/facebook.png')}  />
                </div>
                <div className="col">
                  <img  src={require('../Assets/youtube.png')}  />
                </div>
                <div className="col">
                  <img  src={require('../Assets/twitter.png')}  />
                </div>
                <div className="col">
                  <img  src={require('../Assets/instagram.png')}  />
                </div>
                <div className="col">
                  <img  src={require('../Assets/facebook.png')} />
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
