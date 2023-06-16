import React from "react";
import "../Styles/Home.css";

// Image Import
import MainIMG from "../Assets/wordpressB2.png";
import Main2Img from "../Assets/wordpressB1.png";

const Wordpress = () => {
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
      <div>
        <section className="main-section-1">
          <div className="container py-5">
            <ul>
              <li className="Main-ul">
                <a href="/">Home /</a>
                <a href="/">Development /</a>
                <a href="/">CRM & ERP /</a>
              </li>
            </ul>
            <div className="row">
              <div className="col-lg-6">
                <h1 className="Brand-Name p-3">Hire WordPress Developers</h1>
                <p className="Brand-slogen p-3">
                  Developing powerful websites using WordPress CMS is made easy
                  when you hire WordPress developers with proven experience.
                  They will understand your business requirements and suggest
                  technically-viable features to captivate your audience. Hire
                  dedicated WordPress developers from BiztechCS and create a
                  customized content management system of your choice
                </p>
                <button className="Hire-btn">Hire WordPress Developer</button>
              </div>
              <div className="col-lg-6 m-auto">
                <img src={MainIMG} alt="" className="logo-IMG img-fluid ml-5" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="main-2 justify-content-center align-content-center ">
        <div className="row">
          <div className="col-lg-5 justify-content-center">
            <img src={Main2Img} alt="" className=" img-fluid" />
          </div>
          <div className="col-lg-6 m-auto ">
            <h3 className="about-head p-3">
              Build Sustainable Websites With Best-in-Class WordPress Developers
            </h3>
            <p className="about-para p-3 ">
              Managing a website is made easy, as you can get the most talented
              WordPress developers for hire at Biztech. Our developers stay
              up-to-date about the latest technologies, trends, and updates that
              help your website and business. Our hassle-free development
              process helps organizations build web solutions that align with
              the latest trends and are future-ready. We focus on developing
              software solutions that help generate more ROI and help gain loyal
              customers. Whether it is a custom WordPress plugin, theme
              development, WooCommerce development, or API integration, we
              deliver reliable web solutions. Hire WordPress web developers at
              your convenience for quality software solution. Now, hire
              WordPress web developers at your convenience and free yourself
              from the hassles of efficient project management and quality
              control.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <div className="container-fluid">
          <div className="row  ">
            <div className="col-lg-6 conact-c1">
              <h3 className="contact-head mt-5">
                WordPress Development Services We Offer
              </h3>
              <p className="contact-para">
                Schedule an Interview to Find the Best WordPress Developers for
                Hire
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
          <h3 className="services-head ">
            Benefits of Hiring Our Seasoned WordPress Developers
          </h3>
          {/* <p className="services-para p-3">
                            From Salesforce integration consulting to Salesforce service cloud
                            integration through third-party tools like Quickbooks, VoIP, etc.,
                            we are capable of offering you a tailored service.
                          </p> */}
          <div className="row services-row ">
            <ServcicesCard
              Heading={"Quick Turnaround Time"}
              Para={
                "When you hire a professional WordPress developer from BiztechCS, you can be assured of timely delivery. Our developers follow the Agile development approach and try to meet each breakthrough on time for timely delivery."
              }
            />
            <ServcicesCard
              Heading={"Affordable Development Costs"}
              Para={
                "You can save more on development with remote developers rather than when you hire a WordPress developer full-time. You get to choose your preferred engagement model and manage your expenses as you need."
              }
            />
            <ServcicesCard
              Heading={"SEO-Compliant WordPress Solutions"}
              Para={
                "We have dedicated WordPress programmers for hire who can develop SEO-friendly websites conveniently. Our executives use plugins like Yoast SEO and Hubspot to ensure your site is ready for advanced SEO practices."
              }
            />
          </div>

          <div className="row services-row ">
            <ServcicesCard
              Heading={"Versatile Experience"}
              Para={
                "Having worked on over 1200 projects, our WordPress experts have versatile experience in multiple industries. Leverage their diverse experience to build impressive WordPress solutions that sets you apart from your competitors."
              }
            />
            <ServcicesCard
              Heading={"Complete Control Of Your Site"}
              Para={
                "When you hire WordPress programmers from our team, you get to have complete control of your site. Whether you are worried about code ownership or flexibility with project management, our team will respect your terms and conditions."
              }
            />
            <ServcicesCard
              Heading={"Fully-Customizable"}
              Para={
                "You don’t have to suppress your custom requirements anymore. Hire professional WordPress developers from BiztechCS and ensure to build fully customized websites that can appease your target audience."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Wordpress;
