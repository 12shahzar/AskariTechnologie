import React from "react";
import "../Styles/About.css";
import "bootstrap/dist/css/bootstrap.css";
import DottedBackground from "../Assets/images/dotted-background.png";
import about1 from "../Assets/images/about/about-1.png";
import about2 from "../Assets/images/about/about-2.png";
import about3 from "../Assets/images/about/about-3.png";
import about4 from "../Assets/images/about/about-4.png";
import about5 from "../Assets/images/about/about-5.png";
import about6 from "../Assets/images/about/about-6.png";
import about7 from "../Assets/images/about/about-7.png";
import about8 from "../Assets/images/about/about-8.png";
import about9 from "../Assets/images/about/about-9.png";
import about10 from "../Assets/sol/avatar.png";
import about11 from "../Assets/Avatar (1).png";
import about12 from "../Assets/fourth.png";
import about13 from "../Assets/Avatar (2).png";

function About() {
  return (
    <>
      <div className="ourpatners_baner">
        <h2 className="Venture_heading">About</h2>
       
      </div>

      <div className="section_1">
        <div className="container">
          <div style={{ height: "50px" }}></div>
          <div className="row p-5">
            <div className="col-md-6">
              <img
                src={about1}
                width={512}
                height={468}
                alt="about-us"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h1 className="text-primary" style={{fontWeight:"bolder"}}>
              Reinventing Success with High Class Digital Solutions
              </h1>
              <p className="mt-5">
              What began as a modest endeavor by a single individual has evolved into a robust team of 50+
skilled professionals. As a prominent web and mobile app development company, Askari
Technologies empowers businesses with its cutting-edge digital solutions. We are a dynamic
team of passionate individuals who consistently innovate, driving Askari Technologies to the
forefront of the IT services and solutions industry. Our unwavering commitment to leveraging our
technical expertise to tackle challenges is what fuels our passion.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5 mb-5">
        <h1 className="text-primary" style={{fontWeight:"bolder"}}>Our Story</h1>
        <p className="mt-5 mb-5">
        After working as a software developer for a couple of years, our founder Asad Askari had
different plans. With a vision to change the world with IT Solutions, Askari Technologies was
born. What makes us unique is our purpose to put innovation, creativity and customer
satisfaction together. With a pool of content clients <br/>We continue to be the instrumental hand for
businesses and individuals looking to develop and make use of modern day digital technology
        </p>

        <div className="container">
          <div className={`row d-flex justify-content-center }`}>
            <div className={`col-md-10 }`}>
              <div className="our_story_card p-5 ">
                <div className="card-body">
                  <h3 className="text-white">What sets us apart from others</h3>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <img src={about2} alt="about" className="img-fluid" />
                      <p className="mt-2 text-white">
                        Best in-class IT <br /> Services & Solutions
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img src={about3} alt="about" className="img-fluid" />
                      <p className="mt-2 text-white">
                        Innovation and <br /> Learning Everydays
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img src={about4} alt="about" className="img-fluid" />
                      <p className="mt-2 text-white">
                        Customers First <br /> Approach!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "100px" }} className="container">
        <div className="row">
          <div className="col-md-6">
            <span
              style={{ fontWeight: 600, fontSize: "16px" }}
              className="text-primary fw-bold"
            >
              Launch faster
            </span>
            <h1 style={{ fontWeight: 700 }} className="text-primary">
              Build something great
            </h1>
            <p className="text-muted mt-3">
              We’ve done all the heavy lifting so you don’t have to — get all
              the data you need to launch and grow your business faster.
            </p>
            <div className="row mt-5 ">
              <div className="col-6 text-center">
                <span
                  className="text-primary"
                  style={{ fontWeight: 600, fontSize: "60px" }}
                >
                  4,000+
                </span>
                <p style={{ fontWeight: 500, fontSize: 18 }}>
                  Global customers
                </p>
                <p className="text-muted">
                  We’ve helped over 4,000 amazing global companies.
                </p>
              </div>
              <div className="col-6 text-center">
                <span
                  className="text-primary"
                  style={{ fontWeight: 600, fontSize: "60px" }}
                >
                  600%
                </span>
                <p style={{ fontWeight: 500, fontSize: 18 }}>
                  Return on investment
                </p>
                <p className="text-muted">
                  Our customers have reported an average of ~600% ROI.
                </p>
              </div>

              <div className="col-6 text-center">
                <span
                  className="text-primary"
                  style={{ fontWeight: 600, fontSize: "60px" }}
                >
                  10k
                </span>
                <p style={{ fontWeight: 500, fontSize: 18 }}>
                  Global downloads
                </p>
                <p className="text-muted">
                  Our app has been downloaded over 10k times.
                </p>
              </div>

              <div className="col-6 text-center">
                <span
                  className="text-primary"
                  style={{ fontWeight: 600, fontSize: "60px" }}
                >
                  200+
                </span>
                <p style={{ fontWeight: 500, fontSize: 18 }}>5-star reviews</p>
                <p className="text-muted">
                  Our app has been downloaded over 10k times.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img
              height={695}
              width={591}
              src={about5}
              style={{ height: "80%" }}
              alt="about-5"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="our_team">
          <div style={{ height: "50px" }}></div>
          <span
            className="text-muted"
            style={{ fontWeight: 600, fontSize: 16 }}
          >
            We're hiring!
          </span>
          <h1 className="text-primary fw-bold mt-3">Meet our team.</h1>
          <p className="text-muted" style={{ fontWeight: 600 }}>
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a <br /> culture that empowers you to do you best work.
          </p>

          <div className="container">
            <div className="row mt-5">
              <div className="col-md-3 col-6">
                <img src={about6} alt="about" className="img-fluid" />
                <br />
                <span style={{ fontWeight: 500, fontSize: 18 }}>
                  Olivia Rhye
                </span>
                <br />
                <span
                  style={{ fontWeight: 400, fontSize: 18, color: "#6941C6" }}
                >
                  Founder & CEO
                </span>
              </div>
              <div className="col-md-3 col-6">
                <img src={about7} alt="about" className="img-fluid" />
                <br />
                <span style={{ fontWeight: 500, fontSize: 18 }}>
                  Phoenix Baker
                </span>
                <br />
                <span
                  style={{ fontWeight: 400, fontSize: 18, color: "#6941C6" }}
                >
                  Engineering Manager
                </span>
              </div>
              <div className="col-md-3 col-6">
                <img src={about8} alt="about" className="img-fluid" />
                <br />
                <span style={{ fontWeight: 500, fontSize: 18 }}>
                  Lana Steiner
                </span>
                <br />
                <span
                  style={{ fontWeight: 400, fontSize: 18, color: "#6941C6" }}
                >
                  Product Manager
                </span>
              </div>
              <div className="col-md-3 col-6">
                <img src={about9} alt="about" className="img-fluid" />
                <br />
                <span style={{ fontWeight: 500, fontSize: 18 }}>
                  Demi Wilkinson
                </span>
                <br />
                <span
                  style={{ fontWeight: 400, fontSize: 18, color: "#6941C6" }}
                >
                  Frontend Developer
                </span>
              </div>

              <div style={{ height: "50px" }}></div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3 col-6">
                <img src={about10} alt="about" className="img-fluid" />
                <br />
                <span style={{ fontWeight: 500, fontSize: 18 }}>
                  Candice Wu
                </span>
                <br />
                <span
                  style={{ fontWeight: 400, fontSize: 18, color: "#6941C6" }}
                >
                  Backend Developer
                </span>
              </div>
              <div className="col-md-3 col-6">
                <img src={about11} alt="about" className="img-fluid" />
                <br />
                <span style={{ fontWeight: 500, fontSize: 18 }}>
                  Natali Craig
                </span>
                <br />
                <span
                  style={{ fontWeight: 400, fontSize: 18, color: "#6941C6" }}
                >
                  Product Designer
                </span>
              </div>
              <div className="col-md-3 col-6">
                <img src={about12} alt="about" className="img-fluid" />
                <br />
                <span style={{ fontWeight: 500, fontSize: 18 }}>Drew Cano</span>
                <br />
                <span
                  style={{ fontWeight: 400, fontSize: 18, color: "#6941C6" }}
                >
                  UX Researcher
                </span>
              </div>
              <div className="col-md-3 col-6">
                <img src={about13} alt="about" className="img-fluid" />
                <br />
                <span style={{ fontWeight: 500, fontSize: 18 }}>
                  Orlando Diggs
                </span>
                <br />
                <span
                  style={{ fontWeight: 400, fontSize: 18, color: "#6941C6" }}
                >
                  Customer Success
                </span>
              </div>

              <div style={{ height: "50px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
