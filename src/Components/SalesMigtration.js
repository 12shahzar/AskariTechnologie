import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const SalesMigtration = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section for-baground-images">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Salesforce Migration Services
              </h1>
              <p className="main-hero-para-main-div">
                Whether you want to shift from a legacy system or expand your
                current CRM capabilities, we ensure your data is in safe hands!
                With proper planning and Salesforce migration best practices, we
                provide a reliable way of making your solutions faster,
                innovative, and user-friendly.
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
                  Salesforce Migration Services for Seamlessly Transitioning
                  Your Business
                </h2>
                <p className="about-main-content-parap">
                  Maximize the potential of Salesforce CRM through our
                  comprehensive Salesforce Migration Services, ensuring a smooth
                  transition while catering to employee engagement and customer
                  experiences. Leverage the expertise of our Salesforce ISV
                  partner to seamlessly migrate your data and processes to
                  Salesforce, ensuring security, compliance, and high
                  performance.<br></br> <br></br> Empower, Connect, and
                  Personalize through Custom Salesforce Migration In this
                  digital era, it is crucial to connect with customers wherever
                  they are. Why not consider migrating to Salesforce, a
                  personalized platform that streamlines business processes and
                  facilitates access to vital information?<br></br> <br></br>
                  We are ready to support you in optimizing your business
                  achievements through tailored migration solutions. Whether you
                  aim to enhance the efficiency of your existing system or
                  require a platform to revolutionize the customer experience,
                  our team of experts can seamlessly fulfill your business
                  objectives.<br></br>
                  <br></br>
                  With over ten years of experience in elevating customer
                  experiences and expanding CRM capabilities within specified
                  timelines, we are positioned as your reliable partner for
                  Salesforce migration services.<br></br>
                  As a dependable Salesforce migration firm, we empower you to
                  become a superhero for both your customers and employees.
                  Reach out to us for all your Salesforce migration
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
              Experience Our Salesforce Migration Solutions
            </h1>
            <center>
              <p className="main-services-para-main-card-top py-3">
                Transform your business processes with our range of Salesforce
                migration services.
              </p>
            </center>
            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Data Migration Expertise</p>
              <p className="main-top-bottom-content">
                As your trusted Salesforce ISV partner, we offer end-to-end data
                migration services, ensuring a secure and seamless transition of
                your valuable data to Salesforce.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Process Migration</p>
              <p className="main-top-bottom-content">
                We help you map and migrate your existing business processes to
                Salesforce, optimizing efficiency and alignment with the
                platform's capabilities.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Customization and Configuration</p>
              <p className="main-top-bottom-content">
                Our experts assist in customizing and configuring Salesforce to
                meet your unique business requirements, ensuring a tailored
                migration experience.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Training and Adoption</p>
              <p className="main-top-bottom-content">
                We provide comprehensive training and adoption programs to
                ensure a smooth transition for your employees, empowering them
                to leverage the full potential of Salesforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="arrivals-card-arrival p-5">
        <div className="container p-5 py-5">
          <div className="row p-2 ">
            <h1 className="arrivals-head-main-top-my-bottom">
              Our Salesforce Migration Approach
            </h1>
            <p className="arrival-main-bottom-top-head">
              As your trusted Salesforce migration partner, we involve you
              throughout the entire process. Here's our streamlined migration
              approach.
            </p>
            <div className="row">
              <div className="col-lg-2 car-2-3-4 car-2-3-6">
                <p className="arrival-main-top-boottom">Consultation</p>
                <p className="arricval-card-content-main-last-top">
                  Our experts gather crucial information about your current
                  systems and requirements for a successful migration to
                  Salesforce.
                </p>
              </div>
              <div className="col-lg-2 car-2-3-4 car-2-3-6">
                <p className="arrival-main-top-boottom">Planning</p>
                <p className="arricval-card-content-main-last-top">
                  We create a comprehensive migration roadmap that includes data
                  mapping, process alignment, resource allocation, and timeline
                  considerations.
                </p>
              </div>
              <div className="col-lg-2 car-2-3-4 car-2-3-6">
                <p className="arrival-main-top-boottom">
                  Data Cleansing and Preparation:
                </p>
                <p className="arricval-card-content-main-last-top">
                  We ensure the integrity and accuracy of your data through
                  thorough cleansing and preparation before migration.
                </p>
              </div>
              <div className="col-lg-2 car-2-3-4 car-2-3-6">
                <p className="arrival-main-top-boottom">Migration Execution</p>
                <p className="arricval-card-content-main-last-top">
                  Our team carries out the migration process, ensuring a
                  seamless transfer of data and processes to Salesforce.
                </p>
              </div>

              <div className="col-lg-2 car-2-3-4 car-2-3-6">
                <p className="arrival-main-top-boottom">
                  Validation and Testing:
                </p>
                <p className="arricval-card-content-main-last-top">
                  Rigorous validation and testing processes are conducted to
                  ensure the accuracy and integrity of migrated data and
                  processes.
                </p>
              </div>

              <div className="col-lg-2 car-2-3-4 car-2-3-6">
                <p className="arrival-main-top-boottom">
                  User Training and Support:
                </p>
                <p className="arricval-card-content-main-last-top">
                  We provide comprehensive training to your employees, ensuring
                  a smooth transition and user adoption of Salesforce.
                </p>
              </div>

              <div className="col-lg-2 car-2-3-4 car-2-3-6">
                <p className="arrival-main-top-boottom">
                  Post-Migration Support
                </p>
                <p className="arricval-card-content-main-last-top">
                  We offer ongoing support and maintenance to address any issues
                  or queries post-migration, ensuring a successful transition.
                </p>
              </div>

              <div className="col-lg-2 car-2-3-4 car-2-3-6">
                <p className="arrival-main-top-boottom">Agile Approach:</p>
                <p className="arricval-card-content-main-last-top">
                  We prioritize transparency, embracing an agile methodology for
                  continuous improvement throughout the migration process.
                </p>
              </div>
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
                  <li>- Robust Data Safety and Security</li>
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

export default SalesMigtration;
