import React from "react";
import "../Styles/Shopfiy.css";
import Main2Img from "../Assets/ASP.png";

// dev 2 Import
import "../Styles//Inductry.css";
import Footer from "./Footer";
import Hire from "./Hire";
import Hirebutton from "./Hirebutton";
import Australia from "../Assets/aus.png";
import Pakistan from "../Assets/pak.png";
import America from "../Assets/ame.png";
import UAE from "../Assets/uae.png";
import Fashions from "../Assets/pic1.png";
import Retail from "../Assets/pic3.png";
import AutoParts from "../Assets/autoparts.png";
import Fitness from "../Assets/apple.png";
import Furniture from "../Assets/pic5.png";
import Monitor from "../Assets/pic4.png";
import Beauty from "../Assets/beauty.png";
import Pharmaceutical from "../Assets/pharma.png";
import Rental from "../Assets/car.png";
import Banner from "../Assets/vuejsMain.png";

const SalesIntergation = (props) => {
  const ServcicesCard = ({ Heading, Para }) => {
    return (
      <div className="col-md-2 services-card ">
        <h4 className="car-heading">{Heading}</h4>
        <p className="card-para">{Para}</p>
      </div>
    );
  };
  return (
    <>
      <section className="hero ">
        <div className="container-fluid">
          <ul>
            <li className="Main-ul py-3">
              <a href="/">Home /</a>
              <a href="/">Development /</a>
              <a href="/">CRM & ERP /</a>
            </li>
          </ul>
          <div className="col-lg-5">
            <h1 className="main-heading">Salesforce Integration Services</h1>
            <p className="main-heading">
              Accelerate Salesforce adoption and eliminate redundancy with our
              custom Salesforce integration services. Whether you want to
              integrate Salesforce with your ERP, NonProfit with a backend
              system, or a third-party app with Salesforce, we can help you with
              all the Salesforce integration solutions you need.
            </p>
            <button className="btn Hire-btn p-2">
              Request A Free Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="main-2 justify-content-center align-content-center ">
        <div className="row h-50 w-100">
          <div className="col-lg-6 j">
            <img src={Main2Img} alt="" className="about-img img-fluid" />
          </div>
          <div className="col-lg-6 m-auto ">
            <h3 className="about-head p-3">
              Rigorous Vetting to Ensure you Hire Dedicated AngularJS Developers
            </h3>
            <p className="about-para p-3 ">
              At Askari technologies, we ensure companies match with the people
              having the in-demand skill sets. We follow a rigorous vetting
              process to ensure that developers are experienced in delivering
              custom solutions while maintaining transparency. When you hire
              AngularJS programmers from us, you get the upper hand in
              development, deliveries, and management. Our Angular developers
              have extensive knowledge of Angular 1.0 to the latest version,
              Angular 13.0. Hire our dedicated AngularJS developers for project
              consulting, web and mobile app development, migration,
              customization, maintenance, and post-launch support at 50% lesser
              development cost.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-us-s">
        <div className="container-fluid">
          <div className="row py-5">
            <div className="col-lg-6 py-5 contact-cc1">
              <h3 className="c-head py-5">
                Consult Salesforce ECommerce Integration Experts
              </h3>
              <p className="c-para">
                We are here to help you migrate your data to Salesforce without
                any hassle. Reach us out to know about the process we would
                follow to ensure seamless data migration.
              </p>
            </div>
            <div className="col-lg-6 contavt-c-23">
              <h3 className="conatact-tittle p-2">Get Started</h3>

              <form>
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    class="form-control"
                    id="exampleInputname"
                    aria-describedby="nameHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInpuEmail" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" class="btn-started">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="services py-5">
        <div className="container">
          <h3 className="services-head">
            Why You Should Hire Someone to Build Shopify Stores
          </h3>
          <p className="services-para text-center">
            From Salesforce integration consulting to Salesforce service cloud
            integration through third-party tools like Quickbooks, VoIP, etc.,
            we are capable of offering you a tailored service.
          </p>
          <div className="row services-row ">
            <ServcicesCard
              Heading={"Transparent Conduct"}
              Para={
                "Remote Shopify app developers give you accessibility to all the development resources and are open to discussions. They provide periodic reports, access to tools."
              }
            />
            <ServcicesCard
              Heading={"Cost Saving"}
              Para={
                "Worry no more about team management and infrastructural needs when you hire Shopify web developers. You only have to pay for their performance and time spent on the project."
              }
            />
            <ServcicesCard
              Heading={"Scalable Team"}
              Para={
                "Outsourcing Shopify programmers give you the flexibility to expand your business without cutting corners. Besides, staying ahead of the competition is much easier when you hire "
              }
            />
          </div>

          <div className="row services-row ">
            <ServcicesCard
              Heading={"Transparent Conduct"}
              Para={
                "Remote Shopify app developers give you accessibility to all the development resources and are open to discussions. They provide periodic reports, access to tools."
              }
            />
            <ServcicesCard
              Heading={"Cost Saving"}
              Para={
                "Worry no more about team management and infrastructural needs when you hire Shopify web developers. You only have to pay for their performance and time spent on the project."
              }
            />
            <ServcicesCard
              Heading={"Scalable Team"}
              Para={
                "Outsourcing Shopify programmers give you the flexibility to expand your business without cutting corners. Besides, staying ahead of the competition is much easier when you hire "
              }
            />
          </div>
        </div>
      </section>

      <section className="leading py-5">
        <div className="container-fluid">
          <h2 className="leading-head">
            Why Biztech for Custom Salesforce Integration
          </h2>

          <div className="row leading-card-row py-4">
            <div className="col-md-2 leadin-card p-5 ">
              <h5 className="leading-card-head">Accurate Information</h5>
              <p className="leading-card-para">
                Biztech has 16+ years of experience in Salesforce implementation
                services. We bring industry expertise to deliver top-notch
                solutions tailored to your business needs.
              </p>
            </div>
            <div className="col-md-2 leadin-card p-5  ">
              <h5 className="leading-card-head">
                Access Data From Various Sources
              </h5>
              <p className="leading-card-para">
                With Salesforce implementation, you can bring different tools,
                such as Oracle, SAP, etc. You can easily integrate third-party
                tools with the help of powerful APIs and build a comprehensive
                customer view.
              </p>
            </div>

            <div className="col-md-2 leadin-card p-5 ">
              <h5 className="leading-card-head">Sales Forecasting</h5>
              <p className="leading-card-para">
                You can easily understand past and present sales trends and
                opportunities. It’s easy to predict future sales possibilities
                and lead prospects that may give better insights to plan next
                campaigns and generate more revenue.
              </p>
            </div>
            <div className="col-md-2 leadin-card p-5 ">
              <h5 className="leading-card-head">
                Improved And Automated Workflows
              </h5>
              <p className="leading-card-para">
                Salesforce implementation improves the overall business process
                and aids in exceptional product delivery. You can achieve sales
                goals without undue complications.
              </p>
            </div>
            <div className="ser-btn py-3">
              <button className="btn Hire-btn services-btn text-center m-auto ">
                Let’s discuss
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-5">
            <img src={Banner} className="img-fluid py-5" />
          </div>
          <div className="col-lg-6 box2">
            <h1 className="support-head">
              The Advantage of Relying on Askari Tech Salesforce Consulting
              Services
            </h1>
            <p className="support-para">
              At Biztech, one of the top Salesforce consulting companies in
              India, we help you move swiftly from concept to implementation.
              Our Salesforce experts will assist you in distinct approaches.
            </p>
            <h3 className="head2">{props.Text}</h3>
            <h6 className="subHead2">{props.SubHead}</h6>
            <ul className="ul">
              <li>Salesforce ISV Partners</li>
              <li>Experience in CRM solutions</li>
              <li>Competitive Salesforce Support Plans</li>
              <li>On-demand Scalability</li>
              <li>Finest Maintenance Services</li>
              <li>On-time Delivery</li>
              <li>Agile Methodology</li>
              <li>Code Authorization</li>
              <li>100% Customer Satisfaction</li>
              <li>24*7 Support and Maintenance</li>
            </ul>
            <button type="button" class="btn button">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
      <div className="container cont">
        <h4 className="head3">Frequently Asked Questions</h4>
        <h6 className="Everything">
          Everything you need to know about the product and billing.
        </h6>

        <div className="accordion w-100  cont2" id="basicAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <h6 className="listT">Is there a free trial available?</h6>
              </button>
            </h2>
            <div
              id="basicAccordionCollapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-mdb-parent="#basicAccordion"
              style={{}}
            >
              <div className="accordion-body">
                <p>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h6 className="listT"> I change my plan later?</h6>
              </button>
            </h2>
            <div
              id="basicAccordionCollapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-mdb-parent="#basicAccordion"
              style={{}}
            >
              <div className="accordion-body">Lorem ipsum</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h6 className="listT">What is your cancellation policy?</h6>
              </button>
            </h2>
            <div
              id="basicAccordionCollapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-mdb-parent="#basicAccordion"
              style={{}}
            >
              <div className="accordion-body">lorem ipsum</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseOne1"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <h6 className="listT">
                  Can other info be added to an invoice?
                </h6>
              </button>
            </h2>
            <div
              id="basicAccordionCollapseOne1"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-mdb-parent="#basicAccordion"
              style={{}}
            >
              <div className="accordion-body">lorem ipsum</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseTwo1"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h6 className="listT">How does billing work?</h6>
              </button>
            </h2>
            <div
              id="basicAccordionCollapseTwo1"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-mdb-parent="#basicAccordion"
              style={{}}
            >
              <div className="accordion-body">lorem ipsum</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseThree1"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h6 className="listT">How do I change my account email?</h6>
              </button>
            </h2>
            <div
              id="basicAccordionCollapseThree1"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-mdb-parent="#basicAccordion"
              style={{}}
            >
              <div className="accordion-body">lorem ipsum</div>
            </div>
          </div>
        </div>

        <div className="row flags">
          <div className="col-md-3 col-sm-4  coll">
            <img src={America} className="coll" />
            <h4 className="flagT">United State</h4>
            <p className="para2">
              160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
            </p>
          </div>
          <div className="col-md-3  col-sm-4  coll">
            <img src={Australia} className="coll" />
            <h4 className="flagT">Australia</h4>
            <p className="para2">
              160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
            </p>
          </div>
          <div className="col-md-3  col-sm-4  coll">
            <img src={Pakistan} className="coll" />
            <h4 className="flagT">Pakistan</h4>
            <p className="para2">
              160 Bovet Road, Suite #<br /> 101San Mateo, CA 94402 USA
            </p>
          </div>
          <div className="col-md-3  col-sm-4 coll">
            <img src={UAE} className="coll" />
            <h4 className="flagT">UAE</h4>
            <p className="para2">Comming Soon</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesIntergation;
