import React from "react";
import "../Styles//Inductry.css";
import Footer from "./Footer";
import Hire from "./Hire";
import Hirebutton from "./Hirebutton";
import Australia from "../Assets/aus.png"
import Pakistan from "../Assets/pak.png"
import America from "../Assets/ame.png"
import UAE from "../Assets/uae.png"
import Fashions from "../Assets/pic1.png"
import Retail from "../Assets/pic3.png" 
import AutoParts from "../Assets/autoparts.png"
import Fitness from "../Assets/apple.png"
import Furniture from "../Assets/pic5.png"
import Monitor from "../Assets/pic4.png"
import Beauty from "../Assets/beauty.png"
import Pharmaceutical from "../Assets/pharma.png"
import Rental from "../Assets/car.png"
import Banner from "../Assets/banner.png"


const Industry = (props) => {
  return (
    <>
      <div className="container">
        <h2 className="heading">Industries We Serve</h2>
        <h6 className="subHead">
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </h6>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12 column">
              <img src={Fashions} />
              <h5 className="name">Fashions & Clothing</h5>
            </div>
            <div class="col-md-4  col-sm-12  column">
              <img src={Retail} />
              <h5 className="name">Retail</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={AutoParts} />
              <h5 className="name">Auto Parts</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4  col-sm-12 column">
              <img src={Pharmaceutical} />
              <h5 className="name">Pharmaceutical</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={Fitness} />
              <h5 className="name">Fitness & Nutrition</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={Furniture} />
              <h5 className="name">Furniture</h5>
            </div>
          </div>
          <div className="row">
            <div class="col-md-4   col-sm-12 column">
              <img src={Monitor} />
              <h5 className="name">Pharmaceutical</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={Beauty} />
              <h5 className="name">Beauty And Personal Care</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={Rental} />
              <h5 className="name">Rental</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={Banner} className="bannerimg" />
          </div>
          <div className="col-md-6 box2">
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

export default Industry;
