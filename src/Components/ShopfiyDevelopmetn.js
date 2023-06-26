import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const ShopfiyDevelopmetn = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section for-baground-images">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Shopify Development Services
              </h1>
              <p className="main-hero-para-main-div">
                Empower your global eCommerce experience with our custom Shopify
                development services. Surpass eCommerce giants worldwide with
                enhanced growth and success for startups, SMEs, and enterprises.
              </p>
              <div className="btnnn py-4">
                <HashLink to={"#contact-us"}>
                  <button className="main-home-shopyt-btn ">
                    Get Started With Shopify Development
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
                  Deliver Optimal Shopping Experiences With Our Shopify Services
                </h2>
                <p className="about-main-content-parap">
                  Askari Technologies, a leading Shopify development company,
                  offers comprehensive custom Shopify development services. With
                  a remarkable track record spanning over 16 years, we have
                  delivered diverse IT solutions and services to our clients.
                  <br></br> <br></br>At Askari Technologies, we provide valuable
                  solutions for all your eCommerce needs. Our Shopify store
                  development services are designed to ensure easy management of
                  content, products, and orders, granting you complete control
                  over your Shopify store. Our team of Shopify developers
                  possesses extensive knowledge of cutting-edge technology
                  stacks to accommodate your complex Shopify development
                  requirements. We assist you in developing, designing, testing,
                  deploying, and maintaining your eStore, ensuring a seamless
                  user experience. <br></br> <br></br>
                  Startups and enterprises choose Askari Technologies as their
                  first choice for taking their entire store online and
                  delivering a flawless user experience. Our commitment to
                  client satisfaction is reflected in our extensive clientele of
                  over 1000 businesses. Join our list of satisfied clients and
                  achieve your business objectives with us!
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
            <center>
              {" "}
              <h1 className="main-serv-ces-h1-head">
                Shopify Development Services That We Offer
              </h1>
            </center>
            <center>
              <p className="main-services-para-main-card-top py-3">
                We offer all-inclusive Shopify services that help add more
                functionality, monitor performance, improve sales channels &
                inventory management, and many more. Store Setup & Configuration
              </p>
            </center>
            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Shopify Web Development</p>
              <p className="main-top-bottom-content">
                As a Shopify web development company, our goal is to create
                eCommerce stores with industry-specific functionality. Our
                solutions are designed to help your business scale and thrive,
                offering easy-to-manage and secure platforms.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Shopify Custom Development</p>
              <p className="main-top-bottom-content">
                Bring uniqueness to your store and enhance its look and feel
                with our custom Shopify web development services. Our experts
                will customize your store per your brand’s custom needs and
                objectives.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Shopify Migration</p>
              <p className="main-top-bottom-content">
                With our Shopify eCommerce development services, we assist
                businesses in migrating their operations from various platforms
                such as BigCommerce, Magento, WooCommerce, Volusion, and more to
                Shopify.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Shopify Integration</p>
              <p className="main-top-bottom-content">
                Enhance the shopping experience and streamline business
                processes by seamlessly connecting your Shopify store with CRM,
                ERP, PIM, and email marketing systems. Upgrade the workflow
                capabilities of your eCommerce business for improved efficiency.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Launch your online store</p>
              <p className="main-top-bottom-content">
                swiftly with our expert assistance. As one of the top Shopify
                development companies, we help you set up and configure your
                Shopify store according to your business objectives and goals,
                ensuring a quick and efficient launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="arrivals-card-arrival p-5">
        <div className="container p-5 py-5">
          <div className="row p-2">
            <h1 className="arrivals-head-main-top-my-bottom">
              What Makes Askari a Leading Shopify Development Company
            </h1>
            <p className="arrival-main-bottom-top-head">
              We offer all-inclusive Shopify services that help add more
              functionality, monitor performance, improve sales channels &{" "}
              <br />
              inventory management, and many more.
            </p>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Agile Approach</p>
              <p className="arricval-card-content-main-last-top">
                Our team comprises skilled and experienced Shopify developers,
                product owners, and scrum masters who embrace an agile mindset.
                Collaborating seamlessly, they strive to maximize your business
                ROI. Through a continuous improvement and feedback approach, we
                enhance our services, products, and processes.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">DevOps</p>
              <p className="arricval-card-content-main-last-top">
                Our team of highly skilled and experienced Shopify developers at
                Askari Technologies harnesses the power of DevOps to enhance
                software quality, collaboration, and accelerate time to market.
                By adopting DevOps practices, we optimize application release
                and deployment processes, ensuring continuous feedback loops for
                ongoing improvement.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Performance Metrics:</p>
              <p className="arricval-card-content-main-last-top">
                As an esteemed Shopify development agency, we prioritize
                performance metrics when designing Shopify websites. Our focus
                includes key metrics such as apdex score, load capacity, page
                load speed, load time, time to first byte, and scalability to
                handle unexpected traffic surges.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Client Engagement</p>
              <p className="arricval-card-content-main-last-top">
                At Askari Technologies, we prioritize client engagement
                throughout the Shopify web store development process. We value
                your input and encourage continuous feedback to ensure a
                collaborative approach. Our goal is to have a positive impact on
                your business by providing tailored Shopify store design
                services and innovative, next-generation solutions.
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
                  Why Choose Askari Technologies for Shopify Store Development
                </h2>
                <p className="h2-h3-h4">
                  There are several compelling reasons to choose Askari
                  Technologies for your Shopify store development:
                </p>
                <ul className="newul">
                  <li>Experience and Expertise</li>
                  <li>2. Comprehensive Solutions</li>

                  <li>Customization and Flexibility</li>
                  <li> Cutting-Edge Technology</li>
                  <li>Client-Centric Approach</li>
                  <li>Proven Results</li>
                  <li>Ongoing Support</li>
                  <li>Dedicated Shopify Developers</li>

                  <li>On-time Delivery</li>
                  <li>Customer Satisfaction</li>
                  <li>Cost-Effective Solutions</li>
                  <li>Transparent Project Management</li>
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

export default ShopfiyDevelopmetn;
