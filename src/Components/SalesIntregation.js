import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const SalesIntregation = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section for-baground-images">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Salesforce Integration Services
              </h1>
              <p className="main-hero-para-main-div">
                Maximize the potential of Salesforce CRM through our
                comprehensive Salesforce Integration Services, enabling seamless
                connectivity and data consolidation across your business
                systems. Leverage the expertise of our Salesforce ISV partner to
                integrate Salesforce with your existing applications, creating a
                unified and efficient ecosystem.
              </p>
              <div className="btnnn py-4">
                <HashLink to={"#contact-us"}>
                  <button className="main-home-shopyt-btn ">
                    Request A Free Consultation
                  </button>
                </HashLink>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>

      {/* New second Section */}

      <section className="Second-div-2-pictue-about">
        <div className="container ">
          <div className="row p-2">
            <div className="col-lg-6 image-main-section">
              <img src={mainAbout} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 main-content-about-all py-5">
              <div className="py-5">
                <h2 className="about-main-conetnetn-h2">
                  Empower, Connect, and Personalize through Custom Salesforce
                  Integrations
                </h2>
                <p className="about-main-content-parap">
                  In this digital era, it is crucial to connect and consolidate
                  data from various sources. Why not consider integrating
                  Salesforce with your existing systems to streamline business
                  processes and facilitate access to vital information?<br></br>{" "}
                  <br></br>We are ready to support you in optimizing your
                  business achievements through tailored integration solutions.
                  Whether you aim to enhance the efficiency of your sales and
                  marketing processes or require seamless data synchronization
                  between Salesforce and other applications, our team of experts
                  can seamlessly fulfill your business objectives.<br></br>{" "}
                  <br></br>
                  With over ten years of experience in elevating customer
                  experiences and expanding CRM capabilities within specified
                  timelines, we are positioned as your reliable partner for
                  Salesforce integration services.<br></br>
                  <br></br>
                  As a dependable Salesforce integration firm, we empower you to
                  unlock the full potential of your business data. Reach out to
                  us for all your Salesforce integration requirements,
                  regardless of the size of your business. We are committed to
                  delivering customized solutions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contactsub />

      <section className="main-services-card-main-div p-5 ">
        <div className="contianer p-5">
          <div className="row p-2">
            <h1 className="main-serv-ces-h1-head">
              Experience Our Salesforce Integration Solutions
            </h1>

            <p className="main-services-para-main-card-top py-3">
              Transform your business processes with our range of Salesforce
              integration services.
            </p>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Custom Integration Development</p>
              <p className="main-top-bottom-content">
                As your trusted Salesforce ISV partner, we offer end-to-end
                custom integration development services, ensuring seamless
                connectivity between Salesforce and your preferred applications.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Data Synchronization</p>
              <p className="main-top-bottom-content">
                We enable real-time or scheduled data synchronization between
                Salesforce and your existing systems, ensuring data consistency
                and accuracy across your entire ecosystem.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">API Development and Integration</p>
              <p className="main-top-bottom-content">
                Our experts develop custom APIs and integrate them with
                Salesforce to enable smooth data exchange and streamline
                workflows..
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Legacy System Integration</p>
              <p className="main-top-bottom-content">
                We assist in integrating Salesforce with your legacy systems,
                allowing you to leverage the power of Salesforce while
                preserving your existing investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="arrivals-card-arrival p-5">
        <div className="container p-5 py-5">
          <div className="row p-2">
            <h1 className="arrivals-head-main-top-my-bottom">
              Our Salesforce Integration Approach
            </h1>
            <p className="arrival-main-bottom-top-head">
              As your trusted Salesforce integration partner, we involve you
              throughout the entire process. Here's our streamlined integration
              approach.
            </p>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Consultation</p>
              <p className="arricval-card-content-main-last-top">
                Our experts gather crucial information about your existing
                systems and integration requirements.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Planning</p>
              <p className="arricval-card-content-main-last-top">
                We create a comprehensive integration roadmap that includes data
                mapping, system compatibility, integration points, and security
                considerations.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Development</p>
              <p className="arricval-card-content-main-last-top">
                Our team develops custom integration solutions, ensuring
                seamless connectivity and data exchange between Salesforce and
                your applications.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Testing and Validation</p>
              <p className="arricval-card-content-main-last-top">
                Rigorous testing and validation processes are conducted to
                ensure the accuracy and reliability of the integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="Second-div-2-pictue-about">
        <div className="container ">
          <div className="row p-2">
            <div className="col-lg-6 image-main-section">
              <img src={mainAbout} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 main-content-about-all py-5">
              <div className="py-5">
                <h2 className="about-main-conetnetn-h2">
                  Why Choose Askari Technologies for Salesforce Integration
                  Services?
                </h2>
                <p className="h2-h3-h4">
                  With over 16 years of industry experience, we specialize in
                  providing customized solutions to businesses across various
                  industry verticals. Here are the advantages of teaming up with
                  us for Salesforce integration services.
                </p>
                <ul className="newul">
                  <li>
                    Experienced and Certified Salesforce Integration Experts
                  </li>
                  <li>
                    Improved Operational Efficiency through Seamless
                    Connectivity
                  </li>

                  <li>Budget-Friendly Solutions</li>
                  <li>Adaptable Engagement Models</li>
                  <li>Robust Data Safety and Security</li>
                  <li>Timely Project Delivery</li>
                  <li>Efficient Communication Channels</li>
                  <li>Agile Methodology Implementation</li>

                  <li> Rigorous Quality Assurance</li>
                  <li>Complete Customer Satisfaction</li>
                  <li>Round-the-Clock Support and Maintenance</li>
                </ul>
                <HashLink to={"#contact-us"}>
                  <button className="bolet-btn-main">
                    Request Consultation
                  </button>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SalesIntregation;
