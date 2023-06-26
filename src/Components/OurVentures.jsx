import React from "react";
import "../Styles/Ourventure.css";
import "bootstrap/dist/css/bootstrap.css";

function OurVentures() {
  return (
    <>
      <div className="ourventure_baner">
        <h2 className="Venture_heading">How it Works</h2>
      </div>
      <section className=" Secound_venture">
        <div className="img_text_venture">
          <div className="line_color"></div>

          <h2 className="heading_sub_venture">
            How We Craft <br></br>Digital Experiences ?
          </h2>
          <p className="txt_venture_sub">
            We view your business as more than just a project. We embark on the
            journey alongside you, ensuring that you receive the finest
            solutions that result in extraordinary outcomes.
          </p>
        </div>
        <div className="img_venture">
          <img src={require("../Assets/_.png")} className="questionsizsing" />
          <img
            src={require("../Assets/land-rev-1-img-2 1.png")}
            className="sizing"
          />
        </div>
      </section>
      <section className="third_venture">
        <div className="img_text_venture" >
          <h5 className="heading_sub_venture analysisgap" >
            Analysis->Research->Suitable Consultation
          </h5>
          <p className="txt_venture_sub">
            To ensure a seamless progression, we depend on efficient processes.
            The initial stage involves examining your project requirements,
            end-goals, and business expectations. This analysis enables us to
            assist you in constructing a solution that harmonizes with your
            vision
          </p>
          <div class="accordion w-100 fixe_bg" id="basicAccordion">
            <div class="accordion-item boxes_question">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed blue_color"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#basicAccordionCollapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Strategy Consultation
                </button>
              </h2>
              <div
                id="basicAccordionCollapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-mdb-parent="#basicAccordion"
              >
                <div class="accordion-body">
                  <p className="small_size">
                    Clubbed with brainstorming, we analyze your requirements,
                    business scope, current market trends, technical aspects to
                    form a strategy that works for your business. It is a
                    complete end-to-end consultation for a clear and transparent
                    roadmap.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item boxes_question">
              <h2 class="accordion-header " id="headingTwo">
                <button
                  class="accordion-button collapsed blue_color"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#basicAccordionCollapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Business Planning
                </button>
              </h2>
              <div
                id="basicAccordionCollapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-mdb-parent="#basicAccordion"
              >
                <div class="accordion-body">
                  <p className="txt_venture_sub">
                    To maintain a smooth flow throughout, we rely on streamlined
                    processes. The first step includes analyzing your project
                    requirements, end-goals, and business expectations to help
                    you build the solution that aligns with your vision.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed blue_color"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#basicAccordionCollapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Best Solution Suggestion
                </button>
              </h2>
              <div
                id="basicAccordionCollapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-mdb-parent="#basicAccordion"
              >
                <div class="accordion-body">
                  <p className="txt_venture_sub">
                    To maintain a smooth flow throughout, we rely on streamlined
                    processes. The first step includes analyzing your project
                    requirements, end-goals, and business expectations to help
                    you build the solution that aligns with your vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img_venture ventureimg" >
          <img
            src={require("../Assets/Illustration.png")}
            className="sizing2"
          />
        </div>
      </section>
      <section className="four_venture">
        <div className="img_venture">
          <img
            src={require("../Assets/OBJECTS.png")}
            className=" sizing_mar_2"
          />
        </div>
        <div className="img_text_venture">
          <h3 className="heading_sub_venture OurDevelopment">Our Development Process</h3>
          <p className="txt_venture_sub">
            After finalizing all the necessary details, the development phase
            begins. We employ scalable development practices and assign
            dedicated teams to ensure the best outcome for you and your
            business. We follow various development models, including
          </p>
          <div
            style={{
              backgroundColor: "gray",
              height: "1px",
              width: "200px",
              marginBottom: "10px",
            }}
          ></div>
          <ul style={{ fontSize: "14px", listStyle: "outside" }}>
            <li>Scrum-Agile Methodologies</li>
            <li>Swift Application Development </li>
            <li>Time and Resources</li>
            <li>Iterative Waterfall Model</li>
          </ul>
        </div>
      </section>

      <section className="five_venture">
        <div className="img_text_venture">
          <h5 className="heading_sub_venture Assurance">Quality Assurance</h5>
          <p className="txt_venture_sub">
            At our organization, we have established a protocol-driven working
            culture that, combined with our technical expertise, guarantees the
            consistent delivery of high-quality solutions within the specified
            timelines. We prioritize ownership and accountability as fundamental
            qualities deeply ingrained in our system.
          </p>
          <div class="accordion w-100 fixe_bg" id="basicAccordion">
            <div class="accordion-item boxes_question">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed blue_color"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#basicAccordionCollapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Performance Assessment
                </button>
              </h2>
              <div
                id="basicAccordionCollapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-mdb-parent="#basicAccordion"
              >
                <div class="accordion-body">
                  <p className="small_size">
                    We conduct an evaluation of the solution we create to assess
                    the efficiency, accuracy, and functionality of specific
                    programs or functions. Our aim is to ensure that they
                    perform swiftly and effectively, in alignment with the
                    intended objectives
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item boxes_question">
              <h2 class="accordion-header " id="headingTwo">
                <button
                  class="accordion-button collapsed blue_color"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#basicAccordionCollapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Security Assessment
                </button>
              </h2>
              <div
                id="basicAccordionCollapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-mdb-parent="#basicAccordion"
              >
                <div class="accordion-body">
                  <p className="txt_venture_sub">
                    Prior to the final delivery, we conduct thorough security
                    and vulnerability assessments of your solutions to ensure
                    they are well-protected and prepared for immediate use.
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
          <img
            src={require("../Assets/image 8.png")}
            className=" sizing_mar_2 "
          />
        </div>
        <div className="img_text_venture">
          <h5 className="heading_sub_venture">Quality Delivery - Assured! </h5>
          <p className="txt_venture_sub">
            At our organization, we prioritize delivering top-notch projects by
            conducting comprehensive assessments of quality, compliance, and
            adherence to protocols. Our working culture places a strong emphasis
            on accountability, ensuring that each team member takes ownership
            and responsibility for their contributions.
          </p>
          <div class="accordion w-100 fixe_bg" id="basicAccordion">
            <div class="accordion-item boxes_question">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed blue_color"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#basicAccordionCollapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Automated Dispatch
                </button>
              </h2>
              <div
                id="basicAccordionCollapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-mdb-parent="#basicAccordion"
              >
                <div class="accordion-body">
                  <p className="small_size">
                    Our ability to connect, automate, and coordinate tools and
                    functions throughout development, CI/CD, operations, and
                    service teams empowers your organization to achieve timely
                    deliveries through automated delivery processes.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item boxes_question">
              <h2 class="accordion-header " id="headingTwo">
                <button
                  class="accordion-button collapsed blue_color"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#basicAccordionCollapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Maintenance & Assistance
                </button>
              </h2>
              <div
                id="basicAccordionCollapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-mdb-parent="#basicAccordion"
              >
                <div class="accordion-body">
                  <p className="txt_venture_sub">
                    Our services are designed to guarantee the reliability and
                    relevance of your solutions in response to evolving business
                    needs. We provide comprehensive support and maintenance
                    services that encompass application stabilization, service
                    optimization, and ongoing improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="six_venture">
        <div className="cards_venture">
          <h2
            className="heading_sub_venture vent"
            style={{ fontSize: "28px", fontWeight: "bolder" }}
          >
            What We Offer
          </h2>
          <div className="main_crad_parent">
            <div className="subcards_venture">
              <img
                className="card_img_sizing"
                src={require("../Assets/industry 1.png")}
              />
              <h4 style={{ color: "#0659A4", fontSize: "13px" }}>
                Industry Specialists
              </h4>
              <p className="text_card_venture">
                Access top talent in the industry. Be it industry experts,
                marketing professionals, UX/UI designers, or any tech experts.
                Our team makes things happen for you
              </p>
            </div>
            <div className="subcards_venture">
              <img
                className="card_img_sizing"
                src={require("../Assets/graph 1.png")}
              />
              <h4 style={{ color: "#0659A4", fontSize: "13px" }}>
                Thorough reporting
              </h4>
              <p className="text_card_venture">
                We ensure our clients stay informed about project progress and
                its overall health. Success can be measured through milestones
                achieved and client satisfaction with the work completed{" "}
              </p>
            </div>
            <div className="subcards_venture">
              <img
                className="card_img_sizing"
                src={require("../Assets/Custom-ERP-Dashboard 1.png")}
              />
              <h4 style={{ color: "#FA7429", fontSize: "13px" }}>
                Controlled process
              </h4>
              <p className="text_card_venture">
                Our set of processes is the standard through which your solution
                passes. A streamlined flow makes sure your experience with us is
                as expected{" "}
              </p>
            </div>
            <div className="subcards_venture">
              <img
                className="card_img_sizing"
                src={require("../Assets/XMLID_1325_.png")}
              />
              <h4 style={{ color: "#C86485", fontSize: "13px" }}>
                IP Security and Control
              </h4>
              <p className="text_card_venture">
                Our end clients will own all the work done by our experts. You
                are free to use and commercialize the built software{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurVentures;
