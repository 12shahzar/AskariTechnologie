import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../Assets/logo.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <section className="footer py-5">
      <div className="container w-100  ">
        <div className="logoFooter">
          <img src={logoFooter} alt="logo" className="footer-log" />
        </div>
        <div className="row py-4">
          <div className="col-lg-3 m-auto text-center">
            <ul>
              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>
              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>

              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>
              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>

              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>
              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 m-auto text-center">
            <ul>
              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>
              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>

              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>
              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>

              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>
              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 m-auto text-center">
            <ul>
              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>
              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>

              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>
              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>

              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>
              <li>
                <Link to="/shopify">Shopfy</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 m-auto text-center">
            <h4 className="footer-head">Lastest news from us</h4>
            <p className="para-footer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              volutpat ut dictum vel, in ut dolor, sapien urna.
            </p>
            <div className="input">
              <input type="email" placeholder="Email" />
            </div>
            <div className="">
              <button className="signup mt-3">Signup</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
