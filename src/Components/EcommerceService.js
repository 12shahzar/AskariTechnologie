import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/ProductEng.css";
import { HashLink } from 'react-router-hash-link';
import left2_ecom from '../Assets/mask_ecom.png'
import Technologywework from "../Components/Technologywework.jsx"
import Endtwo from "../Components/Endtwo.jsx"
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

import ecommerce_capab from "../Assets/ecommerce_capab.png";
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

const EcommerceService = () => {
  return (
  
    <div className="bodycontent">
      <div className="bannner-image">
        {/* <p className="text-center text-white ">
         
        </p> */}

        <div className="">
          <p style={{fontSize:"15px"}}>End to End</p>
          <br></br>
          <h1 style={{fontWeight:"bolder",marginTop:"3%"}} >
    
Ecommerce Development <br />
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
          <HashLink to="#contact-us">
            <button className="btn_pro">Request Consultation</button>
            </HashLink>
          
        </div>
      </div>
      <div className="row mainsection">
        <div className="col">
          <div class="image-container">
            
            <img src={ecommerce_capab} alt="PNG Image" class="overlay-image"  style={{width:"100%",height:"60%",marginTop:'20%'}}/>
          </div>
        </div>
        <div className="col servicespara" >
          <h3  >
          Tailoring Ecommerce  <br /> Development to Maximize {" "}
            <br /> Profits
          </h3>
          <p>
          Want to revolutionize your digital presence? We can accelerate your business with our custom eCommerce solutions and services. Our eCommerce experts can assist you in integrating features, customizing the frontend, and developing an e-store from scratch for Magento, Shopify, Drupal, and other platforms.
At Biztech, 
          </p>
          <p>
        
          we provide bespoke development services to ensure that an eCommerce solution meets your business needs. While developing your e-store, our developers consider all the aspects related to design, features, tech stack, security, integrations, etc., to provide you with a fully functional e-store without any bugs or glitches.
          </p>

          
        </div>
      </div>
      <div className="container">
        <div className="align_product" style={{display:"flex",flexDirection:"column"}}>
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
<Endtwo/>
      
      
      
    </div>
  );
};

export default EcommerceService;
