import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/ProductEng.css";

import bg from "../Assets/bg.png";

import pic1 from "../Assets/pic1.png";

import pic3 from "../Assets/pic3.png";
import pic4 from "../Assets/pic4.png";
import pic5 from "../Assets/pic5.png";
import autoparts from "../Assets/autoparts.png";
import pharma from "../Assets/pharma.png";
import apple from "../Assets/apple.png";
import beauty from "../Assets/beauty.png";
import car from "../Assets/car.png";

import check from "../Assets/check.png";

import mainleft from "../Assets/mainleftimg.png";
import pe1 from "../Assets/pe1.png";
import pe2 from "../Assets/pe2.png";
import pe3 from "../Assets/pe3.png";
import pe4 from "../Assets/pe4.png";
import pe5 from "../Assets/pe5.png";
import mainbg from "../Assets/maingbg.png";
import left2 from "../Assets/left2.png";
import microsoft from "../Assets/microsoft.png";
import js from "../Assets/js.png";
import php from "../Assets/php.png";

import salesforce from "../Assets/salesforce.png";
import odoo from "../Assets/odoo.png";
import netcore from "../Assets/netCore.png";

const ProductEng = () => {
  return (
    <div className="bodycontent">
      <div className="bannner-image">
        {/* <p className="text-center text-white ">
         
        </p> */}

        <div className="">
          <p style={{fontSize:"15px"}}>Future Technology Can Drive Your Business</p>
          <br></br>
          <h1 style={{fontWeight:"bolder",marginTop:"3%"}} >
            Product Engineering <br />
          </h1>
          <h1 style={{fontWeight:"bolder",marginTop:"3%"}} >
           Services
          </h1>
          <p style={{fontSize:"13px",marginBottom:"12%",marginTop:"-20px"}}>
            Using tried-and-true methods, you can turn your business idea into a{" "}
            <br />
            successful enterprise or expand it. We support business owners in
            achieving <br /> their objectives with greater success potential. We
            can be your one-stop shop <br /> for everything from product
            engineering advice to deployment and <br /> maintenance. We'll focus
            on the technological side of your business while you <br />{" "}
            concentrate on your own. We excel in complete product engineering
            and <br /> company expansion!
          </p>
          <button className="btn_pro">Consult Erp Expert</button>
        </div>
      </div>
      <div className="row mainsection">
        <div className="col">
          <div class="image-container">
            <img src={bg} className="bg-image" alt="JPEG Image" />
            <img src={mainleft} alt="PNG Image" class="overlay-image"  style={{width:"90%"}}/>
          </div>
        </div>
        <div className="col servicespara" >
          <h3  >
            Utilize Our Software Product <br /> Engineering Services to Develop{" "}
            <br /> Future Products
          </h3>
          <p>
            We do more than just develop software. We are a group of more than
            300 skilled developers, business analysts, strategy planners,
            creative designers, problem solvers, and engagement-enhancing
            marketers who produce transformative outcomes for the brand-new
            digital world.
          </p>
          <p>
        
            By utilizing product engineering best practices, adopting
            cutting-edge technologies, providing competencies and talent, and
            working with you, we complement your digital product engineering
            efforts.
          </p>

          <p>
            Our administrations ride the entire item designing lifecycle, from
            the ideation stage to item plan and improvement and from help to
            showcase development. Our digital product engineering services cover
            a wide range of services, including re-engineering products to meet
            cost, feature, and performance demands from the market.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="align_product">
        <h3 >Our Digital Product Engineering Services</h3>
          <p >
            We offer custom ERP solutions to businesses of all sizes and sectors
            so you can optimize your applications flawlessly.  Attain
            smooth communication and maximum productivity with best-in-class ERP
            systems development solutions.
          </p>
        </div>
      </div>
      <div class="image-row container">
        <div class="image-item">
          <img src={pe1} alt="Image 1" />
          <div class="caption">
          <div class="caption">Product Development </div>
          </div>
        </div>
        <div class="image-item">
          <img src={pe2} alt="Image 2" />
          <div class="caption">Product Development </div>
        </div>
        <div class="image-item">
          <img src={pe3} alt="Image 3" />
          <div class="caption">Product Testing </div>
        </div>
        <div class="image-item">
          <img src={pe4} alt="Image 4" />
          <div class="caption">Product Re-Engineering</div>
        </div>
        <div class="image-item">
          <img src={pe5} alt="Image 5" />
          <div class="caption">Product Marketing</div>
        </div>
      </div>
      <section className="contact-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 conact-c1">
              <h4 className="contact-head ">
                Get 30-Minute <br></br> Free Strategy<br></br>  Consultation
              </h4>
              <p className="contact-para">
                Let’s discuss how Biztech can help you convert <br></br> breakthrough
                ideas into tangible outcomes. <br></br>Take the first step with our
                software product <br></br> engineering services today!
              </p>
            </div>
            <div className="col-lg-6 conact-c2">
              <h1 className="conatact-tittle ">Get Started</h1>

              <form>
                <div >
                  <label for="exampleInputName" class="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    class="form-control"
                    id="exampleInputname"
                    aria-describedby="nameHelp"
                    placeholder="Enter Your Name"
                    className="input_pro_eng"
                  />
                </div>
                <div >
                  <label for="exampleInputName" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputname"
                    aria-describedby="nameHelp"
                    placeholder="Enter Your Email"
                    className="input_pro_eng"
                  />
                </div>
                <div >
                  <label for="exampleInpuEmail" class="form-label">
                    Phone Number
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail"
                    placeholder="Enter Your Phone Number"
                    className="input_pro_eng"
                  />
                </div>

                <div >
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    
                    class="form-control"
                    id="exampleInputEmail"
                    placeholder="Give us a brief about your requirment"
                    className="input_pro_eng_inp"
                  />
                </div>
                <button type="submit" class="btn_get_form">
                  Get Started
                </button>
                <p >
                
                  <span className="guaranteed" > 100% Guaranteed </span> Security
                  of the Information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <h1 className="heading">Industries We Serve</h1>
        <h6 className="subHead mb-5">
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </h6>
        <div class="container container-fluid">
          <div class="row">
            <div class="col-md-4 col-sm-12 column border_right_bottom">
              <img src={pic1} />
              <h5 className="name">Fashions & Clothing</h5>
            </div>
            <div class="col-md-4  col-sm-12  column border_right_bottom">
              <img src={pic3} />
              <h5 className="name">Retail</h5>
            </div>
            <div class="col-md-4  col-sm-12 column border_bottom">
              <img src={autoparts} />
              <h5 className="name">Auto Parts</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4  col-sm-12 column border_right_bottom">
              <img src={pharma} />
              <h5 className="name">Pharmaceutical</h5>
            </div>
            <div class="col-md-4  col-sm-12 column border_right_bottom">
              <img src={apple} />
              <h5 className="name">Fitness & Nutrition</h5>
            </div>
            <div class="col-md-4  col-sm-12 column border_bottom">
              <img src={pic5} />
              <h5 className="name">Furniture</h5>
            </div>
          </div>
          <div className="row">
            <div class="col-md-4   col-sm-12 column border_right">
              <img src={pic4} />
              <h5 className="name">Pharmaceutical</h5>
            </div>
            <div class="col-md-4  col-sm-12 column border_right">
              <img src={beauty} />
              <h5 className="name">Beauty And Personal Care</h5>
            </div>
            <div class="col-md-4  col-sm-12 column ">
              <img src={car} />
              <h5 className="name">Rental</h5>
            </div>
          </div>
        </div>
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

      <div>
        <div class="row ">
          <div class="col-md-12">
            <div class="responsive-section">
              <img src={mainbg} alt="Coding Image" class="background-image" />
              <div class="overlay"></div>
              <div class="content">
                <h2 class="codheading">
                  Take Expert Consultation and Increase Chances of Business
                  Success
                </h2>
                <p class="paragraph">
                  An experienced product engineering company transforms your
                  business performance and cultivates customer-centric
                  approaches into strategic business plans through constant
                  product innovations.
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
