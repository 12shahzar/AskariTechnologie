import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/ProductEng.css";
import { HashLink } from 'react-router-hash-link';
import bg from "../Assets/bg.png";
import Technologywework from "../Components/Technologywework.jsx"
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
import Contactsub from "./Contactsub";

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
          Software Product  <br />
          </h1>
          <h1 style={{fontWeight:"bolder",marginTop:"3%"}} >
          Engineering Services
          </h1>
          <p style={{fontSize:"13px",marginBottom:"12%",marginTop:"-20px"}}>
          Empower your business with cutting-edge <br></br>technology for future growth and success. Transform your business idea<br></br> into a thriving enterprise or expand your existing business using <br></br> tried-and-tested methodologies.

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
            <img src={mainleft} alt="PNG Image" class="overlay-image2"  style={{width:"90%"}}/>
          </div>
        </div>
        <div className="col servicespara" >
          <h3  >
          Leverage our software product  <br /> engineering services to develop 
            <br /> cutting-edge next-generation product
          </h3>
          <p>
          We are not simply a software development company. We are a dedicated team of over 300 skilled professionals, including developers, business analysts, strategy planners, creative designers, problem solvers, and marketing specialists. Together, we deliver transformative outcomes for the evolving digital landscape.

          </p>
          <p>
          By collaborating with you, we enhance your digital product engineering endeavors by adopting cutting-edge technologies, providing expertise and talent, and leveraging best practices in product engineering.
          </p>

          <p>
          Our services cover the entire product engineering lifecycle, spanning from ideation and product design to development, support, and market growth.
          </p>
        </div>
        
      </div>
      <div className="container">
        <div className="align_product" style={{display:'flex',flexDirection:'column'}}>
        <h3 style={{alignSelf:"center"}} >Services We Offer for Digital Product Engineering</h3>
          <p >
          Our software engineering services encompass end-to-end support for enterprises in creating, deploying, and maintaining their product ideas, ensuring their profitability in business ventures
          </p>
        </div>
      </div>
      <div class="image-row container">
    <div class="image-item">
      <img src={pe1} alt="Image 1" />
      {/* <div>
        <h5>

        </h5>
        <p>

        </p>
      </div> */}
      
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
      <Contactsub/>
      <Technologywework/>
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
