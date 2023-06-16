import React from "react";
import "../Styles/Home.css";

// Image Import
import MainIMG from "../Assets/ASP 1.png";
import Main2Img from "../Assets/ASP.png";

/// DEv 2 File Import
import "../Styles//Hire.css";
import Note from "../Assets/funtion.png";
import CV from "../Assets/Group.png";
import Meeting from "../Assets/Group.png";
import Avatar from "../Assets/avatar.png";
import Remote from "../Assets/monitor.png";
import Vector from "../Assets/Vector3.png";
import "../Styles//Inductry.css";
import Footer from "./Footer";
import Hire from "./Hire";
import Hirebutton from "./Hirebutton";
import Australia from "../Assets/aus.png";
import Pakistan from "../Assets/pak.png";
import America from "../Assets/ame.png";
import UAE from "../Assets/uae.png";
import Fashions from "../Assets/pic1.png";
import Retail from "../Assets/pic3.png";
import AutoParts from "../Assets/autoparts.png";
import Fitness from "../Assets/apple.png";
import Furniture from "../Assets/pic5.png";
import Monitor from "../Assets/pic4.png";
import Beauty from "../Assets/beauty.png";
import Pharmaceutical from "../Assets/pharma.png";
import Rental from "../Assets/car.png";
import Banner from "../Assets/banner.png";

