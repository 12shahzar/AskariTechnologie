import React from "react";
import "../Styles/DevlopnerPage.css";
import mainAbout from "../Assets/shopdeveop2.png";
import Contactsub from "./Contactsub";
import { HashLink } from "react-router-hash-link";
const SalesImplemation = () => {
  return (
    <>
      <section className="Hero-Shopfy-section-1 All-hero-main Section for-baground-images">
        <div className="container p-5 main-first-hero-all-content">
          <div className="row p-2">
            <div className="col-lg-6 side-heading-para-content">
              <h1 className="main-hero-h1 py-3">
                Salesforce Implementation Services
              </h1>
              <p className="main-hero-para-main-div">
                Sales Cloud Implementation Elevate your sales performance,
                enhance customer communication, and gain valuable insights into
                sales pipelines and forecasting with our Salesforce Sales Cloud
                implementation services.
              </p>
              <div className="btnnn py-4">
                <button className="main-home-shopyt-btn ">
                  Request A Free Consultation{" "}
                </button>
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
                  Why Choose Us for SFDC Implementation
                </h2>
                <p className="about-main-content-parap">
                  When it comes to Salesforce CRM implementation, partnering
                  with our team offers a unique blend of technical expertise and
                  business acumen, ensuring that we deliver the ideal solution
                  to optimize and propel your business forward. With extensive
                  experience in CRM and diverse Salesforce modules such as Sales
                  Cloud, Service Cloud, Communities, and Field Service Cloud, we
                  guide you through a seamless implementation process and
                  maximize the value you derive from Salesforce.<br></br>{" "}
                  <br></br> As a trusted Salesforce ISV partner and a leading
                  Salesforce implementation company, we offer a comprehensive
                  range of services, including consulting, configuration,
                  development, migration, support, and maintenance. Our focus is
                  on developing a tailored solution that aligns precisely with
                  your specific requirements. Our flexible engagement model
                  empowers you to scale your project as needed, while
                  maintaining complete control over its direction. Moreover, our
                  developers are Salesforce certified, ensuring top-notch
                  expertise and a mutually beneficial partnership.<br></br>{" "}
                  <br></br>
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
            <h1 className="main-serv-ces-h1-head py-2">
              Choose our Salesforce implementation team to design the CRM{" "}
              <br></br>
            </h1>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Sales Cloud Implementation</p>
              <p className="main-top-bottom-content">
                Elevate your sales performance, enhance customer communication,
                and gain valuable insights into sales pipelines and forecasting
                with our Salesforce Sales Cloud implementation services.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Service Cloud Implementation</p>
              <p className="main-top-bottom-content">
                Drive customer loyalty by streamlining workflows and delivering
                personalized services across every customer touchpoint. Our
                Salesforce Service Cloud implementation consultants offer
                expertise in optimizing customer interactions.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Community Cloud Implementation</p>
              <p className="main-top-bottom-content">
                Create cutting-edge communities that reflect your brand and
                engage customers, partners, and employees in real-time
                experiences. Leverage our Salesforce Community Cloud
                implementation services to build customized community platforms.
              </p>
            </div>

            <div className="col-md-2 col-sm-8 card-main-div-main-card">
              <p className="card-top-main">Salesforce for NonProfits</p>
              <p className="main-top-bottom-content">
                Empower your nonprofit organization with Salesforce for
                Nonprofits, enabling digital transformation and creating a
                lasting impact. Our Salesforce implementation consultants
                specialize in purpose-driven solutions to manage income streams,
                grants, and programs in a unified space.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="arrivals-card-arrival p-5">
        <div className="container p-5 py-5">
          <div className="row p-2">
            <h1 className="arrivals-head-main-top-my-bottom py-3">
              Advantages of Salesforce Implementation
            </h1>

            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Enhanced Data Accuracy</p>
              <p className="arricval-card-content-main-last-top">
                By implementing Salesforce, you can centralize customer data,
                eliminating scattered information across departments and
                ensuring data accuracy and consistency.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Streamlined Data Access from Multiple Sources
              </p>
              <p className="arricval-card-content-main-last-top">
                Salesforce implementation allows integration with various tools
                like Oracle and SAP, enabling you to access data from different
                sources. With powerful APIs, you can create a comprehensive view
                of customers and their interactions.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">Sales Forecasting</p>
              <p className="arricval-card-content-main-last-top">
                Salesforce implementation provides insights into past and
                present sales trends, enabling accurate sales forecasting. This
                helps in identifying opportunities and planning future campaigns
                to drive revenue growth.
              </p>
            </div>
            <div className="col-lg-2 car-2-3-4">
              <p className="arrival-main-top-boottom">
                Improved and Automated Workflows
              </p>
              <p className="arricval-card-content-main-last-top">
                Salesforce implementation optimizes business processes,
                facilitating streamlined workflows and efficient product
                delivery. It simplifies sales goal achievement, eliminating
                unnecessary complexities.
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
                  Discover How Askari Technologies Can Assist With Salesforce
                  Implementation
                </h2>
                <p className="h2-h3-h4">
                  Irrespective of the project's scale, Askari Technologies
                  empowers you to seize opportunities by providing an extensive
                  array of Salesforce implementation services and delivering
                  business advantages.
                </p>
                <ul className="newul">
                  <li>Strategic Outlook</li>
                  <li>Profound Industry Knowledge</li>

                  <li>
                    Committed Consultants for Salesforce CRM Implementation
                  </li>
                  <li>A Group of Accredited Salesforce Developers</li>
                  <li>Customer-Focused Approach</li>
                  <li>Timely Project Completion</li>
                  <li>Competitive Pricing Structure</li>
                  <li>Ongoing Maintenance and Support</li>
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

export default SalesImplemation;
