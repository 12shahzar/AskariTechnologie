import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ProductEng.css";

import bg from "../assets/bg.png";

import pic1 from "../assets/pic1.png";

import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import autoparts from "../assets/autoparts.png";
import pharma from "../assets/pharma.png";
import apple from "../assets/apple.png";
import beauty from "../assets/beauty.png";
import car from "../assets/car.png";

import check from "../assets/check.png";

import mainleft from "../assets/mainleftimg.png";
import pe1 from "../assets/pe1.png";
import pe2 from "../assets/pe2.png";
import pe3 from "../assets/pe3.png";
import pe4 from "../assets/pe4.png";
import pe5 from "../assets/pe5.png";
import mainbg from "../assets/maingbg.png";
import left2 from "../assets/left2.png";
import microsoft from "../assets/microsoft.png";
import js from '../assets/js.png'
import php from "../assets/php.png";

import salesforce from "../assets/salesforce.png"
import odoo from "../assets/odoo.png";
import netcore from "../assets/netcore.png";


const ProductEng = () => {
  return (
    <div className="bodycontent">
      <div className="bannner-image">
        {/* <p className="text-center text-white ">Home/Capabilities/Product Engineering</p> */}

        <div className="text-content text-white">
          <h5>Future Technology Can Drive Your Business</h5>
          <h2>Product Engineering <br /> Services</h2>
          <p>
            Using tried-and-true methods, you can turn your business idea into a <br />
            successful enterprise or expand it. We support business owners in
            achieving <br />  their objectives with greater success potential. We can be
            your one-stop shop <br /> for everything from product engineering advice to
            deployment and <br /> maintenance. We'll focus on the technological side of
            your business while you <br /> concentrate on your own. We excel in
            complete product engineering and  <br /> company expansion!
          </p>
          <button className="btn btn-light">Consult Erp Expert</button>
        </div>
      </div>
      <div className="row mainsection">
        <div className="col">
          <div class="image-container">
            <img src={bg} className="bg-image" alt="JPEG Image" />
            <img src={mainleft} alt="PNG Image" class="overlay-image" />
          </div>
        </div>
        <div className="col servicespara">
          <h3 className="text ">
            Utilize Our Software Product <br /> Engineering Services to Develop <br /> Future
            Products
          </h3>
          <p>
          We do more than just develop software. We are a group of more than 300 skilled developers, business analysts, strategy planners, creative designers, problem solvers, and engagement-enhancing marketers who produce transformative outcomes for the brand-new digital world.
          </p>
          <p>
            {" "}
            By utilizing product engineering best practices, adopting cutting-edge technologies, providing competencies and talent, and working with you, we complement your digital product engineering efforts.
          </p>

          <p>
          Our administrations ride the entire item designing lifecycle, from the ideation stage to item plan and improvement and from help to showcase development.
Our digital product engineering services cover a wide range of services, including re-engineering products to meet cost, feature, and performance demands from the market.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="erpsoftware">
          <h3 className="">Our Product Engineering Services</h3>
          <p className="">
            We offer custom ERP solutions to businesses of all sizes and sectors
            so you can optimize your applications flawlessly. <br /> Attain
            smooth communication and maximum productivity with best-in-class ERP
            systems development solutions.
          </p>
        </div>
      </div>
      <div class="image-row">
        <div class="image-item">
          <img src={pe1} alt="Image 1" />
          <div class="caption">
            <h4>Product Ideation And Prototyping </h4> <hr />
            <p>
            Get expert consultancy to validate your concept better, along with assistance with the plan, prototype, and next market launch.
            </p>
          </div>
        </div>
        <div class="image-item">
          <img src={pe2} alt="Image 2" />
          <div class="caption">Product Development Services</div>
        </div>
        <div class="image-item">
          <img src={pe3} alt="Image 3" />
          <div class="caption">Product Testing & Maintenance</div>
        </div>
        <div class="image-item">
          <img src={pe4} alt="Image 4" />
          <div class="caption">Product 
Re-Engineering</div>
        </div>
        <div class="image-item">
          <img src={pe5} alt="Image 5" />
          <div class="caption">Product Marketing</div>
        </div>
      </div>
      <section className="contact-us">
        <div className="container-fluid">
          <div className="row  ">
            <div className="col-lg-6 conact-c1">
              <h4 className="contact-head mt-5">
                Get 30-Minute Free Strategy Consultation
              </h4>
              <p className="contact-para">
                Let’s discuss how Biztech can help you convert breakthrough
                ideas into tangible outcomes. Take the first step with our
                software product engineering services today!
              </p>
            </div>
            <div className="col-lg-6 conact-c2">
              <h3 className="conatact-tittle p-2">Get Started</h3>

              <form>
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    class="form-control"
                    id="exampleInputname"
                    aria-describedby="nameHelp"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInpuEmail" class="form-label">
                    Phone Number
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail"
                    placeholder="Enter Your Phone Number"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Give Us a brief about your requirements"
                  ></textarea>
                </div>
                <button type="submit" class="btn-started">
                  Get Started
                </button>
                <p className=" mt-4">
                  {" "}
                  <span className="guaranteed"> 100% Guaranteed </span> Security
                  of the Information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
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
      </div>




      <div class="container-icon">
    <h2>Technologies we work on</h2>
    <p>We use best-in-class tools, technologies, and modern approaches to help you stay ahead of your competitors.</p>
    <div class="icon-row">
      <img class="icon" src={salesforce} alt="Salesforce"/>
      <img class="icon" src={microsoft} alt="Microsoft Dynamics 365"/>
      <img class="icon" src={netcore} alt=".NET Core"/>
      <img class="icon" src={js }alt="JavaScript"/>
      <img class="icon" src={odoo} alt="Odoo"/>
      <img class="icon" src={php} alt="PHP"/>
    </div>
  </div> 


      <div>
        <div class="row ">
          <div class="col-md-12">
            <div class="responsive-section">
              <img src={mainbg} alt="Coding Image" class="background-image" />
              <div class="overlay"></div>
              <div class="content">
                <h2 class="codheading">
                Take Expert Consultation and Increase Chances of Business Success
                </h2>
                <p class="paragraph">
                An experienced product engineering company transforms your business performance and cultivates customer-centric approaches into strategic business plans through constant product innovations.
                </p>
                <div class="row checkicons">
                  <div class="col-lg-4 col-md-6">
                    <div class="feature">
                      <img src={check} alt="Check Icon" class="check-icon" />
                      <p class="feature-text">Rich Industry Experience</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="feature">
                      <img src={check} alt="Check Icon" class="check-icon" />
                      <p class="feature-text">Flexible Hiring Models</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="feature">
                      <img src={check} alt="Check Icon" class="check-icon" />
                      <p class="feature-text">Flexible Timezone</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="feature">
                      <img src={check} alt="Check Icon" class="check-icon" />
                      <p class="feature-text">Improved ROI</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="feature">
                      <img src={check} alt="Check Icon" class="check-icon" />
                      <p class="feature-text">Support And Maintenance</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="feature">
                      <img src={check} alt="Check Icon" class="check-icon" />
                      <p class="feature-text">Privacy & Confidentiality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="left">
          <img src={left2} alt="Image" />
        </div>
        <div class="right">
          <h2>
            What You Get With Competent ERP <br /> Development Company
          </h2>
          <p>
            We guarantee diverse functionalities that deliver smooth customer
            experience and polished brand visibility. Here are the benefits of
            partnering with us!
          </p>

          <ul>
            <li>Proficient and Certified ERP Developers</li>
            <li>On-demand Scalability</li>
            <li>Flexible Engagement Models</li>
            <li>Competitive Development Cost</li>
            <li>On-time Delivery</li>
            <li>Agile Methodology</li>
            <li>Code Authorization</li>
            <li>Collaborative and Communicative Approach</li>
            <li>100% Customer Satisfaction</li>
            <li>24*7 Support and Maintenance</li>
          </ul>
        </div>
      </div>
      <section class="custom-hero-section">
        <div class="custom-hero-content">
          <h3>Transform Your Business With Robust ERP Development Services</h3>
          <p>
            With our ERP proficiency and technological know-how, we dig out the
            key needs and propose a long-lasting solution for your enterprise.
            Leverage our experience by joining forces with us!
          </p>
          <button class="custom-button btn btn-light">
            Schedule A Call With ERP Experts <span>&#8594;</span>
          </button>
        </div>
      </section>
    </div>
  );
};



export default ProductEng;
