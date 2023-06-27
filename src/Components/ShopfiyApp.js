import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const ShopfiyApp = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section Shopfiy-app-main">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Shopify App Development Company
              </h1>
              <p className="main-hero-para-main-div">
                Accelerate your business growth and attract customers with a
                tailor-made Shopify app developed by our expert team. Harness
                the power of our Shopify app development services to streamline
                business processes and enhance customer engagement.
              </p>
              <div className="btnnn py-4">
                <HashLink to={"#contact-us"}>
                  <button className="main-home-shopyt-btn ">
                    Request Free Consultation{" "}
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
                  Amplify Your Custom Shopify App Development
                </h2>
                <p className="about-main-content-parap">
                  While Shopify offers a vast array of apps, they may not always
                  align with your business requirements. If you seek to
                  personalize your customers' shopping experience, a custom app
                  is the answer. Our Shopify App Development Company specializes
                  in creating bespoke apps that cater to your specific needs,
                  ensuring a unique and personalized user experience.<br></br>{" "}
                  <br></br> Our Shopify application development services enable
                  you to deliver an optimal experience to your customers.
                  Whether you need a custom app for your e-store or wish to
                  integrate third-party extensions and features, our trusted
                  Shopify app development company, Biztech, will deliver an
                  application that meets your exact specifications. <br></br>{" "}
                  <br></br>
                  With over 15 years of industry experience, we have
                  collaborated with numerous clients across diverse sectors.
                  Leveraging software engineering methods and best practices, we
                  ensure the success of your business. By choosing our eCommerce
                  development services, you gain a team that understands the
                  intricacies of the eCommerce sector.
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
              Empower Your Business with Our Shopify <br></br> App Development
              Services
            </h1>
            <p className="main-services-para-main-card-top py-3">
              Experience the power of a custom, feature-rich Shopify app
              tailored to your specific requirements. <br></br> Here are the
              Shopify Custom App Development services we offer.
            </p>
            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Private Shopify App Development</p>
              <p className="main-top-bottom-content">
                Build a private Shopify app exclusively for your business,
                granting access to your store's data through Shopify's APIs.
                Expand your store's capabilities across multiple device
                platforms.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Public Shopify App Development</p>
              <p className="main-top-bottom-content">
                Develop a public Shopify app that can be accessed by other
                merchants and listed in the Shopify App Store. Enhance your
                clients' experience and reach a broader audience.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Custom Shopify App Development</p>
              <p className="main-top-bottom-content">
                Add extra features, integrate the app with your store, and
                enhance security. Rely on us for custom Shopify apps, including
                order and customer management, inventory, marketing tools, and
                more.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Shopify App Integration</p>
              <p className="main-top-bottom-content">
                Seamlessly integrate various third-party applications, such as
                payments, CRM, accounting, inventory, and promotions, to enhance
                your e-store's functionality.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Shopify App Data Migration</p>
              <p className="main-top-bottom-content">
                Migration: Effortlessly migrate your old store's data into the
                Shopify app, ensuring uninterrupted business performance and a
                smooth transition.
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
                  Benefits of Custom Shopify Application Development
                </h2>
                <p className="h2-h3-h4">
                  Feature-Rich App: Design and incorporate features that align
                  with your business goals, strengthen your brand identity, and
                  surpass competitors.
                </p>
                <ul className="newul">
                  <li>Workflow Management</li>
                  <li>Higher Conversion Rates</li>

                  <li>Security and Reliability</li>
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
