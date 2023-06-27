import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const odoo = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section odoo-img">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Leverage Odoo Development Services
              </h1>
              <p className="main-hero-para-main-div">
                Partner with a trusted Odoo development company, Askari
                Technologies, to embark on your Odoo ERP development journey.
                Our team of certified Odoo specialists, armed with industry best
                practices, technical expertise, and valuable insights, is
                committed to supporting your business success. Choose Askari
                Technologies for top-notch Odoo development services and let our
                team of Odoo Ready partners assist you in managing your business
                apps.
              </p>
              <div className="btnnn py-4">
                <HashLink to={"#contact-us"}>
                  <button className="main-home-shopyt-btn ">
                    Get A Free Quote
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
                  Create Personalized Workflows with Odoo Development Company
                </h2>
                <p className="about-main-content-parap">
                  You might have to manage many things while running a huge
                  business like inventory, customers, sales, etc. And Odoo ERP
                  is a one-stop solution for all your business needs. You need
                  to partner with one of the renowned, experienced Odoo
                  development companies in India. That’s when Askari
                  Technologies comes into the picture!<br></br> <br></br>With
                  16+ years of experience under our name and being accredited as
                  an Odoo Ready partner, we can help you leverage the power of
                  Odoo seamlessly. Make use of the tailored solutions to
                  streamline your business operations like never before. Right
                  from consultation to development, implementation, and support,
                  we will walk you through the entire journey. <br></br>{" "}
                  <br></br>
                  We assist businesses like yours with Odoo ERP software
                  development for long-term success. Our customized
                  front-end/back-end development and integration of advanced
                  features make it possible. Now, automate your business
                  processes by leveraging the skills of the best Odoo
                  developers.
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
              Our Range of Odoo <br></br> Development Services
            </h1>

            <p className="main-services-para-main-card-top py-3">
              Transform your ideas into reality and achieve your business{" "}
              <br></br>
              goals with our expert Odoo custom development services. Share
              <br></br>
              your requirements and receive a detailed plan today!
            </p>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Odoo Website Development</p>
              <p className="main-top-bottom-content">
                Our skilled professionals assist you in developing high-end
                websites with stunning visuals and intelligent features using
                the exceptional capabilities of Odoo.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Odoo Store Development</p>
              <p className="main-top-bottom-content">
                Sync your Odoo ERP with your eCommerce store to provide a fully
                optimized solution that boosts customer engagement. Explore our
                Odoo eCommerce development services for seamless integration.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Odoo App Development</p>
              <p className="main-top-bottom-content">
                Partner with a professional Odoo app development company to
                create tailored apps that cater to your specific requirements.
                Our experts develop highly functional Odoo apps with additional
                features to enhance performance.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Odoo Theme Development</p>
              <p className="main-top-bottom-content">
                Choose our Odoo theme development services to create custom
                themes for both the frontend and backend of your applications.
                Our themes are well-regarded by clients worldwide.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Odoo Module Development</p>
              <p className="main-top-bottom-content">
                Extend the functionality of your store with dynamic features
                through customized Odoo module development. Scale seamlessly by
                adding more capabilities to your Odoo modules.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Odoo Customization</p>
              <p className="main-top-bottom-content">
                Maximize the potential of your Odoo website and online
                applications with our premium Odoo customization services. As an
                experienced Odoo app development company, we cater to your
                unique business needs. Share your requirements with us!
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Odoo Migration</p>
              <p className="main-top-bottom-content">
                Trust our Odoo development services for smooth and efficient
                data and module migration. We ensure seamless transitions
                between different Odoo versions and conduct thorough
                post-migration testing.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Odoo Integration</p>
              <p className="main-top-bottom-content">
                Achieve seamless integration of your ERP solution with CRM,
                accounting, and other third-party tools. As a reputable Odoo
                development company, we prioritize data security and ensure
                glitch-free operations.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Odoo Implementation</p>
              <p className="main-top-bottom-content">
                Leverage our expertise in Odoo ERP development services to
                successfully implement Odoo technology into your web
                applications. Overcome potential challenges and save time and
                resources with our expert guidance.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Odoo Support</p>
              <p className="main-top-bottom-content">
                Receive timely updates and technical support from our dedicated
                team at Askari Technologies, an Odoo development company. We are
                available round the clock to ensure the smooth operation of your
                system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="arrivals-card-arrival p-5">
        <div className="container p-5 py-5">
          <div className="row p-2">
            <h1 className="arrivals-head-main-top-my-bottom">
              Benefits of Odoo Development:
            </h1>
            <p className="arrival-main-bottom-top-head">
              No matter the scale of your enterprise, you can consolidate all
              departmental tasks in a unified platform. <br></br> Achieve
              process automation, efficient resource management, and attain
              significant return on investment (ROI).
            </p>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Result-Driven Workflow</p>
              <p className="arricval-card-content-main-last-top">
                Benefit from Odoo ERP's robust architecture, which enables
                streamlined management of business processes through centralized
                data. Experience enhanced productivity and effective
                relationship management with automation and transparency.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Scalability on Demand</p>
              <p className="arricval-card-content-main-last-top">
                With Odoo's dynamic ERP solution, you have the flexibility to
                add new users and modules to your existing system as your
                business requirements evolve. Scale your operations conveniently
                and adapt to growth.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Improved Sales and ROI</p>
              <p className="arricval-card-content-main-last-top">
                Leverage the power of Odoo's modules, including Odoo CRM, POS,
                and sales implementation, to enhance your sales performance at a
                cost-effective price point. Drive revenue growth and achieve a
                higher return on investment.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Reliable Support and Maintenance
              </p>
              <p className="arricval-card-content-main-last-top">
                Take advantage of our comprehensive Odoo development services,
                ensuring prompt resolution of your queries. Benefit from 24/7
                support, on-time delivery, and efficient turnaround times for a
                seamless experience.
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
                  Why Choose Askari Technologies for Odoo ERP Development
                </h2>
                <p className="h2-h3-h4">
                  Experience a highly flexible ERP solution tailored to your
                  business needs when you partner with Askari Technologies. We
                  offer comprehensive services, including consultation, design,
                  development, implementation, and post-launch support. Our
                  expert team is equipped to identify and address any potential
                  ERP challenges you may encounter.
                </p>
                <ul className="newul">
                  <li>Highly Skilled Odoo Developers</li>
                  <li>Flexible Scalability</li>

                  <li>Cost-effective Solution</li>
                  <li>Timely Delivery</li>
                  <li>Agile Approach</li>
                  <li>Robust Coding Standards</li>
                  <li>Enhanced UI/UX Development Support</li>
                  <li>Code Authentication</li>
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

export default odoo;
