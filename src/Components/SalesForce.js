import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const SalesForce = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section for-baground-images">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Salesforce Development Services
              </h1>
              <p className="main-hero-para-main-div">
                Harness the potential of Salesforce through the expertise of
                Askari Technologies, a dynamic Salesforce development company.
                We specialize in creating and implementing diverse Salesforce
                applications tailored for Sales Cloud, Service Cloud, NonProfit
                Cloud, Lightning framework, Visualforce, and APEX code. Maximize
                the benefits of our Salesforce development services, CRM
                strategies, and Salesforce products today!
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
                  Build Enterprise Level Solutions with the Best Salesforce
                  Development Company in USA
                </h2>
                <p className="about-main-content-parap">
                  With over 16 years of experience serving more than 100
                  clients, Askari Technologies excels in catering to diverse
                  industry verticals. Our Salesforce development services are
                  focused on delivering high-quality solutions to our customers.
                  As a Salesforce ISV partner, we offer a comprehensive range of
                  solutions including custom native application development,
                  Salesforce consultancy, Salesforce eCommerce and cloud
                  integration, Salesforce migration, and Salesforce
                  implementation, along with reliable support and maintenance.
                  <br></br> <br></br> Our team possesses domain expertise in
                  Salesforce sales cloud, Salesforce service cloud, Lightning
                  frameworks, REST/SOAP API, Pardot, APEX code, and more. As a
                  trusted Salesforce ISV partner, we prioritize 100% customer
                  satisfaction. <br></br> <br></br>
                  As one of the leading Salesforce development companies, we
                  have successfully helped clients from various locations expand
                  their businesses through our innovative Salesforce Development
                  Services. Let us assist you in creating a digital experience
                  that drives growth.
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
              Salesforce Development Services Verticals
            </h1>

            <p className="main-services-para-main-card-top py-3">
              Transform your digital transformation with our comprehensive{" "}
              <br></br>
              Salesforce development services, delivering highly intuitive{" "}
              <br></br>
              solutions for an exceptional user experience.<br></br>
            </p>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Salesforce Consultation</p>
              <p className="main-top-bottom-content">
                Partner with our experienced Salesforce consultants to define
                and align your business objectives, maximizing the potential of
                Salesforce development services.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Salesforce Implementation</p>
              <p className="main-top-bottom-content">
                Analyze your unique business needs and leverage our Salesforce
                expertise to implement the ideal solution, enabling you to scale
                and optimize your operations.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Salesforce Custom Development</p>
              <p className="main-top-bottom-content">
                Unlock the full potential of Salesforce with our custom
                development services, tailored to enhance ROI, boost team
                productivity, and deliver a superior user experience.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Salesforce Lightning</p>
              <p className="main-top-bottom-content">
                Collaborate with our Salesforce ISV-certified developers to
                build responsive applications across devices, utilizing our deep
                knowledge of modules such as LWC and Aura.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">AppExchange Development</p>
              <p className="main-top-bottom-content">
                Harness the skills of our talented Salesforce developers to
                create applications, extensions, bolt solutions, and components,
                seamlessly uploadable to the AppExchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="arrivals-card-arrival p-5">
        <div className="container p-5 py-5">
          <div className="row p-2">
            <h1 className="arrivals-head-main-top-my-bottom">
              Askari Technologies A Veteran Salesforce Development Company
            </h1>
            <p className="arrival-main-bottom-top-head">
              Experience the convenience of accessing comprehensive Salesforce
              consultation, development, migration, integration, and <br></br>
              implementation services from a single reliable source.
            </p>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Dedicated Team</p>
              <p className="arricval-card-content-main-last-top">
                Collaborate with proactive experts aligned with your business
                objectives, leveraging their expertise to achieve your desired
                goals and provide an exceptional customer experience.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">On-Demand Scalability</p>
              <p className="arricval-card-content-main-last-top">
                Enjoy the flexibility to scale your team and customize solutions
                as per changing conditions and evolving business demands with
                our on-demand Salesforce services.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Support And Maintenance
              </p>
              <p className="arricval-card-content-main-last-top">
                Leverage the expertise of our Salesforce developers and access
                prompt resolution of queries. Benefit from our 24/7 support,
                on-time delivery, and efficient turnaround times.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Salesforce Services</p>
              <p className="arricval-card-content-main-last-top">
                Services Because Our team of skilled developers excels in
                understanding your requirements and devising effective
                strategies to harness the power of agile methodology, ensuring
                reduced total cost of ownership (TCO) and faster time to market.
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
                  Clients Choose Askari Technologies for Salesforce Services
                  Because
                </h2>
                <p className="h2-h3-h4">
                  Our team of skilled developers excels in understanding your
                  requirements and devising effective strategies to harness the
                  power of agile methodology, ensuring reduced total cost of
                  ownership (TCO) and faster time to market.
                </p>
                <ul className="newul">
                  <li>Salesforce ISV Partners</li>
                  <li>Certified and Verified Salesforce Experts </li>

                  <li>Scalability on Demand</li>
                  <li>Adaptable Engagement Models</li>
                  <li>Cost-Efficient Solution</li>
                  <li>Timely Delivery</li>
                  <li>Agile Development Approach</li>
                  <li>Code Authorization</li>
                  <li>Maximum Customer Satisfaction</li>
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

export default SalesForce;
