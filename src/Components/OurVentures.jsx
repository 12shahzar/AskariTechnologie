import React from "react";
import "../Styles/Ourventure.css";

function OurVentures() {
  return (
    <>
      <div className="ourventure_baner">

        <h2 className="Venture_heading">How it Works</h2>
        
      </div>
      <section className=" Secound_venture">
          <div className="img_text_venture">
               <div className="line_color">

               </div>

            <h2 className="heading_sub_venture">
              How We Curate <br></br>Digital Experiences?
            </h2>
            <p className="txt_venture_sub">
              Your business is not just another project for us. We walk the
              journey with you to make sure you have the best solutions that
              yield exceptional outcomes.
            </p>
          </div>
          <div className="img_venture">
          <img
              src={require("../Assets/_.png")}
              className="questionsizsing"
            />
              <img
              src={require("../Assets/land-rev-1-img-2 1.png")}
              className="sizing"
            />
          </div>
        </section>
        <section className="third_venture">
          <div className="img_text_venture">
            <h5 className="heading_sub_venture">
              Analysis > Research Right > Consultation
            </h5>
            <p className="txt_venture_sub">
              To maintain a smooth flow throughout, we rely on streamlined
              processes. The first step includes analyzing your project
              requirements, end-goals, and business expectations to help you
              build the solution that aligns with your vision.
            </p>
            <div class="accordion w-100 fixe_bg" id="basicAccordion">
  <div class="accordion-item boxes_question">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed blue_color" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne">
        Strategy Consultation
      </button>
    </h2>
    <div id="basicAccordionCollapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
      data-mdb-parent="#basicAccordion" >
      <div class="accordion-body">
      <p className="small_size">
      Clubbed with brainstorming, we analyze your requirements, business scope, current market trends, technical aspects to form a strategy that works for your business. It is a complete end-to-end consultation for a clear and transparent roadmap.
      </p>
      </div>
    </div>
  </div>
  <div class="accordion-item boxes_question">
    <h2 class="accordion-header " id="headingTwo">
      <button class="accordion-button collapsed blue_color" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Business Planning
      </button>
    </h2>
    <div id="basicAccordionCollapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-mdb-parent="#basicAccordion" >
      <div class="accordion-body">
      <p className="txt_venture_sub">
              To maintain a smooth flow throughout, we rely on streamlined
              processes. The first step includes analyzing your project
              requirements, end-goals, and business expectations to help you
              build the solution that aligns with your vision.
            </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed blue_color" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
        Best Solution Suggestion
      </button>
    </h2>
    <div id="basicAccordionCollapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
      data-mdb-parent="#basicAccordion" >
      <div class="accordion-body">
      <p className="txt_venture_sub">
              To maintain a smooth flow throughout, we rely on streamlined
              processes. The first step includes analyzing your project
              requirements, end-goals, and business expectations to help you
              build the solution that aligns with your vision.
            </p>
      </div>
    </div>
  </div>
              </div>


          </div>
          <div className="img_venture">
            <img
              src={require("../Assets/Illustration.png")}
              className="sizing2"
            />
          </div>
        </section>
        <section className="four_venture">
          <div className="img_venture">
            <img src={require("../Assets/OBJECTS.png")} className=" sizing_mar_2" />
          </div>
          <div className="img_text_venture">
            <h5 className="heading_sub_venture">Our Development Cycle</h5>
            <p className="txt_venture_sub">
              After finalizing everything, comes the development part. With
              scalable development and dedicated teams, we suggest what works
              best for you and your business. The development models we follow:
            </p>
            <div style={{backgroundColor:'gray',height:'1px',width:"200px",marginBottom:"10px"}}></div>
            <ul style={{fontSize:"13px",listStyle:'outside'}}>
              <li>Agile-Scrum</li>
              <li>Rapid Application Development</li>
              <li>Time and Material</li>
              <li>Iterative Waterfall</li>
            </ul>
          </div>
        </section>
        
        <section className="five_venture">
          <div className="img_text_venture">
            <h5 className="heading_sub_venture"> Quality Assurance</h5>
            <p className="txt_venture_sub">
              Our protocol-driven working culture and tech expertise ensure that
              our deliverables are always high quality and right on time.
              Ownership and accountability are qualities that are deep-rooted in
              our system.
            </p>
            <div class="accordion w-100 fixe_bg" id="basicAccordion">
  <div class="accordion-item boxes_question">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed blue_color" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne">
        Strategy Consultation
      </button>
    </h2>
    <div id="basicAccordionCollapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
      data-mdb-parent="#basicAccordion" >
      <div class="accordion-body">
      <p className="small_size">
      Clubbed with brainstorming, we analyze your requirements, business scope, current market trends, technical aspects to form a strategy that works for your business. It is a complete end-to-end consultation for a clear and transparent roadmap.
      </p>
      </div>
    </div>
  </div>
  <div class="accordion-item boxes_question">
    <h2 class="accordion-header " id="headingTwo">
      <button class="accordion-button collapsed blue_color" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Business Planning
      </button>
    </h2>
    <div id="basicAccordionCollapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-mdb-parent="#basicAccordion" >
      <div class="accordion-body">
      <p className="txt_venture_sub">
              To maintain a smooth flow throughout, we rely on streamlined
              processes. The first step includes analyzing your project
              requirements, end-goals, and business expectations to help you
              build the solution that aligns with your vision.
            </p>
      </div>
    </div>
  </div>

              </div>
          </div>
          <div className="img_venture">
            <img src={require("../Assets/image 8.png")} className="sizing2" />
          </div>
        </section>
        <section className="four_venture">
          <div className="img_venture">
            <img src={require("../Assets/image 8.png")} className=" sizing_mar_2" />
          </div>
          <div className="img_text_venture">
            <h5 className="heading_sub_venture"> Quality Delivery - Always</h5>
            <p className="txt_venture_sub">
            We ensure to deliver top-notch projects after assessing them thoroughly in terms of quality, compliance, and protocols. Our working culture has accountability at its core.
            </p>
            <div class="accordion w-100 fixe_bg" id="basicAccordion">
  <div class="accordion-item boxes_question">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed blue_color" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne">
        Strategy Consultation
      </button>
    </h2>
    <div id="basicAccordionCollapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
      data-mdb-parent="#basicAccordion" >
      <div class="accordion-body">
      <p className="small_size">
      Clubbed with brainstorming, we analyze your requirements, business scope, current market trends, technical aspects to form a strategy that works for your business. It is a complete end-to-end consultation for a clear and transparent roadmap.
      </p>
      </div>
    </div>
  </div>
  <div class="accordion-item boxes_question">
    <h2 class="accordion-header " id="headingTwo">
      <button class="accordion-button collapsed blue_color" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Business Planning
      </button>
    </h2>
    <div id="basicAccordionCollapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-mdb-parent="#basicAccordion" >
      <div class="accordion-body">
      <p className="txt_venture_sub">
              To maintain a smooth flow throughout, we rely on streamlined
              processes. The first step includes analyzing your project
              requirements, end-goals, and business expectations to help you
              build the solution that aligns with your vision.
            </p>
      </div>
    </div>
  </div>

              </div>
          </div>
        </section>
        <section className="six_venture">
          <div className="cards_venture">
            <h2 className="heading_sub_venture" style={{fontSize:"28px",fontWeight:"bolder"}}>What We Offer</h2>
            <div className="main_crad_parent">
              <div className="subcards_venture">
                <img
                  className="card_img_sizing"
                  src={require("../Assets/industry 1.png")}
                />
                <h4 style={{ color: "#0659A4", fontSize: "13px" }}>
                  Industry Experts
                </h4>
                <p className="text_card_venture">
                Our end clients will own all the work done by our experts. You are free to use and commercialize the built software.
                </p>
                
              </div>
              <div className="subcards_venture">
                <img
                  className="card_img_sizing"
                  src={require("../Assets/graph 1.png")}
                />
                <h4 style={{ color: "#0659A4", fontSize: "13px" }}>
                  Detail Reporting
                </h4>
                <p className="text_card_venture">
                Our end clients will own all the work done by our experts. You are free to use and commercialize the built software.
                </p>
              </div>
              <div className="subcards_venture">
                <img
                  className="card_img_sizing"
                  src={require("../Assets/Custom-ERP-Dashboard 1.png")}
                />
                <h4 style={{ color: "#FA7429", fontSize: "13px" }}>
                  Managed Process
                </h4>
                <p className="text_card_venture">
                Our end clients will own all the work done by our experts. You are free to use and commercialize the built software.
                </p>
              </div>
              <div className="subcards_venture">
                <img
                  className="card_img_sizing"
                  src={require("../Assets/XMLID_1325_.png")}
                />
                <h4 style={{ color: "#C86485", fontSize: "13px" }}>
                  IP Security and Ownership
                </h4>
                <p className="text_card_venture">
                Our end clients will own all the work done by our experts. You are free to use and commercialize the built software.
                </p>
              </div>
            </div>
          </div>
        </section>
     
    </>
  );
}

export default OurVentures;
