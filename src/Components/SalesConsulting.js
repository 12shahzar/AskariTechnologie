import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const SalesConsulting = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section for-baground-images">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Salesforce Consulting Services
              </h1>
              <p className="main-hero-para-main-div">
                New technologies and business models challenge the status quo.
                With the right team and guidance, you can seize opportunities in
                evolving customer expectations. Our certified Salesforce
                consultants help overcome CRM challenges and achieve exceptional
                results. We offer comprehensive Salesforce consulting services,
                including development, migration, customization, and
                implementation.
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
                  The Impact of Reliable Salesforce Consulting Companies
                </h2>
                <p className="about-main-content-parap">
                  Partnering with a trusted Salesforce consulting company
                  empowers your business with data-driven strategies to maximize
                  ROI. With expertise in development, problem-solving, and
                  digital transformation, our Salesforce ISV partnership is
                  instrumental in shaping your future.<br></br> <br></br>Our
                  Salesforce consulting services offer the flexibility to choose
                  the ideal solution within your budget. We assess your business
                  needs, recommend suitable technologies, tools, and features,
                  and guide you through the development journey. <br></br>{" "}
                  <br></br>
                  Through collaborative innovation, we co-create solutions that
                  enhance customer engagement, driving your business forward.
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
              Our Salesforce consulting services offer
            </h1>
            <center>
              <p className="main-services-para-main-card-top py-3">
                Through collaborative innovation, we co-create solutions that
                enhance customer engagement, driving your business forward.
              </p>
            </center>
            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Salesforce Development Consulting</p>
              <p className="main-top-bottom-content">
                As a Salesforce consulting company, we offer expert guidance to
                tailor the perfect solution for your business development needs.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">
                Salesforce Implementation Consulting
              </p>
              <p className="main-top-bottom-content">
                Our Salesforce implementation consultants assess your system and
                provide recommendations to enhance workflows across different
                platforms and environments.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">
                Salesforce Customization Consulting
              </p>
              <p className="main-top-bottom-content">
                Leverage our Salesforce consulting services to enhance business
                efficiency, productivity, and ROI through the implementation of
                custom features and modules.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Salesforce Migration Consulting</p>
              <p className="main-top-bottom-content">
                Consult our certified Salesforce CRM consultants for expert
                advice on system and data migration. We'll assist you with a
                well-structured plan to migrate data from legacy systems to
                Lightning apps.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Salesforce Integration Consulting</p>
              <p className="main-top-bottom-content">
                Count on our Salesforce consulting services to select the most
                suitable third-party extensions, plugins, and themes for your
                solution. We'll guide you through custom integrations to
                optimize your Salesforce environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="arrivals-card-arrival p-5">
        <div className="container p-5 py-5">
          <div className="row p-2">
            <h1 className="arrivals-head-main-top-my-bottom">
              Why Opting for Salesforce Consulting Services is the Right Move
            </h1>

            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Thorough Risk Assessment
              </p>
              <p className="arricval-card-content-main-last-top">
                Salesforce consultants take concrete measures to ensure that
                your solution is risk-free and equipped to handle real-time
                challenges. They address process irregularities and overcome
                your business hurdles.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Industry-Specific Expertise
              </p>
              <p className="arricval-card-content-main-last-top">
                Salesforce consultants possess extensive knowledge in managing
                Salesforce CRM processes, implementing configurations, and
                catering to industry-specific requirements, along with expertise
                in other CRM platforms.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Enhanced Productivity</p>
              <p className="arricval-card-content-main-last-top">
                With Salesforce consulting services, you can adopt a proactive
                approach to meet evolving customer relationships, while experts
                design and implement strategic processes tailored to your
                business needs.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Improved Efficiency</p>
              <p className="arricval-card-content-main-last-top">
                Partnering with a reputable Salesforce consulting company
                enables you to close deals faster. Certified Salesforce
                consultants possess a deep understanding of the CRM system,
                ensuring smooth implementation and development processes.
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
                  The Benefit of Trusting Askari Technologies' Salesforce
                  Consulting Services
                </h2>
                <p className="h2-h3-h4">
                  At Askari Technologies, a prominent Salesforce consulting firm
                  in India, we offer a range of advantages when it comes to
                  leveraging our services. Our team of skilled Salesforce
                  experts is dedicated to guiding you seamlessly from the
                  initial concept to successful implementation. By employing
                  various strategies, we ensure a streamlined execution and
                  deliver outstanding results.
                </p>
                <ul className="newul">
                  <li>Forward-thinking Outlook</li>
                  <li>Profound Knowledge of the Industry</li>

                  <li>Implementation Aligned with your Business Objectives</li>
                  <li>Comprehensive Assessment</li>
                  <li>Targeted Functional Solutions</li>
                  <li>In-depth Collaboration Sessions</li>
                  <li>Timely Project Completion</li>
                  <li>Competitive Pricing Structure</li>
                  <li>Ongoing Maintenance and Support</li>
                  <li>Salesforce Implementation</li>
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

export default SalesConsulting;
