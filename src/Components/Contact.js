import React from "react";
import "../Styles/cont.css";
import contactImg from "../Assets/Image.png";
const Contact = () => {
  return (
    <>
      <section className="contact-firt-div">
        <div className="container conact-2">
          <ul>
            <li className="Main-ul py-3">
              <a href="/">Home /</a>
              <a href="/">Development /</a>
              <a href="/">CRM & ERP /</a>
            </li>
          </ul>
          <div className="col-lg-6">
            <h2 className="contact-head-2">Contact Us</h2>
            <p className="contact-para-2">
              Let's create something awosome together.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-2-main">
        <div className="container">
          <div className="row p-5">
            <div className="new-contact py-3">
              <h3 className="contact-head-4">How does our Process work?</h3>
            </div>
            <div className="conatac-2-head">
              <h3 className="head-head">Let’s start by understanding you</h3>
            </div>
            <div className="col-lg-6 maiin-contact-div py-5">
              <h5 className="head-contact-5 p-3">Understanding You</h5>
              <p className="contact-the5 ">
                Our friendly team would love to hear from you.
              </p>
              <form className="p-3">
                <div class="form-group ">
                  <label for="firstName">First Name* </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                  />
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name* </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email* </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div class="form-group">
                  <label for="phoneNumber">Phone Number* </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div class="form-group">
                  <label for="companyName">Company Name* </label>
                  <input
                    type="text"
                    class="form-control"
                    id="companyName"
                    placeholder="Enter your company name"
                  />
                </div>
                <div class="form-group">
                  <label for="websiteUrl">Website URL* </label>
                  <input
                    type="text"
                    class="form-control"
                    id="websiteUrl"
                    placeholder="Enter your website URL"
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: "#0659A4", color: "white" }}
                  class="btn mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="div-contact-img">
                <img src={contactImg} alt="" className="img-fluid py-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-2-main">
        <div className="container">
          <div className="row p-5">
            <div className="new-contact py-3">
              <h3 className="contact-head-4">How does our Process work?</h3>
            </div>
            <div className="conatac-2-head">
              <h3 className="head-head">Let’s start by understanding you</h3>
            </div>
            <div className="col-lg-6 maiin-contact-div py-5">
              <h5 className="head-contact-5 p-3">Understanding You</h5>
              <p className="contact-the5 ">
                Our friendly team would love to hear from you.
              </p>
              <form className="p-3">
                <div class="form-group ">
                  <label for="firstName">First Name* </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                  />
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name* </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email* </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div class="form-group">
                  <label for="phoneNumber">Phone Number* </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div class="form-group">
                  <label for="companyName">Company Name* </label>
                  <input
                    type="text"
                    class="form-control"
                    id="companyName"
                    placeholder="Enter your company name"
                  />
                </div>
                <div class="form-group">
                  <label for="websiteUrl">Website URL* </label>
                  <input
                    type="text"
                    class="form-control"
                    id="websiteUrl"
                    placeholder="Enter your website URL"
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: "#0659A4", color: "white" }}
                  class="btn mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="div-contact-img">
                <img src={contactImg} alt="" className="img-fluid py-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
