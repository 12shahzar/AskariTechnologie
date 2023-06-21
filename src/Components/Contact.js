import React from "react";
import "../Styles/cont.css";
import contactImg from "../Assets/Image.png";
import Meeting from "../Assets/meetingcont.png";
import Circle1 from "../Assets/circle1.png";
import Circle2 from "../Assets/circle2.png";

const Contact = () => {
  const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
  let priceGap = 1000;
  
  priceInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);
          
          if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
              if(e.target.className === "input-min"){
                  rangeInput[0].value = minPrice;
                  range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
              }else{
                  rangeInput[1].value = maxPrice;
                  range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
              }
          }
      });
  });
  
  rangeInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);
  
          if((maxVal - minVal) < priceGap){
              if(e.target.className === "range-min"){
                  rangeInput[0].value = maxVal - priceGap
              }else{
                  rangeInput[1].value = minVal + priceGap;
              }
          }else{
              priceInput[0].value = minVal;
              priceInput[1].value = maxVal;
              range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
              range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
          }
      });
  });
  return (
    <>
      <div className="ourpatners_baner1">
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
      </div>
      <section>
        <div className="container">
          <h3 className="Howdoes">How does our process work?</h3>
          <form action="https://formspree.io/sales@askaritechnologie.com" method="post">
             <div className="container contline" >
            <div className="circleside" >
              <img src={Circle1} className="circleimg" />{" "}
              <h4 className="letsstart">Let’s start by understanding you</h4>
            </div>
          
            <div className="row centerCont">
              <div className="col">
                <h5 className="Howdoes">Understanding You</h5>
                <p>Our friendly team would love to hear from you.</p>
                <div className="row">
                  <div className="col">
                    <div class="mb-3 labelcustom">
                      <label for="formGroupExampleInput" class=" ">
                        First Name*
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="First Name*"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div class="mb-3 labelcustom">
                      <label for="formGroupExampleInput2" class="">
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Last Name"
                      />
                    </div>
                    
                  </div>
                  <div class="mb-3 labelcustom">
  <label for="exampleFormControlInput1" class=" " >Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
                  <div className="row">
                  <div class="mb-3 labelcustom">
  <label for="exampleFormControlInput1" class="">Phone number</label>
</div>
                    <div className="col-5" style={{ display: "flex" }}>
                      
                      <select class="form-select" id="autoSizingSelect">
                        <option selected disabled></option>
                        <option value="1">USA</option>
                        <option value="2">Aus</option>
                        <option value="3">PAK</option>
                        <option value="4">UAE</option>
                      </select>
                      <div
                        className="col-7 num"
                        style={{ display: "flex" }}
                      >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="City"
                          aria-label="City"
                        />
                      </div>
                    </div>

                    <div class="mb-3 " style={{fontSize:'16px'}}>
                      <label for="formGroupExampleInput2" class="">
                      Company Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Company Name"
                      />
                    </div>
                    <div class="mb-3 labelcustom">
                      <label for="formGroupExampleInput2" class="">
                      Website URL
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Website URL"
                      />
                    </div>
                 
                  </div>
                </div>
              </div>
              <div className="col hidecolimg">
                <img src={contactImg} alt="" className="img-fluid py-5" />
              </div>
            </div>
            <div className="circleside ">
              <img src={Circle2} className="circleimg" />{" "}
              <h4 className="letsstart">What’s your requirement?</h4>
            </div>
            <div className="row centerCont">
              <div className="col">
                <h5 className="Howdoes">Requirements</h5>
                <p>Our friendly team would love to hear from you.</p>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="labelcustom">
                  Describe Your Project in brief*                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="wrapper">
  <div className="price-input">
    <div className="field">
      <input type="number" className="input-min" defaultValue={1000} />
    </div>
    <div className="separator">-</div>
    <div className="field">
      <input type="number" className="input-max" defaultValue={2500} />
    </div>
  </div>
  <div className="slider">
    <div className="progress" />
  </div>
  <div className="range-input">
    <input
      type="range"
      className="range-min"
      min={0}
      max={10000}
      defaultValue={2500}
      step={100}
    />
    <input
      type="range"
      className="range-max"
      min={0}
      max={10000}
      defaultValue={7500}
      step={100}
    />
  </div>
</div>

                <div class="">
                  <input
                    class=""
                    type="checkbox"
                    value=""
                    id=""
                    
                  />
                  <label class="" for="" style={{paddingBottom:'60px'}}>
                    You agree to our friendly privacy policy.
                  </label>
                </div>
                <button type="submit" class="btn btmcontact" >
                  Send message
                </button>
              </div>
              <div className="col hidecolimg">
                <img src={Meeting} alt="" className="img-fluid py-5" />
              </div>
            </div>
          </div>
</form>
         
        </div>
      </section>

      {/* <section className="contact-2-main">
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
      </section> */}
      {/* <div className="row flags">
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
        </div> */}
    </>
  );
};

export default Contact;
