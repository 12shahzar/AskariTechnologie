import React from "react";
import "../Styles/Ourpatners.css";
import imageop1 from "../Assets/Untitled-1 2.png";
import imageop2 from "../Assets/Frame 164.png";
import imageop22 from "../Assets/Frame 165.png";
import imageop3 from "../Assets/WhatsApp Image 2023-06-08 at 3.07 1.png";
import imageop4 from "../Assets/unsplash_kRNZiGKtz48 1.png";
import "bootstrap/dist/css/bootstrap.css";

function OurPatners() {
  return (
    <>
      <div className="ourpatners_baner">
        <h2 className="Venture_heading">Our Patner</h2>
      </div>
      <section className="Ourpatners_main">
        <div className="Ourpatners_firstchild">
          <div className="line_color"></div>
          <h2 className="heading_oupatners">
            Askari Technologies Partnerships Powering Growth Together
          </h2>
          <p>
            Unleash your potential with Askari Technologies, your partner for
            transformative solutions and services. Join our tailored partnership
            programs designed for IT professionals, businesses, and resellers,
            and experience unprecedented growth. Let's embark on a journey
            towards success together. Contact us today.
          </p>
          <button className="button_patners">Let’s Collaborate</button>
        </div>
        <div className="Ourpatners_secoundchild">
          <img src={imageop1} className="patner_sizing" />
        </div>
      </section>
      <div className="secound_section">
        <h2 style={{ color: "#0659A4", textAlign: "center" }}>
          Our Partnership Opportunities
        </h2>
        <p
          style={{
            width: "80%",
            color: "#344054",
            textAlign: "center",
            marginTop: "20px",
          }}
          className="text_ourpatners"
        >
          At Askari Technologies, we foster fruitful collaborations that unlock
          exceptional growth prospects, providing comprehensive assistance and
          leveraging our shared vision and expertise to navigate the dynamic
          business landscape and achieve mutual success.
        </p>

        <div className="cards_ourpatners">
          <div className="card_child">
            <div className="first_card_child">
              <img src={imageop2} className="img_sizing_ourpatner" />
              <p
                style={{
                  color: "#00386B",
                  marginLeft: "30px",
                  marginTop: "30px",
                }}
              >
                Technology Partnership
              </p>
            </div>
            <div className="content_ourpatner">
              <p>
                Let us be your trusted technology partner, handling all your
                digital needs while you concentrate on core business operations.
                Share your specific requirements, and we will craft cutting-edge
                and effective technological solutions that align with your
                business objectives. Our holistic approach guarantees the
                delivery of tailored solutions for optimal outcomes and
                exceptional quality results.
              </p>
            </div>
          </div>
          <div className="card_child">
            <div className="first_card_child">
              <img src={imageop22} className="img_sizing_ourpatner" />
              <p
                style={{
                  color: "#00386B",
                  marginLeft: "30px",
                  marginTop: "30px",
                }}
              >
                Referral Partnership
              </p>
            </div>
            <div className="content_ourpatner">
              <p>
                We extend an invitation to businesses of all sizes and
                industries to join our Referral Partnership program, fostering a
                mutually beneficial collaboration. By recommending our services,
                you not only gain access to a rewarding referral bonus but also
                unlock special incentives. It's not just about becoming part of
                a partnership program, but about embarking on a shared journey
                of growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="secound_section">
        <h2 style={{ color: "#0659A4" }}>Meet Our Partners</h2>

        <div className="cards_ourpatners">
          <div className="card_child_4">
            <img
              src={imageop3}
              style={{ width: "90%", height: "100%" }}
              className="ganjaimg"
            />
          </div>
          <div className="card_child2">
            <div className="first_card_child">
              <p
                style={{
                  color: "#00386B",
                  marginLeft: "30px",
                  fontSize: "20px",
                }}
              >
                Muhammad Hussain
              </p>
            </div>
            <div className="content_ourpatner">
              <p>
                Muhammad is based out of the United Kingdom and leads the
                business operations for our UK division. With a strong
                background in product and operations management, Muhammad brings
                extensive experience across various industries. He is dedicated
                to driving efficiency and excellence in our operations to
                deliver exceptional results to our clients. Muhammad's expertise
                and leadership contribute to the success and growth of our
                organization in the UK market.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='banner_ourpatner'>
                    <img src={imageop4} style={{height:'100%',width:'100%'}}/>

                </div> */}
      <div className="secound_section">
        <h2 style={{ color: "#0659A4", textAlign: "center" }}>
          Advantages of working with Askari Technologies
        </h2>
        <p
          style={{
            width: "80%",
            color: "#344054",
            textAlign: "center",
            fontsize: "11px",
          }}
        >
          Partnering with Askari Technologies brings a myriad of advantages that
          fuel your growth and success. Our robust partnership model amplifies
          revenue, guarantees top-notch solutions, ensures dedicated client
          service, offers rapid response support, mitigates business risks, and
          expands your technological capabilities. Embrace the distinctive
          benefits of collaborating with Askari Technologies and redefine your
          business journey
        </p>

        <div className="cards_ourpatners2">
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              OPTIMIZING REVENUE
            </h3>
            <p className="font_sizing_op">
              At our organization, each referral and achieved target opens up
              possibilities for earning potential. Our commission system is
              designed to foster and acknowledge success, providing a concrete
              avenue to enhance your income streams. By adopting this proactive
              approach, you can thrive and prosper in the ever-growing and
              competitive technology industry.
            </p>
          </div>
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              HIGH-CLASS QUALITY
            </h3>
            <p className="font_sizing_op">
              At the core of our operations, products, and services lies our
              unwavering dedication to quality. By partnering with us, you have
              the exclusive opportunity to endorse and promote high-caliber
              solutions that are renowned and esteemed in the market. Your
              affiliation with Askari Technologies's exceptional reputation for
              quality can cultivate stronger trust and satisfaction among your
              clients
            </p>
          </div>
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              Service Personalisation
            </h3>
            <p className="font_sizing_op">
              At Askari , we believe in personalized and comprehensive account
              management. Our dedicated account managers work diligently to
              ensure that every client requirement is fulfilled, and their
              business growth is consistently supported. This includes providing
              strategic guidance, facilitating solutions,{" "}
            </p>
          </div>
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              PERSONALIZED SERVICE
            </h3>
            <p className="font_sizing_op">
              At Askari Technologies, we are firm believers in providing
              personalized and comprehensive account management services. Our
              dedicated account managers are committed to fulfilling every
              client requirement and consistently supporting their business
              growth. This entails offering strategic guidance, facilitating
              tailored solutions, and ensuring an exceptional customer
              experience at every step of the way.
            </p>
          </div>
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              SUPPORT ON PRIORITY
            </h3>
            <p className="font_sizing_op">
              At Askari Technologies, our partners receive the utmost attention
              and support. Once you join our Askari Technologies family, you
              gain access to our priority support system, ensuring that all your
              concerns and queries are addressed promptly and effectively. We
              prioritize providing a seamless and efficient experience for you,
              ensuring that any issues you encounter are resolved in a timely
              manner
            </p>
          </div>
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              Risk Alleviation
            </h3>
            <p className="font_sizing_op">
              At the heart of our partnership approach lies a commitment to
              transparency. We make it a priority to keep you thoroughly
              informed throughout our collaboration, effectively reducing any
              risks you may face as a partner. By providing this level of
              openness, we aim to instill confidence in our process, ultimately
              enhancing your peace of mind and empowering informed
              decision-making.
            </p>
          </div>
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              New Technological Horizon
            </h3>
            <p className="font_sizing_op">
              With our comprehensive array of technology services, we offer you
              an ideal platform to broaden your tech offerings. As a partner of
              Askari Technologies, you have the opportunity to explore diverse
              technological domains, enabling you to provide a broader range of
              solutions to your customers. Embracing this expansion opportunity
              can result in enhanced client engagement and foster business
              growth.
            </p>
          </div>
        </div>
      </div>

      <div className="bg_map">
        <div className="Ourpatners_child">
          <h2
            className="heading_oupatners"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            LET’S TALK ABOUT YOUR PROJECT
          </h2>
        </div>
        <div className="Ourpatners_child2">
          <h3
            style={{
              marginLeft: "-180px",
              marginTop: "20px",
              fontWeight: "bolder",
            }}
          >
            Contact Us
          </h3>
          <p style={{ fontSize: "14px", marginLeft: "10%" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, et!
          </p>
          <input type="text" placeholder="Name" className="input" />
          <input type="text" placeholder="Business Email" className="input" />
          <input type="text" placeholder="Phone Number" className="input" />
          <textarea
            type="text"
            placeholder="Brief About Your Project"
            className="input4"
          />
          <button className="input2">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default OurPatners;
