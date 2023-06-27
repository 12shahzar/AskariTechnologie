import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const SalesApplication = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section for-baground-images">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Salesforce Application Development Solutions
              </h1>
              <p className="main-hero-para-main-div">
                Maximize the potential of Salesforce CRM through our bespoke
                Salesforce App Development services, catering to employee
                engagement and customer experiences. Leverage the expertise of
                our Salesforce ISV partner to build secure, compliant, and
                high-performing apps that scale effectively.
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
                  App Development
                </h2>
                <p className="about-main-content-parap">
                  In this digital era, it is crucial to connect with customers
                  wherever they are. Why not consider constructing a
                  personalized Salesforce application that streamlines business
                  processes and facilitates access to vital information?
                  <br></br> <br></br>We are ready to support you in optimizing
                  your business achievements through tailored solutions. Whether
                  you aim to enhance the efficiency of your existing system or
                  require a platform to revolutionize the customer experience,
                  our team of experts can seamlessly fulfill your business
                  objectives. <br></br> <br></br>
                  With over ten years of experience in elevating customer
                  experiences and expanding CRM capabilities within specified
                  timelines, we are positioned as your reliable partner. As a
                  dependable Salesforce app development firm, we empower you to
                  become a superhero for both your customers and employees.
                  Reach out to us for all your Salesforce app development
                  requirements, regardless of the size of your business. We are
                  committed to delivering customized solutions!
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
              Experience Our Salesforce Custom Application Development Solutions
            </h1>

            <p className="main-services-para-main-card-top py-3">
              Transform your concepts into tangible results with our range of{" "}
              <br></br>
              Salesforce custom app development services.
            </p>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Design and Development Expertise</p>
              <p className="main-top-bottom-content">
                As your reliable Salesforce ISV partner, we offer end-to-end
                design and development services for AppExchange Apps. Expertise
                includes lightning components, Visualforce pages, and custom
                APIs.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Compliance Support</p>
              <p className="main-top-bottom-content">
                We provide security reviews before AppExchange submission,
                including custom testing for Salesforce vulnerabilities,
                ensuring a successful listing.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Lightning Compatibility</p>
              <p className="main-top-bottom-content">
                Our experts develop Lightning-ready, Salesforce-compatible apps
                tailored to your business.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">AppExchange Consulting</p>
              <p className="main-top-bottom-content">
                Comprehensive consulting services for AppExchange development
                and implementation. Includes concept analysis, solution
                specification, architecture design, integration research, MVP
                development, and competitor analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="arrivals-card-arrival p-5">
        <div className="container p-5 py-5">
          <div className="row p-2">
            <h1 className="arrivals-head-main-top-my-bottom pb-5">
              Our Salesforce Application Development Approach
            </h1>

            <div className="col-lg-2 car-2-3-6">
              <p className="arrival-main-top-boottom">Consultation</p>
              <p className="arricval-card-content-main-last-top">
                Our experts gather crucial information and customizations needed
                for your Salesforce application.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-6">
              <p className="arrival-main-top-boottom">Planning</p>
              <p className="arricval-card-content-main-last-top">
                We create a comprehensive roadmap that includes ideas,
                milestones, management strategies, and budget considerations.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-6">
              <p className="arrival-main-top-boottom">Mockups</p>
              <p className="arricval-card-content-main-last-top">
                A prototype is designed to provide a real-time visualization of
                your custom Salesforce application.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-6">
              <p className="arrival-main-top-boottom">Development</p>
              <p className="arricval-card-content-main-last-top">
                Once mockups are approved, we begin agile development, keeping
                you informed at every sprint.
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
                  Why Choose Askari Technologies for Salesforce Mobile App
                  Development?
                </h2>
                <p className="h2-h3-h4">
                  With over 16 years of industry experience, we specialize in
                  providing customized solutions to businesses across various
                  industry verticals. Here are the advantages of teaming up with
                  us.
                </p>
                <ul className="newul">
                  <li>Experienced and Certified Salesforce Developers</li>
                  <li>Improved Operational Efficiency</li>

                  <li>Budget-Friendly Solutions</li>
                  <li>Adaptable Engagement Models</li>
                  <li>Robust Data Safety and Security</li>
                  <li>Timely Project Delivery</li>
                  <li>Efficient Communication Channels</li>
                  <li>Agile Methodology Implementation</li>

                  <li>Rigorous Quality Assurance</li>
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

export default SalesApplication;