const Asp = (props) => {
  const ServcicesCard = ({ Heading, Para }) => {
    return (
      <div className="col-md-2 services-card ">
        <h4 className="car-heading">{Heading}</h4>
        <p className="card-para">{Para}</p>
      </div>
    );
  };

  return (
    <>
      <div>
        <section className="main-section-1">
          <div className="container py-5">
            <ul>
              <li className="Main-ul">
                <a href="/">Home /</a>
                <a href="/">Development /</a>
                <a href="/">CRM & ERP /</a>
              </li>
            </ul>
            <div className="row">
              <div className="col-lg-6">
                <h1 className="Brand-Name p-3">
                  Hire ASP.NET Developers for your Next Project
                </h1>
                <p className="Brand-slogen p-3">
                  Achieve your business objectives by leveraging the technical
                  expertise and industry knowledge of our ASP.NET app
                  developers. Develop custom enterprise applications without
                  compromising on your budget.
                </p>
                <button className="Hire-btn">
                  Request A Free Consultation
                </button>
              </div>
              <div className="col-lg-6 m-auto">
                <img
                  src={MainIMG}
                  alt=""
                  className="logo-IMG img-fluid d-none d-sm-block"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="main-2 justify-content-center align-content-center ">
        <div className="row">
          <div className="col-lg-5 justify-content-center">
            <img src={Main2Img} alt="" className="about-Img img-fluid" />
          </div>
          <div className="col-lg-6 m-auto ">
            <h3 className="about-head p-3">
              Partner with the Seasoned Shopify Website Developers
            </h3>
            <p className="about-para p-3 ">
              Our Shopify experts have a knack for building robust online stores
              for small to Enterprise level businesses. Backed by 16+ years of
              experience, we can cater to your custom needs when you hire
              Shopify experts. Be it expanding your store’s functionalities or
              customizing your Shopify theme. At Biztech, our Shopify experts
              are ready to help you create the right eCommerce store using best
              industry practices. Following the agile method, we deliver your
              project in an iterative process, giving enough attention to
              feedback and testing. Hire professional Shopify developers with
              the right skills and experience who can understand your
              requirements. Not just that, the professionals can turn them into
              lucrative e-stores within budget.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <div className="container-fluid">
          <div className="row  ">
            <div className="col-lg-6 conact-c1">
              <h3 className="contact-head mt-5">
                Our ASP.Net Programmers’ Expertise
              </h3>
              <p className="contact-para">
                Schedule a Call for Free Consultation
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
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInpuEmail" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail"
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
                  ></textarea>
                </div>
                <button type="submit" class="btn-started">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="services py-5">
        <div className="container">
          <h3 className="services-head ">
            Why You Should Hire Dedicated ASP.Net Developers{" "}
          </h3>
          {/* <p className="services-para p-3">
                From Salesforce integration consulting to Salesforce service cloud
                integration through third-party tools like Quickbooks, VoIP, etc.,
                we are capable of offering you a tailored service.
              </p> */}
          <div className="row services-row ">
            <ServcicesCard
              Heading={"Transparent Conduct"}
              Para={
                "Remote ASP.Net app gives you accessibility to all the development resources and is open to discussions. They provide periodic reports, access to tools, and streamlined communication to ensure everyone is on the same page."
              }
            />
            <ServcicesCard
              Heading={"Cost Saving"}
              Para={
                "When you hire ASP.Net developers, you don’t have to worry about managing them or their infrastructural needs. You only have to pay for their performance and time spent on the project."
              }
            />
            <ServcicesCard
              Heading={"Scalable Team"}
              Para={
                "Outsourcing ASP.Net programmers give you the flexibility to expand your business without cutting corners. Besides, their vast industry expertise helps you stay ahead of the competition."
              }
            />
          </div>

          <div className="row services-row ">
            <ServcicesCard
              Heading={"Complete Control"}
              Para={
                "From planning to development and post-launch maintenance, the developers will handle all the responsibilities. Hire ASP Net web developers to sit in the driver seat and get complete control over your project, deliverables, tasks assignment, and daily activities."
              }
            />
            <ServcicesCard
              Heading={"Agile"}
              Para={
                "Outsourcing developers gives you the freedom to scale the project as and when needed. When you hire dedicated .Net developers from us, we help you keep up with evolving market trends and customer expectations."
              }
            />
            <ServcicesCard
              Heading={"End-To-End Solution"}
              Para={
                "From customizing a feature to developing a tailored solution for your business, ASP.Net developers will help you with design, development, testing, maintenance, and support."
              }
            />
          </div>
        </div>
      </section>

      <div className="rowheading  hirecontainer">
        <h2 className="pad2">{props.Text}</h2>
        <div className="row textcent">
          <div
            className="col textcent"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="ellipes">
              <img src={Note} />
            </div>
            <h4 className="pad">Share Requirements</h4>
          </div>
          <div className="col hiddenarrow" style={{ marginTop: "-100px" }}>
            <img src={Vector} className="arroww" />
          </div>
          <div
            className="col textcent"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="ellipes">
              <img src={CV} />
            </div>
            <h4 className="pad">Shortlist CVs</h4>
          </div>
          <div className="col hiddenarrow" style={{ marginTop: "-100px" }}>
            <img src={Vector} className="arroww" />
          </div>
          <div
            className="col textcent"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="ellipes">
              <img src={Meeting} />
            </div>
            <h4 className="pad">Conduct Interviews</h4>
          </div>
          <div className="col hiddenarrow " style={{ marginTop: "-100px" }}>
            <img src={Vector} className="arroww" />
          </div>
          <div
            className="col textcent"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="ellipes">
              <img src={Avatar} />
            </div>
            <h4 className="pad">Select Shopify Experts</h4>
          </div>
          <div className="col hiddenarrow" style={{ marginTop: "-100px" }}>
            <img src={Vector} className="arroww " />
          </div>
          <div
            className="col textcent"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="ellipes">
              <img src={Remote} />
            </div>
            <h4 className="pad">Remote Onboarding</h4>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="heading">Industries We Serve</h2>
        <h6 className="subHead">
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </h6>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12 column">
              <img src={Fashions} />
              <h5 className="name">Fashions & Clothing</h5>
            </div>
            <div class="col-md-4  col-sm-12  column">
              <img src={Retail} />
              <h5 className="name">Retail</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={AutoParts} />
              <h5 className="name">Auto Parts</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4  col-sm-12 column">
              <img src={Pharmaceutical} />
              <h5 className="name">Pharmaceutical</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={Fitness} />
              <h5 className="name">Fitness & Nutrition</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={Furniture} />
              <h5 className="name">Furniture</h5>
            </div>
          </div>
          <div className="row">
            <div class="col-md-4   col-sm-12 column">
              <img src={Monitor} />
              <h5 className="name">Pharmaceutical</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={Beauty} />
              <h5 className="name">Beauty And Personal Care</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={Rental} />
              <h5 className="name">Rental</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={Banner} className="bannerimg" />
          </div>
          <div className="col-md-6 box2">
            <h3 className="head2">{props.Text}</h3>
            <h6 className="subHead2">{props.SubHead}</h6>
            <ul className="ul">
              <li>Salesforce ISV Partners</li>
              <li>Experience in CRM solutions</li>
              <li>Competitive Salesforce Support Plans</li>
              <li>On-demand Scalability</li>
              <li>Finest Maintenance Services</li>
              <li>On-time Delivery</li>
              <li>Agile Methodology</li>
              <li>Code Authorization</li>
              <li>100% Customer Satisfaction</li>
              <li>24*7 Support and Maintenance</li>
            </ul>
            <button type="button" class="btn button">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
      <div className="container cont">
        <h4 className="head3">Frequently Asked Questions</h4>
        <h6 className="Everything">
          Everything you need to know about the product and billing.
        </h6>

        <div className="accordion w-100  cont2" id="basicAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <h6 className="listT">Is there a free trial available?</h6>
              </button>
            </h2>
            <div
              id="basicAccordionCollapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-mdb-parent="#basicAccordion"
              style={{}}
            >
              <div className="accordion-body">
                <p>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h6 className="listT"> I change my plan later?</h6>
              </button>
            </h2>
            <div
              id="basicAccordionCollapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-mdb-parent="#basicAccordion"
              style={{}}
            >
              <div className="accordion-body">Lorem ipsum</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h6 className="listT">What is your cancellation policy?</h6>
              </button>
            </h2>
            <div
              id="basicAccordionCollapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-mdb-parent="#basicAccordion"
              style={{}}
            >
              <div className="accordion-body">lorem ipsum</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseOne1"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <h6 className="listT">
                  Can other info be added to an invoice?
                </h6>
              </button>
            </h2>
            <div
              id="basicAccordionCollapseOne1"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-mdb-parent="#basicAccordion"
              style={{}}
            >
              <div className="accordion-body">lorem ipsum</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseTwo1"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h6 className="listT">How does billing work?</h6>
              </button>
            </h2>
            <div
              id="basicAccordionCollapseTwo1"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-mdb-parent="#basicAccordion"
              style={{}}
            >
              <div className="accordion-body">lorem ipsum</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseThree1"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h6 className="listT">How do I change my account email?</h6>
              </button>
            </h2>
            <div
              id="basicAccordionCollapseThree1"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-mdb-parent="#basicAccordion"
              style={{}}
            >
              <div className="accordion-body">lorem ipsum</div>
            </div>
          </div>
        </div>

        <div className="row flags">
          <div className="col-md-3 col-sm-4  coll">
            <img src={America} className="coll" />
            <h4 className="flagT">United State</h4>
            <p className="para2">
              160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
            </p>
          </div>
          <div className="col-md-3  col-sm-4  coll">
            <img src={Australia} className="coll" />
            <h4 className="flagT">Australia</h4>
            <p className="para2">
              160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
            </p>
          </div>
          <div className="col-md-3  col-sm-4  coll">
            <img src={Pakistan} className="coll" />
            <h4 className="flagT">Pakistan</h4>
            <p className="para2">
              160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
            </p>
          </div>
          <div className="col-md-3  col-sm-4 coll">
            <img src={UAE} className="coll" />
            <h4 className="flagT">UAE</h4>
            <p className="para2">Comming Soon</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Asp;
