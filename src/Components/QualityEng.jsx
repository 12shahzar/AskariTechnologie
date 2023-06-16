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
const QualityEng = () => {
  return (
    <div className="bodycontent">
      <div className="bannner-image">
        <p className="text-center text-white ">
          Home&nbsp;/&nbsp;Capabiliotes&nbsp;/&nbsp;Quality Engineering
        </p>

        <div className="text-content text-white">
          <h1 className="MainHeading">
            {" "}
            Your Products
            <br /> Our Assurance{" "}
          </h1>
          <p className="headPara">
            Delivering quality products with Product Engineering services.
          </p>
          <button className="btn btn-light">Request Consultation</button>
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
        <div className="container">
          <div className="erpsoftware">
            <h3 className="Quality">Quality Engineering Services</h3>
          </div>
        </div>
      </div>
      <div className="image-row">
        <div className="image-item">
          <img src={img1} alt="Image 1" />
          <div className="caption">
            <h4 className="border-top">Quality Engineering Strategy</h4> <hr />
            <p>
              Quality Check + Quality Assurance = Quality Engineering. Our
              full-stack quality engineers are experts in code revisions,
              functional testing, test performance, test security. We strive to
              understand your business logic and deliver quality applications
              tailored to your expectations. Agile and DevOps Compatible
              Strategies QE Best Practices
            </p>
          </div>
        </div>
        <div className="image-item">
          <img src={img2} alt="Image 2" />
          <div className="caption">Quality Assurance</div>
        </div>
        <div className="image-item">
          <img src={img3} alt="Image 3" />
          <div className="caption">Test Automation</div>
        </div>
      </div>

      <div></div>
      <div className="container">
        <div className="row">
          <div className="skilled">
            <h3>Work with a Team of Skilled Professionals</h3>
            <p>
              Seamless collaboration, total transparency, and secure delivery.{" "}
              <br /> That’s our approach when crafting your application. A team
              with <br /> years of experience to suggest the best solution for
              you.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="image-section">
            <img src={process} alt="Your Image" />
          </div>
        </div>
      </div>

      <div className="container-icon">
        <h2>Technologies we work on</h2>
        <p>
          We use best-in-className tools, technologies, and modern approaches to
          help you stay ahead of your competitors.
        </p>
        <div className="icon-row">
          <img className="icon" src={salesforce} alt="Salesforce" />
          <img className="icon" src={microsoft} alt="Microsoft Dynamics 365" />
          <img className="icon" src={netcore} alt=".NET Core" />
          <img className="icon" src={js} alt="JavaScript" />
          <img className="icon" src={odoo} alt="Odoo" />
          <img className="icon" src={php} alt="PHP" />
        </div>
      </div>

      <div className="container">
        {/* <div className="row">
  <div className="" >
    <div className="container">
    
    </div>

  
</div>
  </div> */}
        <div className="row">
          <div className="container">
            <h2 className="HowWeGo">How we go about testing your Project</h2>
            <div className="card-row cardPadinng">
              <div className="card" style={{ marginBottom: "50px" }}>
                <img src={Planning} alt="Card 1" style={{ height: "300px" }} />
                <div style={{ height: "200px" }}>
                  <h3
                    style={{
                      color: "#3D4DAE",
                      fontFamily:
                        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    Planning
                  </h3>
                  <p>
                    LAfter boarding, we review the initial project requirements
                    and evaluate what needs to be done. After understanding the
                    project, we create a test plan for it.
                  </p>
                </div>
              </div>
              <div className="card" style={{ marginBottom: "50px" }}>
                <img src={Design} alt="Card 2" style={{ height: "300px" }} />
                <div style={{ height: "200px" }}>
                  <h3
                    style={{
                      color: "#3D4DAE",
                      fontFamily:
                        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    Design
                  </h3>
                  <p>
                    Then, depending on whether the QA process should be manual
                    or automated, we build test cases. An automated test case is
                    created with a script, while a manual test is created.{" "}
                  </p>
                </div>
              </div>
              <div className="card" style={{ marginBottom: "50px" }}>
                <img src={Implement} alt="Card 3" style={{ height: "300px" }} />
                <div style={{ height: "200px" }}>
                  <h3
                    style={{
                      color: "#3D4DAE",
                      fontFamily:
                        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    Implementation
                  </h3>
                  <p>
                    We execute the test according to the planned design. Manual
                    tests are done by manual checking of each component, and
                    automated testing is done by running the script.
                  </p>
                </div>
              </div>
              <div className="card" style={{ marginBottom: "50px" }}>
                <img src={Stable} alt="Card 4" style={{ height: "300px" }} />
                <div style={{ height: "200px" }}>
                  <h3
                    style={{
                      color: "#3D4DAE",
                      fontFamily:
                        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    Stabilization / Delivery{" "}
                  </h3>
                  <p>
                    Lastly, fixed bugs are rechecked for a bug-free project.
                    When required we perform regression testing based on
                    previous sprints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
<div className="askaritechnology main">
  <div className="row">
  <div className="col askaritechnology ">
  <div className="left-side">
    <img src={askarimainleft} alt="Your Image" className="leftImage" />
  </div>
  </div>
<div className="col  askaritechnology ">
 <div className="right-side">
    <h2>Why Askari Technologies</h2>
    <p>
      Our work ethic, methodology, and dedication to your projects make us the perfect choice.
    </p>
    <p>
      We understand your requirements, dig deep into how to tailor a solution for you, build a team to work with you, and execute a robust project.
    </p>
    <button>Request Consultation</button>
  </div>
</div>
</div>
</div>
</div> */}
      <div className="container">
        <div className="row flags">
          <div className="col-md-3 col-sm-6 coll">
            <img src={ame} className="coll" />
            <h4 className="flagT">United State</h4>
            <p className="para2">
              160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
            </p>
          </div>
          <div className="col-md-3  col-sm-6 col-sm-6 coll">
            <img src={aus} className="coll" />
            <h4 className="flagT">Australia</h4>
            <p className="para2">
              160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
            </p>
          </div>
          <div className="col-md-3 col-sm-6 coll">
            <img src={pak} className="coll" />
            <h4 className="flagT">Pakistan</h4>
            <p className="para2">
              160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
            </p>
          </div>
          <div className="col-md-3 col-sm-6 coll">
            <img src={uae} className="coll" />
            <h4 className="flagT">UAE</h4>
            <p className="para2">Comming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityEng;
