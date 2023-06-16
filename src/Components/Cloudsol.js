import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Cloudsol.css";

import bg from "../Assets/bg.png";
import img1 from "../Assets/1.jpg";

import pic1 from "../Assets/pic1.png";

import pic3 from "../Assets/pic3.png";
import pic4 from "../Assets/pic4.png";
import pic5 from "../Assets/pic5.png";
import autoparts from "../Assets/autoparts.png";
import pharma from "../Assets/pharma.png";
import apple from "../Assets/apple.png";
import beauty from "../Assets/beauty.png";
import car from "../Assets/car.png";

import process from "../Assets/proces.png";
import js from "../Assets/js.png";
import php from "../Assets/php.png";
import microsoft from "../Assets/microsoft.png";
import salesforce from "../Assets/salesforce.png";
import odoo from "../Assets/odoo.png";
import netcore from "../Assets/netCore.png";
import askarimainleft from "../Assets/askaritechmain.png";
import aus from "../Assets/aus.png";
import ame from "../Assets/ame.png";
import pak from "../Assets/pak.png";
import uae from "../Assets/uae.png";
import program from "../Assets/program.png";
import reactnative from "../Assets/reactnative.png";
import officemeet from "../Assets/officemeet.png";
import comp from "../Assets/comp.png";

const Cloudsol = () => {
  return (
    <div className="bodycontent">
      <div className="bannner-image">
        <p className="text-center text-white ">
          Home&nbsp;/&nbsp;Capabiliotes&nbsp;/&nbsp;Cloud Application
        </p>

        <div className="text-content text-white">
          <h1 className="MainHeading">
            Upscale your <br /> Business with <br /> Cloud Solutions{" "}
          </h1>
          <p className="headPara">
            Delivering quality products with Product Engineering services.
          </p>
          <button className="btn btn-light">Request Consultation</button>
        </div>
      </div>
      <div className="row mainsection"></div>
      <div className="container">
        <div className="erpsoftware">
          <h3 className="Quality text-center">Cloud Application Services</h3>
          <p className="text-center">
            We deliver stable, secure, and versatile eCommerce solutions that
            drive customers’ satisfaction, boost sales, and help expand your
            business.{" "}
          </p>
        </div>
      </div>
      <div class="image-row">
        <div class="image-item">
          <img src={img1} alt="Image 1" />
          <div class="caption">
            <h4 className="border-top">Cloud Consultation</h4> <hr />
            <p>
              Transform your company with best-in-class cloud consultation
              services. Develop highly effective and reliable cloud computing
              solutions which provide competitive edge outcomes. Improve the
              efficiency and productivity of your organization by using the
              right cloud solutions. Understand
            </p>
          </div>
        </div>
        <div class="image-item">
          <img src={comp} alt="Image 2" />
          <div class="caption">Cloud Integration</div>
        </div>
        <div class="image-item">
          <img src={reactnative} alt="Image 3" />
          <div class="caption">Cloud-Native Development</div>
        </div>
        <div class="image-item">
          <img src={officemeet} alt="Image 3" />
          <div class="caption">Cloud Migration</div>
        </div>
        <div class="image-item">
          <img src={program} alt="Image 3" />
          <div class="caption">Cloud Maintenance</div>
        </div>
      </div>

      <div></div>
      <div className="skilled">
        <h3>Work with a Team of Skilled Professionals</h3>
        <p>
          Seamless collaboration, total transparency, and secure delivery.{" "}
          <br /> That’s our approach when crafting your application. A team with{" "}
          <br /> years of experience to suggest the best solution for you.
        </p>
      </div>

      <div class="image-section">
        <img src={process} alt="Your Image" />
      </div>

      <div class="container-icon">
        <h2>Technologies we work on</h2>
        <p>
          We use best-in-class tools, technologies, and modern approaches to
          help you stay ahead of your competitors.
        </p>
        <div class="icon-row">
          <img class="icon" src={salesforce} alt="Salesforce" />
          <img class="icon" src={microsoft} alt="Microsoft Dynamics 365" />
          <img class="icon" src={netcore} alt=".NET Core" />
          <img class="icon" src={js} alt="JavaScript" />
          <img class="icon" src={odoo} alt="Odoo" />
          <img class="icon" src={php} alt="PHP" />
        </div>
      </div>
      {/* <div className="container mt-5">
        <h2 className="heading">Industries We Serve</h2>
        <h6 className="subHead">
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </h6>
        <div class="container container-fluid">
          <div class="row">
            <div class="col-md-4 col-sm-12 column">
              <img src={pic1} />
              <h5 className="name">Fashions & Clothing</h5>
            </div>
            <div class="col-md-4  col-sm-12  column">
              <img src={pic3} />
              <h5 className="name">Retail</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={autoparts} />
              <h5 className="name">Auto Parts</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4  col-sm-12 column">
              <img src={pharma} />
              <h5 className="name">Pharmaceutical</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={apple} />
              <h5 className="name">Fitness & Nutrition</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={pic5} />
              <h5 className="name">Furniture</h5>
            </div>
          </div>
          <div className="row">
            <div class="col-md-4   col-sm-12 column">
              <img src={pic4} />
              <h5 className="name">Pharmaceutical</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={beauty} />
              <h5 className="name">Beauty And Personal Care</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={car} />
              <h5 className="name">Rental</h5>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="askaritechnology main">
          <div className="left-side">
            <img
              src={askarimainleft}
              alt="Your Image"
              style={{ width: "529px", height: "536px" }}
            />
          </div>
          <div className="right-side">
            <h2>Why Askari Technologies</h2>
            <p>
              Our work ethic, methodology, and dedication to your projects make
              us the perfect choice.
            </p>
            <p>
              We understand your requirements, dig deep into how to tailor a
              solution for you, build a team to work with you, and execute a
              robust project.
            </p>
            <button>Request Consultation</button>
          </div>
        </div>
      </div>
      <div className="row flags">
        <div className="col  coll">
          <img src={ame} className="coll" />
          <h4 className="flagT">United State</h4>
          <p className="para2">
            160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
          </p>
        </div>
        <div className="col coll">
          <img src={aus} className="coll" />
          <h4 className="flagT">Australia</h4>
          <p className="para2">
            160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
          </p>
        </div>
        <div className="col coll">
          <img src={pak} className="coll" />
          <h4 className="flagT">Pakistan</h4>
          <p className="para2">
            160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
          </p>
        </div>
        <div className="col coll">
          <img src={uae} className="coll" />
          <h4 className="flagT">UAE</h4>
          <p className="para2">Comming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Cloudsol;
