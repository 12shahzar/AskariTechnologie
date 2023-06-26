import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const SupportMaintence = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section for-baground-images">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Uninterrupted Salesforce Support and Maintenance Services
              </h1>
              <p className="main-hero-para-main-div">
                To ensure continuous and seamless Salesforce support and
                maintenance, Askari Technologies is dedicated to assisting you
                in maximizing the potential of your Salesforce CRM. Our
                comprehensive services cater to both employee engagement and
                customer experiences, empowering your business to thrive in the
                digital era. Partner with our experienced Salesforce ISV team to
                develop secure, compliant, and high-performing apps that scale
                effectively.
              </p>
              <div className="btnnn py-2">
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
                  In today's digital landscape, it is essential to connect with
                  customers wherever they are. Consider the construction of a
                  personalized Salesforce application that streamlines business
                  processes and provides easy access to vital information. Our
                  team of experts is ready to support you in optimizing your
                  business achievements through tailored solutions. Whether you
                  aim to enhance the efficiency of your existing system or
                  revolutionize the customer experience, we offer seamless
                  fulfillment of your business objectives.<br></br> <br></br>{" "}
                  With over ten years of experience in elevating customer
                  experiences and expanding CRM capabilities, we have
                  established ourselves as a reliable partner. As a trusted
                  Salesforce app development firm, we empower you to become a
                  superhero for both your customers and employees. No matter the
                  size of your business, reach out to us for all your Salesforce
                  app development requirements. We are committed to delivering
                  customized solutions! <br></br> <br></br>
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
              Transform your concepts into tangible results with our wide range
              of Salesforce custom app development services
            </p>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Compliance Support</p>
              <p className="main-top-bottom-content">
                We ensure your app meets compliance standards by conducting
                security reviews before AppExchange submission. Our custom
                testing covers Salesforce vulnerabilities, ensuring a successful
                listing.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Lightning Compatibility</p>
              <p className="main-top-bottom-content">
                Our experts develop Lightning-ready, Salesforce-compatible apps
                tailored to your specific business needs.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">AppExchange Consulting</p>
              <p className="main-top-bottom-content">
                Comprehensive consulting services for AppExchange development
                and implementation, including concept analysis, solution
                specification, architecture design, integration research, MVP
                development, and competitor analysis.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">
                Our Salesforce Application Development Approach
              </p>
              <p className="main-top-bottom-content">
                As your dedicated Salesforce app development partner, we involve
                you throughout the entire process. Here's our streamlined
                development approach.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Consultation</p>
              <p className="main-top-bottom-content">
                Our experts gather crucial information and customizations
                required for your Salesforce application.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Planning</p>
              <p className="main-top-bottom-content">
                We create a comprehensive roadmap that includes ideas,
                milestones, management strategies, and budget considerations.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Mockups</p>
              <p className="main-top-bottom-content">
                A prototype is designed to provide a real-time visualization of
                your custom Salesforce application.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Development</p>
              <p className="main-top-bottom-content">
                Once mockups are approved, we begin agile development, keeping
                you informed at every sprint.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Quality Check and Deployment</p>
              <p className="main-top-bottom-content">
                Rigorous QA checks ensure high-quality, bug-free solutions. We
                assist in deploying your product.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Post-Launch Support</p>
              <p className="main-top-bottom-content">
                We offer training, documentation, and 24/7 assistance to resolve
                bugs and technical issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="arrivals-card-arrival p-5">
        <div className="container p-5 py-5">
          <div className="row p-2">
            <h1 className="arrivals-head-main-top-my-bottom">
              Askari Technologies, Your Reliable Salesforce Application
              Development Company
            </h1>
            <p className="arrival-main-bottom-top-head">
              As a Salesforce ISV Partner, we provide expert advice and
              360-degree support for uninterrupted Salesforce services:
            </p>
            <div className="col-lg-2 car-2-3-4 car-2-3-6">
              <p className="arrival-main-top-boottom">Agile Approach</p>
              <p className="arricval-card-content-main-last-top">
                We prioritize transparency and embrace agile methodologies for
                continuous improvement.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4 car-2-3-6">
              <p className="arrival-main-top-boottom">360-Degree Security</p>
              <p className="arricval-card-content-main-last-top">
                We adhere to stringent security practices to safeguard your
                data.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4 car-2-3-6">
              <p className="arrival-main-top-boottom">
                Quality Driven Solutions
              </p>
              <p className="arricval-card-content-main-last-top">
                Our end-to-end services cover advice, migration, implementation,
                integration, customization, and development, catering to all
                your Salesforce needs.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4 car-2-3-6">
              <p className="arrival-main-top-boottom">Customer Engagement</p>
              <p className="arricval-card-content-main-last-top">
                We tailor our services to meet unique business requirements,
                enhancing user experience and streamlining processes. Elevate
                your Salesforce journey by contacting us today!
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
                  Experienced and Certified Salesforce Developers
                </h2>
                <p className="h2-h3-h4">
                  Our team consists of skilled and certified Salesforce
                  developers who bring extensive expertise to meet your specific
                  requirements.
                </p>
                <ul className="newul">
                  <li>Improved Operational Efficiency</li>
                  <li>Budget-Friendly Solutions</li>

                  <li>Adaptable Engagement Models</li>
                  <li>Robust Data Safety and Security</li>
                  <li>Timely Project Delivery</li>
                  <li>Efficient Communication Channels</li>
                  <li>Agile Methodology Implementation</li>
                  <li>Rigorous Quality Assurance</li>
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

export default SupportMaintence;
