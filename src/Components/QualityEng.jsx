import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/QualityEng.css";
import leftmain from "../Assets/leftmain.png";
import bg from "../Assets/bg.png";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.jpg";
import img5 from "../Assets/5.jpg";
import pic1 from "../Assets/pic1.png";
import pic2 from "../Assets/pic2.png";
import pic3 from "../Assets/pic3.png";
import pic4 from "../Assets/pic4.png";
import pic5 from "../Assets/pic5.png";
import autoparts from "../Assets/autoparts.png";
import pharma from "../Assets/pharma.png";
import apple from "../Assets/apple.png";
import beauty from "../Assets/beauty.png";
import car from "../Assets/car.png";
import coding from "../Assets/coding.png";
import check from "../Assets/check.png";
import bg2 from "../Assets/bg2.png";
import office from "../Assets/office.png";
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
import Planning from "../Assets/11.png";
import Design from "../Assets/22.png";
import Stable from "../Assets/44.png";
import Implement from "../Assets/33.png";
import { HashLink } from "react-router-hash-link";
import Technologywework from "./Technologywework";

const QualityEng = () => {
  return (
    <div className="bodycontent">
      <div className="bannner-image-qua">
        {/* <p className="text-center text-white ">
         
        </p> */}

        <div className="">
          <h1 style={{ fontWeight: "bolder", marginTop: "3%" }}>
            Your Products <br />
          </h1>
          <h1 style={{ fontWeight: "bolder", marginTop: "3%" }}>
            Our Assurance
          </h1>
          <br></br>
          <p
            style={{
              fontSize: "13px",
              marginBottom: "7%",
              marginTop: "-20px",
            }}
          >
           Delivering quality products with Product Engineering services.
          </p>
          <HashLink to="#contact-us">
            <button className="btn_pro" style={{ marginTop: "70px" }}>
              Request Consultation{" "}
            </button>
          </HashLink>
        </div>
      </div>
      <div className="row mainsection">
        <div className="col">
          {/* <div className="image-container">
            <img src={bg} className="bg-image" alt="JPEG Image" />
          </div> */}
        </div>
      </div>
      <div className="container">
        <div className="skilled44">
          <h1>Quality Engineering Services</h1>
        </div>
      </div>
      <div className="image-row">
        
        <div className="image-item">
          <img src={img1} alt="Image 1" />
           
          
         
        </div>
        <div className="image-item">
          <img src={img2} alt="Image 2" />
         
        </div>
        <div className="image-item">
          <img src={img3} alt="Image 3" />
      
        </div>
        <div className="image-item">
          <img src={img3} alt="Image 3" />
         
        </div>
        <div className="image-item">
          <img src={img3} alt="Image 3" />
          
        </div>
      </div>

      <div></div>
      <div className="container">
        <div className="row">
          <div className="skilled">
            <h3>Work with a Team of Skilled Professionals</h3>
            <p>
              Seamless collaboration, total transparency, and secure delivery.
              That’s our approach when crafting your application. A team with
              years of experience to suggest the best solution for you.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="image-section">
            <img src={process} alt="Your Image" />
          </div>
        </div>
      </div>

      <Technologywework/>
{/* cards */}


<div className="container cards_qa">
<center><h1 className="heading_cards_qa">How we go about testing your Project</h1></center>
<div className="main_card_section_qa">
<div className="inner_card_qa">
  <img src={require('../Assets/card22.png')} style={{height:"40%",width:"100%"}}/>
<div className="content_qa_card">
  <h5>
  Planning
  </h5>
  <p>
  After boarding, we review the initial project requirements and evaluate what needs to be done. After understanding the project, we create a test plan for it.
  </p>


</div>


</div>

<div className="inner_card_qa">
  <img src={require('../Assets/crad23.png')} style={{height:"40%",width:"100%"}}/>
<div className="content_qa_card">
  <h5>
  Design
  </h5>
  <p>
  Then, depending on whether the QA process should be manual or automated, we build test cases. An automated test case is created with a script, while a manual test is created using a variety of ways.
</p>
</div>


</div>
<div className="inner_card_qa">
  <img src={require('../Assets/crad24.png')} style={{height:"40%",width:"100%"}}/>
<div className="content_qa_card">
  <h5>
  Implementation
  </h5>
  <p>
  We execute the test according to the planned design. Manual tests are done by  checking of each component, and automated testing is done by running the script. Then bugs are reported to the developers.  </p>


</div>


</div>
<div className="inner_card_qa">
  <img src={require('../Assets/crad25.png')} style={{height:"40%",width:"100%"}}/>
<div className="content_qa_card">
  <h5>
  Stabilization / Delivery 
  </h5>
  <p>
  Lastly, fixed bugs are rechecked for a bug-free project. When required we perform regression testing based on previous sprints. The last step is user acceptance testing and if everything is okay.  </p>


</div>


</div>


</div>



</div>













      <div className="container">
        <div className="askaritechnology main">
          <div className="row">
            <div className="col askaritechnology ">
              <div className="left-side">
                <img
                  src={askarimainleft}
                  alt="Your Image"
                  className="leftImage"
                />
              </div>
            </div>
            <div className="col  askaritechnology ">
              <div className="right-side">
                <h3>Why Askari Technologies</h3>
                <p>
                  Our work ethic, methodology, and dedication to your projects
                  make us the perfect choice.
                </p>
                <p>
                  We understand your requirements, dig deep into how to tailor a
                  solution for you, build a team to work with you, and execute a
                  robust project.
                </p>
                <button style={{ border: "none" }}>Request Consultation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityEng;
