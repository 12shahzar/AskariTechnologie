import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const ShopfiyApp = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section Enter-prices-images">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Enterprise Application Development
              </h1>
              <p className="main-hero-para-main-div">
                For over 16 years, Askari Technologies has been helping clients
                become industry leaders through our enterprise application
                development services. Our solutions improve customer
                satisfaction, increase operational efficiency, and automate
                business processes.
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
                  Excel in Your Industry with Askari Technologies' Enterprise
                  Application Development
                </h2>
                <p className="about-main-content-parap">
                  We specialize in enterprise app development services that
                  streamline workflows, boost employee productivity, and enhance
                  the customer experience. Our skilled developers have expertise
                  in enterprise app development, mobility services, API
                  integrations, legacy system modernization, and app portfolio
                  consolidation.<br></br> <br></br> No matter your industry, our
                  custom enterprise software development aligns with your
                  specific needs, driving efficiency and facilitating digital
                  transformation. <br></br> <br></br>
                  Empower Productivity and Customer Experience with Enterprise
                  Application Development <br></br>
                  <br></br>
                  Enterprise Application Development Services Our comprehensive
                  enterprise software development services include integration,
                  migration, and security solutions.
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
              Custom Enterprise Application <br></br> Development
            </h1>
            <p className="main-services-para-main-card-top py-3">
              We provide custom enterprise application development services to{" "}
              <br></br>
              create B2B/B2C/C2C apps or SaaS-based platforms that fulfill your
              <br></br>
              unique business requirements.
            </p>
            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Enterprise Mobility Services</p>
              <p className="main-top-bottom-content">
                Develop intuitive, interactive, and scalable native and hybrid
                mobile applications accessible across tablets and smartphones.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Store Setup & Configuration</p>
              <p className="main-top-bottom-content">
                Set up and configure your Shopify store per your business
                objectives and goals. Being amongst the leading Shopify
                development companies, we help you launch your online store in
                record time.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Digital Transformation Services</p>
              <p className="main-top-bottom-content">
                With our industry experience and technological expertise, we
                ensure successful digital transformation journeys for
                businesses.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Software Integration</p>
              <p className="main-top-bottom-content">
                As an ISO 9001 certified company, we deliver reliable and
                tailored solutions through quality management.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Legacy Application Migration</p>
              <p className="main-top-bottom-content">
                Through in-depth analysis, we suggest solutions and upgrade
                legacy systems with the latest tools and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="arrivals-card-arrival py-5  ">
        <div className="container p-5 py-5">
          <div className="row p-5 main-roe">
            <h1 className="arrivals-head-main-top-my-bottom ">
              Benefits of Enterprise Apps
            </h1>

            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Optimized Processes</p>
              <p className="arricval-card-content-main-last-top">
                Enterprise mobile application development resolves common
                challenges and provides key insights for quick issue resolution.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Automated Workflows</p>
              <p className="arricval-card-content-main-last-top">
                Mobile enterprise applications automate manual processes,
                enhancing efficiency and productivity while reducing repetitive
                tasks.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Create New Opportunities
              </p>
              <p className="arricval-card-content-main-last-top">
                Our tailored enterprise solutions help you leverage market
                trends and drive supply chain management for business growth.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Increased Efficiency</p>
              <p className="arricval-card-content-main-last-top">
                Enterprise apps align with your business goals, engaging
                employees and boosting ROI while minimizing missed opportunities
                and miscommunication.
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
                  Why Choose Askari Technologies for Enterprise App Development
                </h2>
                <p className="h2-h3-h4">
                  We stand out with our work ethic, methodology, and commitment
                  to your projects. We understand your requirements, tailor
                  enterprise solutions, assemble dedicated teams, and execute
                  robust projects.
                </p>
                <ul className="newul">
                  <li>Dedicated Enterprise App Developers</li>
                  <li>On-Demand Scalability</li>

                  <li>Flexible Engagement Models</li>
                  <li>Cost-Effective Solutions</li>
                  <li>On-Time Delivery</li>
                  <li>Agile Methodology</li>
                  <li>Code Authorization</li>
                  <li>Transparent Project Management</li>
                  <li>100% Customer Satisfaction</li>
                  <li>24/7 Support and Maintenance</li>
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

export default ShopfiyApp;
