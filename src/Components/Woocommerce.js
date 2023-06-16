import React from "react";
import "../Styles/Shopfiy.css";
import Main2Img from "../Assets/magentoCover.png";

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
import Banner from "../Assets/ASP.png";
const Woocommerce = (props) => {
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
            <h1 className="main-heading">WooCommerce Development Services</h1>
            <p className="main-heading">
              Create easily customizable eCommerce stores and tap into a market
              full of potential audiences with BiztechCS. Further, improve your
              buyer’s journey and promote your online store with the best
              WooCommerce-compatible WordPress plugins. Leverage the best
              features of the platform with our WooCommerce development
              services.
            </p>
            <button className="btn Hire-btn p-2">
              Consult Magento Development Expert
            </button>
          </div>
        </div>
      </section>

      {/* <section className="main-2 justify-content-center align-content-center ">
        <div className="row">
          <div className="col-lg-5 justify-content-center ">
            <img src={Main2Img} alt="" className=" img-fluid " />
          </div>
          <div className="col-lg-6 m-auto ">
            <h3 className="about-head p-3">
              Develop Custom eCommerce Websites With Leading WooCommerce
              Development Company
            </h3>
            <p className="about-para p-3 ">
              Transform your existing WordPress website to a full-fledged,
              functional eStore or build one from scratch. Regardless of your
              unique requirements, our developers can assist you in building and
              engaging customers with great experiences. With our 16+ years of
              experience, we excel in delivering multi-vendor WooCommerce stores
              effortlessly. Not to mention, our developers have expertise in
              WooCommerce plugin development, theme development, customization,
              and migration. If you want to build a highly profitable
              one-of-its-kind eCommerce store, then BiztechCS can help you
              create a robust eCommerce store. As a leading WooCommerce website
              development company, we have created several B2B and B2C eCommerce
              stores for clients in different geographical regions. Want to set
              up an online store and generate significant traffic without
              indulging in the nitty-gritty and technical details? Leave your
              WordPress WooCommerce development worries to us!
            </p>
          </div>
        </div>
      </section> */}
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
                WooCommerce Development Professionals are a Click Away
              </h3>
              <p className="c-para">
                Reach us with your ideas! We will connect with you within one
                business day to help you transform your digital journey with our
                custom development services.
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
            Biztech, A Pioneer in WooCommerce Ecommerce Development
          </h2>
          <p className="leading-para">
            Meet all your WooCommerce consultation, development, migration, and
            maintenance needs under one roof. Create impressive eCommerce
            experiences and wow your customers with a scalable and futuristic
            online store.
          </p>
          <div className="row leading-card-row py-4">
            <div className="col-md-2 leadin-card p-5 ">
              <h5 className="leading-card-head">Customer-Oriented Designs</h5>
              <p className="leading-card-para">
                Be it a small Magento storefront or an enterprise level e-store,
                our Magento services include building feature-rich, customized
                B2B and B2C eCommerce stores that suits your business needs.
              </p>
            </div>
            <div className="col-md-2 leadin-card p-5  ">
              <h5 className="leading-card-head">Dedicated Team</h5>
              <p className="leading-card-para">
                Put appealing visual designs and engage target audience with our
                appealing frontend themes. Our Magento theme development elicit
                your design expectations to develop custom themes in PSDs, PI,
                PNG, and Sketch.
              </p>
            </div>

            <div className="col-md-2 leadin-card p-5 ">
              <h5 className="leading-card-head">Agile Development</h5>
              <p className="leading-card-para">
                Expand business, automate workflows and drive customer
                experience by leveraging our custom Magento extension
                development. We help you develop custom extensions and modules
                that will enhance your Magento store performance.
              </p>
            </div>
            <div className="col-md-2 leadin-card p-5 ">
              <h5 className="leading-card-head">Business Growth</h5>
              <p className="leading-card-para">
                Develop native-like apps and mobile responsive websites with our
                Magento PWA development services. You can leverage our Magento
                PWA development to help your business support mobile
                interactions and reach customers where they are.
              </p>
            </div>
            <div className="ser-btn py-3">
              <button className="btn Hire-btn services-btn text-center m-auto ">
                Get Started With Shopify Development
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-5">
            <img src={Banner} className="bannerimg" />
          </div>
          <div className="col-lg-6 box2">
            <h1 className="support-head">
              Reasons Clients Choose BiztechCS for Custom WooCommerce
              Development Services
            </h1>
            <p className="support-para">
              Our competent WooCommerce developers can identify your business
              needs and create engaging eCommerce stores for your audience.
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

export default Woocommerce;
