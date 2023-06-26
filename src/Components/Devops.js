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
import Technologywework from "../Components/Technologywework.jsx";
import pe1 from "../Assets/pe1.png";
import pe2 from "../Assets/pe2.png";
import pe3 from "../Assets/pe3.png";
import pe4 from "../Assets/pe4.png";
import pe5 from "../Assets/pe5.png";

const Devops = () => {
  return (
    <div className="bodycontent">
      <div className="bannner-image-devo">
        {/* <p className="text-center text-white ">
         
        </p> */}

        <div className="">
          <h1 style={{ fontWeight: "bolder", marginTop: "3%" }}>
            Automate <br />
          </h1>
          <h1 style={{ fontWeight: "bolder", marginTop: "3%" }}>Development</h1>
          <br></br>
          <p
            style={{
              fontSize: "13px",
              marginBottom: "4%",
              marginTop: "-20px",
            }}
          >
            Using tried-and-true methods, you can turn your business idea into a{" "}
            <br />
            successful enterprise or expand it. We support business owners in
            achieving <br /> their objectives with greater success potential. We
            can be your one-stop shop <br />
          </p>
          <HashLink to="#contact-us">
            <button className="btn_pro" style={{ marginTop: "70px" }}>
              Request Consultation
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
          <center>
            <h1>Our DevOps Services</h1>
          </center>
        </div>
      </div>
      <div class="container">
        <div class="row m-auto">
          <div class="col-md-2 col-sm-6 m-auto">
            <div class="box">
              <img src={pe1} />
              <div class="box-content">
                <h3 class="title">Product Ideation And Prototyping</h3>
                <span class="post">
                  Get expert consultancy to validate your concept better, along
                  with assistance with the plan, prototype, and next market
                  launch.
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-6 m-auto">
            <div class="box">
              <img src={pe2} />
              <div class="box-content">
                <h3 class="title">Product Ideation And Prototyping</h3>
                <span class="post">
                  Get expert consultancy to validate your concept better, along
                  with assistance with the plan, prototype, and next market
                  launch.
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-6 m-auto">
            <div class="box">
              <img src={pe3} />
              <div class="box-content">
                <h3 class="title">Product Ideation And Prototyping</h3>
                <span class="post">
                  Get expert consultancy to validate your concept better, along
                  with assistance with the plan, prototype, and next market
                  launch.
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-6 m-auto">
            <div class="box">
              <img src={pe4} />
              <div class="box-content">
                <h3 class="title">Product Ideation And Prototyping</h3>
                <span class="post">
                  Get expert consultancy to validate your concept better, along
                  with assistance with the plan, prototype, and next market
                  launch.
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-6 m-auto">
            <div class="box">
              <img src={pe4} />
              <div class="box-content">
                <h3 class="title">Product Ideation And Prototyping</h3>
                <span class="post">
                  Get expert consultancy to validate your concept better, along
                  with assistance with the plan, prototype, and next market
                  launch.
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-6 m-auto">
            <div class="box">
              <img src={pe4} />
              <div class="box-content">
                <h3 class="title">Product Ideation And Prototyping</h3>
                <span class="post">
                  Get expert consultancy to validate your concept better, along
                  with assistance with the plan, prototype, and next market
                  launch.
                </span>
              </div>
            </div>
          </div>
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

      <Technologywework />
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
      {/* cards */}

      <div className="container cards_qa">
        <center>
          <h1 className="heading_cards_qa">DevOps Process</h1>
        </center>
        <div className="main_card_section_qa">
          <div className="inner_card_dev">
            <div className="content_qa_card">
              <h5 style={{ fontWeight: "bolder" }}>
                Tool Stack Construction and Prepare Framework
              </h5>
              <p>
                Implement the standard DevOps by creating a pilot framework and
                integrate your existing tools with our ecosystem of licensed and
                open source tools during each step of agile delivery.{" "}
              </p>
            </div>
          </div>

          <div className="inner_card_dev">
            <div className="content_qa_card">
              <h5>End-to-End Implementation</h5>
              <p>
                We analyse, design, construct, automate and implement as per the
                needs for each project followed by continuous planning,
                integration, testing, deployment, and monitoring for each
                project.{" "}
              </p>
            </div>
          </div>
          <div className="inner_card_dev">
            <div className="content_qa_card">
              <h5>Managed Services</h5>
              <p>
                Enhance and manage people’s skills, processes, culture, tools,
                etc. and make sure your systems are working fine with system
                security management, and 24/7 support.{" "}
              </p>
            </div>
          </div>
          <div className="inner_card_dev">
            <div className="content_qa_card">
              <h5>Assessment and Strategy Planning</h5>
              <p>
                Build a further roadmap after visualizing the current state and
                assess your maturity model, current state of DevOps culture,
                toolchain, and process with our experts.{" "}
              </p>
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
                <HashLink to="#contact-us">
                  <button style={{ border: "none" }}>
                    Request Consultation
                  </button>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devops;
