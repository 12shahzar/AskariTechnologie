import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const MagnetoDevelopment = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section Wocommer-banner">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                WooCommerce Development Services
              </h1>
              <p className="main-hero-para-main-div">
                Create easily customizable eCommerce stores and tap into a
                market full of potential audiences with BiztechCS. Further,
                improve your buyer’s journey and promote your online store with
                the best WooCommerce-compatible WordPress plugins. Leverage the
                best features of the platform with our WooCommerce development
                services.
              </p>
              <div className="btnnn py-4">
                <HashLink to={"#contact-us"}>
                  <button className="main-home-shopyt-btn ">
                    Consult woocommerce Development Expert
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
                  Develop Custom eCommerce Websites With Leading WooCommerce
                  Development Company
                </h2>
                <p className="about-main-content-parap">
                  Enhance your online presence and create a successful eCommerce
                  store with our expertise in WooCommerce development. Our
                  experienced developers can transform your existing<br></br>{" "}
                  <br></br> WordPress website into a fully functional eStore or
                  build a new one from scratch, tailored to your unique
                  requirements. We specialize in delivering seamless
                  multi-vendor WooCommerce stores and offer services such as
                  plugin development, theme development, customization, and
                  migration.<br></br> <br></br>
                  With over 16 years of experience, we have a proven track
                  record of creating highly profitable eCommerce stores for
                  clients across various industries and geographical regions. As
                  a trusted WooCommerce website development company, we take
                  care of the technical details, allowing you to focus on
                  generating traffic and growing your business. Partner with us
                  for comprehensive WooCommerce development services and unlock
                  the potential of your online store.
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
              WooCommerce Verticals We Serve
            </h1>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">WooCommerce Store Development:</p>
              <p className="main-top-bottom-content">
                Build feature-rich eCommerce stores that can scale with your
                business growth. Our WooCommerce experts analyze your
                requirements and create engaging eCommerce features to enhance
                the shopping experience for your customers.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">WooCommerce Website Customization</p>
              <p className="main-top-bottom-content">
                Customize your WooCommerce website to make it more
                customer-centric. Our experts work on your specific requirements
                and incorporate the latest eCommerce trends to reduce downtime,
                improve customer retention, and increase conversion rates.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">WooCommerce PWA Development</p>
              <p className="main-top-bottom-content">
                Deliver a native-like mobile app experience with WooCommerce
                PWAs (Progressive Web Apps). Our developers leverage headless
                PWA technology to create mobile-first shopping experiences for
                your customers.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">WooCommerce Theme Development:</p>
              <p className="main-top-bottom-content">
                Choose from existing WooCommerce templates or opt for custom
                theme development. Our WooCommerce theme development services
                help you create personalized experiences and build brand
                recognition.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">WooCommerce Plugin Development</p>
              <p className="main-top-bottom-content">
                Enhance your online store's features and functionalities with
                custom WooCommerce plugins. Create seamless experiences for your
                end-users and meet unique demands.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">WooCommerce Migration</p>
              <p className="main-top-bottom-content">
                Smoothly migrate your Magento or Shopify eCommerce stores to
                WooCommerce. Our experienced developers ensure hassle-free
                migration without data leaks, glitches, or altered SEO
                performance.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">
                PSD to WooCommerce Theme Conversion
              </p>
              <p className="main-top-bottom-content">
                Enhance your existing website themes and design a consistent and
                appealing look throughout your website. Our PSD to WooCommerce
                theme conversion services help create a unique and intuitive
                user experience.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">WooCommerce Maintenance & Support</p>
              <p className="main-top-bottom-content">
                Ensure the smooth functioning of your WooCommerce store with our
                maintenance and support services. Our WooCommerce developers are
                available round the clock to assist you and keep your site up
                and running.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Business Growth with WooCommerce</p>
              <p className="main-top-bottom-content">
                Our WooCommerce development services are designed to fuel your
                business growth. We leverage the power of WooCommerce to create
                robust and scalable eCommerce solutions that help you expand
                your online presence, reach new customers, and increase sales.
              </p>
            </div>
            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Dedicated Teams</p>
              <p className="main-top-bottom-content">
                Our dedicated teams of WooCommerce developers are passionate
                about creating exceptional online stores. They possess deep
                expertise in WooCommerce development and stay updated with the
                latest industry trends to deliver innovative and high-performing
                eCommerce solutions.
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
                  Reasons Clients Choose Askari Technologies for Custom
                  WooCommerce Development Services.
                </h2>
                <p className="h2-h3-h4">
                  Choose Askari Technologies for WooCommerce development and
                  benefit from business growth opportunities, dedicated teams of
                  experts, customer-oriented designs, and Shopify custom
                  development solutions tailored to your eCommerce success.
                </p>
                <ul className="newul">
                  <li>Skilled WooCommerce Professionals</li>
                  <li>Proven Experience in CRM Solutions</li>

                  <li>Flexible Engagement Models</li>
                  <li>100% Source Code Authorization</li>
                  <li>On-time Delivery of Projects</li>
                  <li>24 x 7 Technical Support</li>
                  <li>Dynamic Development</li>
                  <li>Extensive Work Experience</li>

                  <li>Confidentiality and Integrity</li>
                  <li>Streamlined Project Management</li>
                  <li>Scalable Storest</li>
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
