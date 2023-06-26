import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const EcommerceAp = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section  this-magento">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                eCommerce App Development Services
              </h1>
              <p className="main-hero-para-main-div">
                At Askari Technologies, we understand the importance of building
                customer loyalty and achieving a higher return on investment
                (ROI). As a leading eCommerce app development company, we
                specialize in creating robust and intuitive mobile apps that
                propel your business forward. Expand your customer base and
                enhance your business growth with our experienced team of mobile
                app developers.
              </p>
              <div className="btnnn py-4">
                <HashLink to={"#contact-us"}>
                  <button className="main-home-shopyt-btn ">
                    Start 15-Day Free MVP
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
                  Hire Developers to Scale Your eCommerce Business
                </h2>
                <p className="about-main-content-parap">
                  Our team of developers is skilled in every stage of the
                  software development life cycle. Whether you have an app idea
                  that needs to be transformed into reality or require
                  assistance at any development stage, we are here to help.
                  Connect with us to elevate your eCommerce business with our
                  expertise.<br></br> <br></br>When it comes to eCommerce mobile
                  app development, our team excels in building feature-rich,
                  scalable, and comprehensive mobile apps. We have worked with
                  businesses across various industries, allowing us to adapt to
                  specific requirements. Whether you need immersive experiences
                  using augmented reality (AR) or a multi-vendor marketplace
                  solution, we deliver results that meet your expectations{" "}
                  <br></br> <br></br>
                  With Askari Technologies, you can launch your app in a matter
                  of weeks. Our MageMob app builder offers a cost-effective and
                  efficient solution that eliminates the need for months of
                  development time. It provides robust features tailored to your
                  target users and industry requirements. Transforming the
                  eCommerce experience has never been easier with our
                  streamlined app development process.
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
              eCommerce Applications for <br></br> Diverse Business Needs
            </h1>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">
                Enhance Business-to-Business Interactions
              </p>
              <p className="main-top-bottom-content">
                Is your B2B sales predominantly mobile-driven? Maximize your
                growth potential with our B2B eCommerce application development
                services. Let us create mobile-first experiences that cater to
                your unique B2B requirements.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Expand Reach to Customers</p>
              <p className="main-top-bottom-content">
                Reach a broader customer base and tap into new market
                opportunities with our eCommerce application development
                services. We specialize in building feature-rich apps that
                resonate with your customers, delivering exceptional user
                experiences.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">
                Empower Customer-to-Business Interactions
              </p>
              <p className="main-top-bottom-content">
                Do you have an innovative idea for a C2B mobile app? Hire a team
                with both technical expertise and industry knowledge for
                seamless eCommerce application development. We can bring your
                unique C2B app concept to life.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">
                Launch and Scale Customer-to-Customer Business
              </p>
              <p className="main-top-bottom-content">
                Unlock the potential of your C2C business by launching a
                marketplace app. Our team of experts is well-versed in
                delivering tailored solutions that align with your specific
                business logic and requirements.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">
                Strengthen Business-to-Administration Processes
              </p>
              <p className="main-top-bottom-content">
                From defense to aerospace, we provide B2A eCommerce mobile app
                development services to a wide range of industries. Collaborate
                with our highly skilled team to build an app that streamlines
                your business-to-administration interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="arrivals-card-arrival p-5">
        <div className="container p-5 py-5">
          <div className="row p-2">
            <h1 className="arrivals-head-main-top-my-bottom py-2">
              Fundamental Features for eCommerce Application Development
            </h1>

            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Easy Log-in and Seamless Checkout Experience
              </p>
              <p className="arricval-card-content-main-last-top">
                Our development process revolves around user-centric design,
                ensuring a smooth onboarding and hassle-free checkout process.
                We prioritize creating pages that offer ease and convenience to
                your app users.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Interactive Dashboard for Enhanced User Experience
              </p>
              <p className="arricval-card-content-main-last-top">
                The dashboard serves as a central hub for users, providing
                access to product categories, top deals, advertisement banners,
                and more. We focus on developing a user-friendly and
                well-functioning dashboard that enhances the overall app
                experience.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Versatile Payment Options for Convenient Transactions
              </p>
              <p className="arricval-card-content-main-last-top">
                Offering a variety of payment options is essential for providing
                a seamless shopping experience. Our eCommerce app development
                services include integrating secure payment gateways that enable
                users to choose from a range of payment methods.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Customer Reviews and Ratings Integration
              </p>
              <p className="arricval-card-content-main-last-top">
                Integrate an in-app review and rating feature to encourage
                customer feedback and engagement. We understand the significance
                of customer reviews and ratings in an eCommerce mobile app and
                ensure seamless integration of this important functionality.
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
                  eCommerce Mobile App Development: Transforming Shopping
                  Experiences
                </h2>
                <p className="h2-h3-h4">
                  Revolutionize the shopping experience with a captivating
                  mobile app. At Askari Technologies, we offer eCommerce app
                  development services for all store types and platforms. Let us
                  build feature-rich mobile apps that drive your business
                  forward.
                </p>
                <ul className="newul">
                  <li>Enhance App with AR/VR</li>
                  <li>Multi-vendor Marketplace Apps</li>

                  <li>Mobile App Marketing Services</li>
                  <li>eCommerce Support and Maintenance</li>
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

export default EcommerceAp;
