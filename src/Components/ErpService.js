import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Erpservice.css";
import leftmain from "../Assets/leftmain.png";
import bg from "../Assets/bg.png";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.jpg";
import img5 from "../Assets/5.jpg";
import pic1 from "../Assets/pic1.png";
import pic2 from "../Assets/pic2.png";
import pic3 from "../Assets/pic3.png";
import pic4 from "../Assets/pic4.png";
import pic5 from "../Assets/pic5.png";
import autoparts from "../Assets/autoparts.png";
import pharma from "../Assets/pharma.png";
import apple from "../Assets/apple.png";
import beauty from "../Assets/beauty.png";
import car from "../Assets/car.png";
import coding from "../Assets/coding.png";
import check from "../Assets/check.png";
import bg2 from "../Assets/bg2.png";
import office from "../Assets/office.png";

const ErpService = () => {
  return (
    <div className="bodycontent">
      <div className="bannner-image">
        <p className="text-center text-white ">Home/Capabiliotes/ERP</p>

        <div className="text-content text-white">
          <h5>End to End</h5>
          <h2>
            Custom ERP Services <br /> at Your Disposal
          </h2>
          <p>
            Escalate your business returns by streamlining your <br />{" "}
            operations and get complete visibility of your business needs <br />{" "}
            and situation with the best ERP services. Handle youre!
          </p>
          <button className="btn btn-light">Consult Erp Expert</button>
        </div>
      </div>
      <div className="row mainsection">
        <div className="col">
          <div class="image-container">
            <img src={bg} className="bg-image" alt="JPEG Image" />
            <img src={leftmain} alt="PNG Image" class="overlay-image" />
          </div>
        </div>
        <div className="col servicespara">
          <h3 className="text ">
            Delivering ERP Development <br /> Services to Maximize Capability
          </h3>
          <p>
            Do you want to make the most of data and analytics to build a robust
            digital solution for your business? Then, our ERP software
            development services might come to your aid. Transform your legacy
            system by adopting an ERP software solution that can cater to your
            unique business requirements.
          </p>
          <p>
            {" "}
            Now, streamline your various business processes right from sales and
            marketing to human resources and inventory management with custom
            ERP development. Consult our ERP experts to discuss how you can
            ideate, plan, and transform your business ideas for maximum profit.
          </p>

          <p>
            With our in-depth industry knowledge and technical expertise, we are
            capable of developing custom ERP solutions or integrating ERP
            seamlessly. Having worked on 1200+ projects from various industries,
            we have a knack to assess your business condition and optimize it
            for good.{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="erpsoftware">
          <h3 className="">Our ERP Software Development Services</h3>
          <p className="">
            We offer custom ERP solutions to businesses of all sizes and sectors
            so you can optimize your applications flawlessly. <br /> Attain
            smooth communication and maximum productivity with best-in-class ERP
            systems development solutions.
          </p>
        </div>
      </div>
      <div class="image-row">
        <div class="image-item">
          <img src={img1} alt="Image 1" />
          <div class="caption">
            <h4>Custom ERP Development </h4> <hr />
            <p>
              Build a tailored ERP business system for your scalable business
              needs by choosing a leading ERP development company like Askari
              Technology.
            </p>
          </div>
        </div>
        <div class="image-item">
          <img src={img2} alt="Image 2" />
          <div class="caption">ERP Development Consulting Services</div>
        </div>
        <div class="image-item">
          <img src={img3} alt="Image 3" />
          <div class="caption">ERP Application Development</div>
        </div>
        <div class="image-item">
          <img src={img4} alt="Image 4" />
          <div class="caption">ERP Support & Maintenance Services</div>
        </div>
        <div class="image-item">
          <img src={img5} alt="Image 5" />
          <div class="caption">ERP Managed Services</div>
        </div>
      </div>
      <section className="contact-us">
        <div className="container-fluid">
          <div className="row  ">
            <div className="col-lg-6 conact-c1">
              <h4 className="contact-head mt-5">
                Get Started <br /> With ERP Software <br /> Services Today
              </h4>
              <p className="contact-para">
                Tired of legacy systems slowing down your <br /> business
                productivity? Time to transform your <br /> digital journey with
                our Enterprise Resource <br /> Planning services.
              </p>
            </div>
            <div className="col-lg-6 conact-c2">
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
                    placeholder="Enter Your Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInpuEmail" class="form-label">
                    Phone Number
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail"
                    placeholder="Enter Your Phone Number"
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
                    placeholder="Give Us a brief about your requirements"
                  ></textarea>
                </div>
                <button type="submit" class="btn-started">
                  Get Started
                </button>
                <p className=" mt-4">
                  {" "}
                  <span className="guaranteed"> 100% Guaranteed </span> Security
                  of the Information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <h2 className="heading">Industries We Serve</h2>
        <h6 className="subHead">
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </h6>
        <div class="container container-fluid">
          <div class="row">
            <div class="col-md-4 col-sm-12 column">
              <img src={pic1} />
              <h5 className="name">Fashions & Clothing</h5>
            </div>
            <div class="col-md-4  col-sm-12  column">
              <img src={pic3} />
              <h5 className="name">Retail</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={autoparts} />
              <h5 className="name">Auto Parts</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4  col-sm-12 column">
              <img src={pharma} />
              <h5 className="name">Pharmaceutical</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={apple} />
              <h5 className="name">Fitness & Nutrition</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={pic5} />
              <h5 className="name">Furniture</h5>
            </div>
          </div>
          <div className="row">
            <div class="col-md-4   col-sm-12 column">
              <img src={pic4} />
              <h5 className="name">Pharmaceutical</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={beauty} />
              <h5 className="name">Beauty And Personal Care</h5>
            </div>
            <div class="col-md-4  col-sm-12 column">
              <img src={car} />
              <h5 className="name">Rental</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container enterprise">
        <h3 className="text-center">
          Approaches to Enterprise Resource Planning Services
        </h3>
        <p className="text-center para1">
          Seamless collaboration, total transparency, and uninterrupted
          management. That’s our approach when integrating ERP into your
          software. <br /> As a leading ERP development company with years of
          experience, we suggest the best planning approach for your business
          growth.
        </p>
        <div
          className="conatiner processSteps



       d-flex mt-5"
        >
          <div className="steps">
            <h3 className="text-center">Agile</h3>
            <p className="text-left">
              Seamless collaboration, total transparency, and uninterrupted
              management. That’s our approach when integrating ERP into your
              software. As a leading ERP development company with years of
              experience, we suggest the best planning{" "}
            </p>
          </div>
          <div className="steps">
            <h3 className="text-center">Waterfall</h3>
            <p className="text-left">
              We follow a linear approach for projects that don’t require
              changes or modifications during and after the development. In this
              approach, we work on one phase, and unless it is delivered, we
              won’t proceed with the next one.
            </p>
          </div>
          <div className="steps">
            <h3 className="text-center">Time and Material</h3>
            <p className="text-left">
              We welcome a time & material approach when the scope and time of
              the project are undetermined. Instead of quoting a fixed price, we
              will describe a rough scope and quote for hourly rates and the
              cost of materials.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="row ">
          <div class="col-md-12">
            <div class="responsive-section">
              <img src={coding} alt="Coding Image" class="background-image" />
              <div class="overlay"></div>
              <div class="content">
                <h2 class="codheading">
                  Benefits Of Choosing Askari Technology For ERP Service
                </h2>
                <p class="paragraph">
                  Skyrocket your business potential by reaching out to a leading
                  ERP development company like Biztech. Our team will help
                  customize ERP software and automate various business
                  processes, accessible using a central interface.
                </p>
                <div class="row checkicons">
                  <div class="col-lg-4 col-md-6">
                    <div class="feature">
                      <img src={check} alt="Check Icon" class="check-icon" />
                      <p class="feature-text">Rich Industry Experience</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="feature">
                      <img src={check} alt="Check Icon" class="check-icon" />
                      <p class="feature-text">Flexible Hiring Models</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="feature">
                      <img src={check} alt="Check Icon" class="check-icon" />
                      <p class="feature-text">Flexible Timezone</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="feature">
                      <img src={check} alt="Check Icon" class="check-icon" />
                      <p class="feature-text">Improved ROI</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="feature">
                      <img src={check} alt="Check Icon" class="check-icon" />
                      <p class="feature-text">Support And Maintenance</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="feature">
                      <img src={check} alt="Check Icon" class="check-icon" />
                      <p class="feature-text">Privacy & Confidentiality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="left">
          <img src={office} alt="Image" />
        </div>
        <div class="right">
          <h2>
            What You Get With Competent ERP <br /> Development Company
          </h2>
          <p>
            We guarantee diverse functionalities that deliver smooth customer
            experience and polished brand visibility. Here are the benefits of
            partnering with us!
          </p>

          <ul>
            <li>Proficient and Certified ERP Developers</li>
            <li>On-demand Scalability</li>
            <li>Flexible Engagement Models</li>
            <li>Competitive Development Cost</li>
            <li>On-time Delivery</li>
            <li>Agile Methodology</li>
            <li>Code Authorization</li>
            <li>Collaborative and Communicative Approach</li>
            <li>100% Customer Satisfaction</li>
            <li>24*7 Support and Maintenance</li>
          </ul>
        </div>
      </div>
      <section class="custom-hero-section">
        <div class="custom-hero-content">
          <h3>Transform Your Business With Robust ERP Development Services</h3>
          <p>
            With our ERP proficiency and technological know-how, we dig out the
            key needs and propose a long-lasting solution for your enterprise.
            Leverage our experience by joining forces with us!
          </p>
          <button class="custom-button btn btn-light">
            Schedule A Call With ERP Experts <span>&#8594;</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ErpService;
