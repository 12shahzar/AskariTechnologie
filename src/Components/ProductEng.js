import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/ProductEng.css";
import { HashLink } from 'react-router-hash-link';
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
          <h1 style={{fontWeight:"bolder",marginTop:"3%"}} className="monile_mar" >
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
            on the technological side of your business while you company expansion!
          </p>
          <HashLink to="#contact-us">
            <button className="btn_pro">Consult Erp Expert</button>
            </HashLink>
          
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
        <div className="align_product" style={{display:'flex',flexDirection:'column'}}>
        <h3 style={{alignSelf:"center"}} >Our Digital Product Engineering Services</h3>
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
      
    </div>
    <div class="image-item">
      <img src={pe2} alt="Image 2" />
    </div>
    <div class="image-item">
      <img src={pe3} alt="Image 3" />
     
    </div>
    <div class="image-item">
      <img src={pe4} alt="Image 4" />
     
    </div>
    <div class="image-item">
      <img src={pe5} alt="Image 5" />
     
    </div>
  </div>
      <section className="contact-us" id="contact-us">
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
                  <label for="exampleInputName" class="form-label" className="align_contact_lab">
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
                  <label for="exampleInputName" class="form-label" className="align_contact_lab">
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
                  <label for="exampleInpuEmail" class="form-label" className="align_contact_lab">
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
                  <label for="exampleFormControlTextarea1" class="form-label" className="align_contact_lab">
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

      <section className="your_patner_pro ">
        <h2>Your Partner at Each Stage of PDLC</h2>
        <p>We provide comprehensive software engineering services that address the technology stack throughout the product lifecycle, delivering increased revenue and service levels.</p>
          
          {/* lower cards */}
          <div className="container card_pro_eng_botm">
            <div className="sub_card_pro_eng_botm">
              <div className="sub_card_pro_eng_head">
                    <img  src={require("../Assets/card_sub1.png")}/>
              </div>
              <div className="sub_card_pro_eng_footer">
                <h5 className="sub_card_heading">
                Product Consulting
                </h5>
                <p className="para_pro_card_eng">
                 product engineering of human-centered design. We evaluate all the key aspects to ensure you have the perfect product interface with wireframes, prototypes, and minimum viable products. With appealing UI/UX and easy-to-navigate systems, we provide a one-of-a-kind experience to your users.
                </p>


              </div>
              
             
             

            </div>
            <div className="sub_card_pro_eng_botm">
              <div className="sub_card_pro_eng_head">
                    <img  src={require("../Assets/card_sub2.png")}/>
              </div>
              <div className="sub_card_pro_eng_footer">
                <h5 className="sub_card_heading">
                Product Consulting
                </h5>
                <p className="para_pro_card_eng">
                 product engineering of human-centered design. We evaluate all the key aspects to ensure you have the perfect product interface with wireframes, prototypes, and minimum viable products. With appealing UI/UX and easy-to-navigate systems, we provide a one-of-a-kind experience to your users.
                </p>


              </div>
              
             
             

            </div>
            
            <div className="sub_card_pro_eng_botm">
              <div className="sub_card_pro_eng_head">
                    <img  src={require("../Assets/crad_sub3.png")}/>
              </div>
              <div className="sub_card_pro_eng_footer">
                <h5 className="sub_card_heading">
                Product Consulting
                </h5>
                <p className="para_pro_card_eng">
                 product engineering of human-centered design. We evaluate all the key aspects to ensure you have the perfect product interface with wireframes, prototypes, and minimum viable products. With appealing UI/UX and easy-to-navigate systems, we provide a one-of-a-kind experience to your users.
                </p>


              </div>
              
             
             

            </div>
            <div className="sub_card_pro_eng_botm">
              <div className="sub_card_pro_eng_head">
                    <img  src={require("../Assets/crad_sub4.png")}/>
              </div>
              <div className="sub_card_pro_eng_footer">
                <h5 className="sub_card_heading">
                Product Consulting
                </h5>
                <p className="para_pro_card_eng">
                 product engineering of human-centered design. We evaluate all the key aspects to ensure you have the perfect product interface with wireframes, prototypes, and minimum viable products. With appealing UI/UX and easy-to-navigate systems, we provide a one-of-a-kind experience to your users.
                </p>


              </div>
              
             
             

            </div>
            <div className="sub_card_pro_eng_botm">
              <div className="sub_card_pro_eng_head">
                    <img  src={require("../Assets/crad_sub5.png")}/>
              </div>
              <div className="sub_card_pro_eng_footer">
                <h5 className="sub_card_heading">
                Product Consulting
                </h5>
                <p className="para_pro_card_eng">
                 product engineering of human-centered design. We evaluate all the key aspects to ensure you have the perfect product interface with wireframes, prototypes, and minimum viable products. With appealing UI/UX and easy-to-navigate systems, we provide a one-of-a-kind experience to your users.
                </p>


              </div>
              
             
             

            </div>

          </div>



      </section>

      <div className="bg_baneer_proemg">
       
      </div>
      {/* <div class="section">
        
          <img src={left2} alt="Image" />
       
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
      </div> */}
      <section className="end_pro">
        <div className="end_pro_left">
          <img src={left2} style={{width:"100%",height:"100%"}} />
        </div>
        <div className="end_pro_right">
          <div className="right_pro_end">
            <h3 style={{color:"#3D4DAE",fontWeight:'bolder'}}>
            Askari Technology - Your Trusted Product Engineering Services Company
            </h3>
            <p>We have a proven track record of helping companies from different verticals navigate digital platforms. We can help you, too, with our engineering IT services.</p>
         <ul style={{listStyle:'outside'}}>
           <li>Product Experts</li>
           <li>On-demand Scalability</li>
           <li>Flexible Engagement Models</li>
           <li>Cost-Effective Solution</li>
           <li>On-time Delivery</li>
           <li>Agile Methodology</li>
           <li>Code Authorization</li>
           <li>Streamlined Management</li>
           <li>100% Customer Satisfaction</li>
           <li>24*7 Support and Maintenance</li>


         </ul>
         
         
          </div>
        </div>



      </section>
      <section class="custom-hero-section">
        <div class="custom-hero-content">
          <h3 >Engineering Services for Faster Time-to-Market</h3>
          <p>
          Powered by strong product engineering services and combined with new-gen technologies, we help businesses design and build a future-ready solution.
        <br></br> <br></br> Take advantage of limitless possibilities by partnering with us!
          </p>
          <HashLink to="#contact-us">
             <button className="custom-button">
          Schedule A Call <span>&#8594;</span>
          </button>
            </HashLink>
         
        </div>
      </section>
    </div>
  );
};

export default ProductEng;
