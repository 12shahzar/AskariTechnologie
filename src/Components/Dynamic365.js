import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const Dynamic365 = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section dynamic-365">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Microsoft Dynamics 365 Development Services
              </h1>
              <p className="main-hero-para-main-div">
                Embrace digital transformation and elevate your customer
                relations with our comprehensive Microsoft Dynamics 365
                services. We specialize in integration, implementation,
                migration, and custom reports, leveraging our expertise in
                databases, programming languages, and ERP systems to tailor your
                Dynamics CRM to perfection.
              </p>
              <div className="btnnn py-4">
                <HashLink to={"#contact-us"}>
                  <button className="main-home-shopyt-btn ">
                    Request A Free Consultation{" "}
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
                  Innovation Led Microsoft Dynamics Implementation
                </h2>
                <p className="about-main-content-parap">
                  In today's fast-paced business landscape, traditional CRMs
                  with outdated systems can consume valuable IT resources and
                  hinder growth opportunities.<br></br> <br></br> At Askari
                  Technologies, our Microsoft Dynamics development services
                  empower you to reimagine your customer relationships by
                  embracing automation, speed, and agility. We cater to various
                  aspects of your organization, including sales, marketing,
                  customer relationships, logistics, and more, tailoring your
                  CRM to align with your unique business logic. <br></br>{" "}
                  <br></br>
                  Trust Askari Technologies, a Microsoft Silver partner, to
                  handle your Microsoft Dynamics 365 development needs. Our team
                  of experienced professionals is well-versed in the intricacies
                  of MS Dynamics 365, ensuring seamless integration and flawless
                  business process optimization. Experience streamlined
                  operations and a customized CRM solution that meets your exact
                  requirements.
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
              End-to-End Dynamics Services by Askari Technologies
            </h1>
            <p className="main-services-para-main-card-top py-3">
              From consultation to the development of Microsoft Dynamics
              solutions, encompassing modernization, implementation, management,
              and maintenance, we provide comprehensive coverage across all
              stages of Microsoft Dynamics 365 development.
            </p>
            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Dynamics 365 For Sales</p>
              <p className="main-top-bottom-content">
                Improve the overall sales experience and boost deal closures by
                converting more leads. Leverage Dynamics 365 custom solutions to
                consolidate all sales activities and enhance working efficiency.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Dynamics 365 For Customer Service</p>
              <p className="main-top-bottom-content">
                Empower your customer service with Dynamics 365 to enhance
                customer retention. Offer AI-powered and IoT-based solutions
                that personalize the customer service experience.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Dynamics 365 For Field Service</p>
              <p className="main-top-bottom-content">
                Deliver on-site services to your customers with Dynamics 365
                Field Service. Equip your employees with essential features such
                as communication tools, GPS navigation, customer query
                management, and more.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Dynamics 365 For Project Service</p>
              <p className="main-top-bottom-content">
                Efficiently manage projects with Project Service Automation
                (PSA). Collaborate with our Dynamics 365 experts to develop
                custom PSAs and enhance employee efficiency.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">
                Dynamics 365 For Marketing Automation
              </p>
              <p className="main-top-bottom-content">
                Market your business effectively using the power of Dynamics 365
                Marketing Automation. Create custom graphical and online
                content, design interactive customer journeys, execute diverse
                marketing campaigns, and more, all from one centralized
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="arrivals-card-arrival py-5  ">
        <div className="container p-5 py-5">
          <div className="row p-5 main-roe">
            <h1 className="arrivals-head-main-top-my-bottom ">
              Askari Technologies provides a range of opportunities
            </h1>
            <p className="arrival-main-bottom-top-head py-3">
              to deliver exceptional experiences. With extensive experience in
              Microsoft Dynamics <br></br> CRM development, we offer top-class
              features and functionalities.
            </p>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Agile Development Approach
              </p>
              <p className="arricval-card-content-main-last-top">
                Our team consists of experienced developers, product owners, and
                scrum masters who embrace an agile mindset. Together, they
                collaborate to optimize your return on investment and deliver
                efficient solutions.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Prompt Issue Resolution
              </p>
              <p className="arricval-card-content-main-last-top">
                We recognize the significance of post-launch support, and our
                dedicated team is available 24/7 to address your inquiries and
                provide timely assistance.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Robust Data Security</p>
              <p className="arricval-card-content-main-last-top">
                We prioritize data security by adhering to strict measures and
                industry best practices. This includes regular backups, SSL
                enforcement, adherence to management standards, and advanced
                fraud detection, ensuring the integrity and confidentiality of
                your data.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Unleash New Opportunities
              </p>
              <p className="arricval-card-content-main-last-top">
                As a trusted Dynamics development company, we ensure that our
                tailored solutions enable you to capitalize on market trends and
                enhance customer relationships. This makes our services an
                essential catalyst for your business growth.
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
                  Why Askari Technologies for Microsoft Dynamics Development
                </h2>
                <p className="h2-h3-h4">
                  We harness the potential of platforms and technologies,
                  leveraging our innovation and industry expertise to facilitate
                  customer-centric transformation on a large scale.
                </p>
                <ul className="newul">
                  <li>Experienced Dynamics 365 Developers</li>
                  <li>Scalability as per Your Needs</li>

                  <li>Adaptable Engagement Model</li>
                  <li>Budget-Friendly Solution</li>
                  <li>Timely Project Delivery</li>
                  <li>Agile Development Approach</li>
                  <li>Verified Code Authorization</li>
                  <li>Transparent Project Oversight</li>

                  <li>Customer Satisfaction Guarantee</li>
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

export default Dynamic365;
