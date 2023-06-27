import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const MagnetoDevelopment = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section  this-magento">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Magento Development Services
              </h1>
              <p className="main-hero-para-main-div">
                Transform and enrich eCommerce experiences for your customers
                worldwide with our custom Magento development services. Achieve
                enhanced growth and success for startups, SMEs, and enterprises.
              </p>
              <div className="btnnn py-4">
                <HashLink to={"#contact-us"}>
                  <button className="main-home-shopyt-btn ">
                    Get Started With Magento Development
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
                  Deliver Optimal Shopping Experiences With Our Magento Services
                </h2>
                <p className="about-main-content-parap">
                  Askari Technologies, a leading Magento development company,
                  offers comprehensive custom Magento development services. With
                  over 16 years of experience, we have delivered diverse IT
                  solutions and services to our clients..<br></br> <br></br>
                  Magento Theme Development: Enhance the look and feel of your
                  store with custom Magento theme development, tailored to your
                  brand's needs and objectives. <br></br> <br></br>
                  Magento Extension Development: Extend the functionality of
                  your Magento store with custom Magento extensions, designed to
                  add more features and capabilities.<br></br> <br></br>
                  Magento PWA Development: Improve the performance and user
                  experience of your Magento store with Magento Progressive Web
                  App (PWA) development, offering a seamless mobile experience.
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
              Our Magento Development Approach
            </h1>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Store Setup & Configuration:</p>
              <p className="main-top-bottom-content">
                Swiftly launch your online store with expert assistance in
                setting up and configuring your Magento store according to your
                objectives.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Magento Web Development</p>
              <p className="main-top-bottom-content">
                Create scalable and secure eCommerce platforms with
                industry-specific functionality, designed to help your business
                thrive.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Magento Custom Development:</p>
              <p className="main-top-bottom-content">
                Customize your Magento store to reflect your brand's unique
                identity and meet your specific requirements.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Magento Migration</p>
              <p className="main-top-bottom-content">
                Seamlessly transition your business from various platforms to
                Magento, ensuring a smooth and efficient migration process.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Magento Integration</p>
              <p className="main-top-bottom-content">
                Streamline business processes by connecting your Magento store
                with CRM, ERP, and other systems for improved efficiency.
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
              <p className="arrival-main-top-boottom">Agile Approach:</p>
              <p className="arricval-card-content-main-last-top">
                Our team embraces an agile mindset, maximizing your business ROI
                through continuous improvement and feedback.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom"> DevOps</p>
              <p className="arricval-card-content-main-last-top">
                Harnessing the power of DevOps, we optimize application release
                and deployment processes, ensuring continuous improvement and
                collaboration.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Performance Metrics</p>
              <p className="arricval-card-content-main-last-top">
                We prioritize performance metrics, such as load speed and
                scalability, to deliver high-performing Magento websites.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Client Engagement:</p>
              <p className="arricval-card-content-main-last-top">
                We value client input and encourage continuous feedback to
                ensure a collaborative approach and positive impact on your
                business.
              </p>
            </div>

            <button className="btn-car-arrivals-main-23">
              Get Started With Magento Development
            </button>
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
                  Why Choose Askari Technologies for Magento Store Development
                </h2>

                <ul className="newul">
                  <li>Experience and Expertise</li>
                  <li>Comprehensive Solutions</li>

                  <li>Customization and Flexibility</li>
                  <li>Cutting-Edge Technology</li>
                  <li>Client-Centric Approach</li>
                  <li>Proven Results</li>
                  <li>Longoing Support</li>
                  <li>On-time Delivery</li>
                  <li>Client-Centric Approach</li>
                  <li>Proven Results</li>
                  <li>Longoing Support</li>
                  <li>On-time Delivery</li>
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

export default MagnetoDevelopment;
