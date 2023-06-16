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
import Banner from "../Assets/banner.png";
const MagentoDeployment = (props) => {
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
            <h1 className="main-heading">Magento Development Services</h1>
            <p className="main-heading">
              As a Magento development company, we deliver an intuitive,
              feature-rich, omnichannel Magento eCommerce store that perfectly
              reflects your brand identity and drives financial results. Save up
              to 40% on development, maintenance, and support costs with our
              Adobe Commerce development services aka Magento development
              services
            </p>
            <button className="btn Hire-btn p-2">
              Consult Magento Development Expert
            </button>
          </div>
        </div>
      </section>

      <section className="main-2 justify-content-center align-content-center ">
        <div className="row">
          <div className="col-lg-5 justify-content-center ">
            <img src={Main2Img} alt="" className=" img-fluid " />
          </div>
          <div className="col-lg-6 m-auto ">
            <h3 className="about-head p-3">
              Achieve Endless Possibilities With Custom Magento Development
            </h3>
            <p className="about-para p-3 ">
              When one visits Paul Smith’s website, they instinctively notice
              the intuitive navigation, fast loading speed, visual content that
              perfectly reflects the brand identity and omnichannel experience.
              All of which result in increased conversion rates, profit margins,
              and customer loyalty. With our Magento development services, you
              too can expect the experience of Paul Smith within your store.
              Like them, you can also outgrow, outshine, and outperform your
              competitors with assistance from a Magento partner like Biztech!
              We offer holistic Magento development and strategic planning
              services. From consultation to designing and developing a custom
              Magento website to delivery and marketing optimization and support
              and maintenance, you can rely on us for everything! Brands
              consider us a go-to Magento development company because we deliver
              services that enhance customer experience, capture more revenue,
              increase loyalty and provide long-term benefits. Partner with us
              and experience your revenue and business growth by yourself!
            </p>
          </div>
        </div>
      </section>

      <section className="contact-us-s">
        <div className="container-fluid">
          <div className="row py-5">
            <div className="col-lg-6 py-5 contact-cc1">
              <h3 className="c-head py-5">
                Develop a Conversion Focused Magento Store
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

      <section className="serveices py-5">
        <div className="container py-5">
          <div className="col-lg-6">
            <h3 className="ser-head">
              Defy Ecommerce Norms With Our Magento Custom Development Services
            </h3>
            <p className="ser-para">
              We offer all-inclusive Shopify services that help add more
              functionality, monitor performance, improve sales channels &
              inventory management, and many more.
            </p>
          </div>
          <div className="row services-column">
            <div className="col-md-2 ser-card p-3 ">
              <h4 className="card-heade">Custom Magento Web Development</h4>
              <p>
                Set up and configure your Shopify store per your business
                objectives and goals. Being amongst the leading Shopify
                development companies, we help you launch your online store in
                record time.
              </p>
            </div>

            <div className="col-md-2 ser-card p-3">
              <h4 className="card-heade">Magento Theme Development</h4>
              <p>
                Bring uniqueness to your store and enhance its look and feel
                with our custom Shopify web development services. Our experts
                will customize your store per your brand’s custom needs and
                objectives.
              </p>
            </div>

            <div className="col-md-2 ser-card p-3">
              <h4 className="card-heade">Magento Extension Development</h4>
              <p>
                We are a Shopify web development company aiming to develop
                eCommerce stores with functionality tailored to your industry
                vertical. We help your business scale and thrive with our
                easy-to-manage and secure solutions.
              </p>
            </div>
            <div className="row services-column">
              <div className="col-md-2 ser-card p-3">
                <h4 className="card-heade">
                  Magento Integration And Migration
                </h4>
                <p>
                  Our Shopify eCommerce development services help businesses
                  move their operations from platforms like BigCommerce,
                  Magento, WooCommerce, Volusion, and many more to Shopify.
                </p>
              </div>

              <div className="col-md-2 ser-card p-3">
                <h4 className="card-heade">Magento PWA Development</h4>
                <p>
                  Seamlessly connect your Shopify store with CRM, ERP, PIM, and
                  email marketing systems to improve the shopping experience,
                  automate business processes, and upgrade the workflow
                </p>
              </div>

              <div className="col-md-2 ser-card p-3">
                <h4 className="card-heade">Support And Maintenance</h4>
                <p>
                  Create custom and scalable mobile storefronts for your
                  customers that offer an intuitive and interactive browsing
                  experience while exploring your eCommerce store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="leading py-5">
        <div className="container-fluid">
          <h2 className="leading-head">
            Benefits of Custom Magento Development
          </h2>
          <p className="leading-para">
            We offer all-inclusive Shopify services that help add more
            functionality, monitor performance, improve sales channels &
            inventory management, and many more.
          </p>
          <div className="row leading-card-row py-4">
            <div className="col-md-2 leadin-card p-5 ">
              <h5 className="leading-card-head">Feature-Rich Stores</h5>
              <p className="leading-card-para">
                Be it a small Magento storefront or an enterprise level e-store,
                our Magento services include building feature-rich, customized
                B2B and B2C eCommerce stores that suits your business needs.
              </p>
            </div>
            <div className="col-md-2 leadin-card p-5  ">
              <h5 className="leading-card-head">Scalability And Flexibility</h5>
              <p className="leading-card-para">
                Put appealing visual designs and engage target audience with our
                appealing frontend themes. Our Magento theme development elicit
                your design expectations to develop custom themes in PSDs, PI,
                PNG, and Sketch.
              </p>
            </div>

            <div className="col-md-2 leadin-card p-5 ">
              <h5 className="leading-card-head">Increased Security</h5>
              <p className="leading-card-para">
                Expand business, automate workflows and drive customer
                experience by leveraging our custom Magento extension
                development. We help you develop custom extensions and modules
                that will enhance your Magento store performance.
              </p>
            </div>
            <div className="col-md-2 leadin-card p-5 ">
              <h5 className="leading-card-head">
                Custom Support And Maintenance
              </h5>
              <p className="leading-card-para">
                Develop native-like apps and mobile responsive websites with our
                Magento PWA development services. You can leverage our Magento
                PWA development to help your business support mobile
                interactions and reach customers where they are.
              </p>
            </div>
          </div>

          <div className="ser-btn py-3">
            <button className="btn Hire-btn services-btn text-center ">
              Request A Free Consultation
            </button>
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
              Why Develop Shopify Store With Biztech
            </h1>
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

export default MagentoDeployment;
