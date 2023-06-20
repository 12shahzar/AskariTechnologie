import React from "react";
import "../Styles/Ourpatners.css";
import imageop1 from "../Assets/Untitled-1 2.png";
import imageop2 from "../Assets/Frame 164.png";
import imageop22 from "../Assets/Frame 165.png";
import imageop3 from "../Assets/WhatsApp Image 2023-06-08 at 3.07 1.png";
import imageop4 from "../Assets/unsplash_kRNZiGKtz48 1.png";

function OurPatners() {
  return (
    <>
      <div className="ourpatners_baner">
      <h2 className="Venture_heading">Our Patner</h2>
        
      </div>
      <section className="Ourpatners_main" >
        <div className="Ourpatners_firstchild">
        <div className="line_color">

</div>
          <h2 className="heading_oupatners">
            Askari Technologies Partnerships Crafting Success Together
          </h2>
          <p>
            Embrace the future with Biztech, your ideal partner for innovative
            solutions and services Experience unprecedented growth with our
            exclusive partnership programs designed for IT professionals,
            businesses, and resellers.
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
          Engage with Biztech, unlocking unique growth opportunities. Our
          partnerships offer comprehensive support and cultivate mutual success,
          navigating the dynamic business landscape with shared vision and
          expertise.
        </p>

        <div className="cards_ourpatners">
          <div className="card_child">
            <div className="first_card_child">
              <img src={imageop2} className="img_sizing_ourpatner" />
              <p style={{ color: "#00386B", marginLeft: "30px",marginTop:"30px" }}>
                Technology Partnership
              </p>
            </div>
            <div className="content_ourpatner">
              <p>
                As your technology partner, we take care of all your digital
                requirements so you can focus on core business operations. Share
                your specific needs with us and we’ll devise the most effective
                and cutting-edge technological solutions that align with your
                business objectives. This holistic approach ensures you get the
                best-fit solutions to drive optimal outcomes and superior
                quality results.
              </p>
            </div>
          </div>
          <div className="card_child">
            <div className="first_card_child">
              <img src={imageop22} className="img_sizing_ourpatner" />
              <p style={{ color: "#00386B", marginLeft: "30px",marginTop:"30px" }}>
                Referral Partnership
              </p>
            </div>
            <div className="content_ourpatner">
              <p>
                We welcome businesses of all shapes and sizes, from diverse
                domains, to join our Referral Partnership program. It’s a
                win-win setup where you can grow along with us. By recommending
                us to others, you become eligible not just for a lucrative
                referral bonus but also special rewards. So it’s not just about
                joining a partnership program, but about growing together and
                making success a shared journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="secound_section">
        <h2 style={{ color: "#0659A4" }}>Meet Our Partners</h2>

        <div className="cards_ourpatners">
          <div className="card_child_4">
            <img src={imageop3} style={{ width: "90%", height: "100%" }} className="ganjaimg" />
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
          Perks of working with Askari Technologies
        </h2>
        <p
          style={{
            width: "80%",
            color: "#344054",
            textAlign: "center",
            fontsize: "15px",
          }}
        >
          Aligning your business with Biztech comes with a multitude of benefits
          that supercharge your growth and success. Our robust partnership model
          offers opportunities for revenue amplification, guarantees superior
          quality in solutions, ensures dedicated client service, provides rapid
          response support, actively reduces business risks, and broadens your
          technological reach. Experience the unique advantages of working with
          Biztech and redefine your business journey.
        </p>

        <div className="cards_ourpatners2">
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              Revenue Optimization
            </h3>
            <p className="font_sizing_op">
              With us, every referral and target attained presents an
              opportunity for earnings. Our commission system is structured to
              encourage and reward success, offering a tangible pathway to
              increase your income streams. This proactive strategy means you
              can grow and prosper in an increasingly competitive tech
              landscape.
            </p>
          </div>
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              Quality Excellence
            </h3>
            <p className="font_sizing_op">
              Our commitment to quality is intrinsic to our operations,
              products, and services. As our partner, you have the privilege of
              endorsing and promoting top-tier solutions, recognized and
              respected across the market. Your association with Biztech’s
              quality reputation can foster greater trust and satisfaction among
              your clients.
            </p>
          </div>
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              Service Personalisation
            </h3>
            <p className="font_sizing_op">
              At Biztech, we believe in personalized and comprehensive account
              management. Our dedicated account managers work diligently to
              ensure that every client requirement is fulfilled, and their
              business growth is consistently supported. This includes providing
              strategic guidance, facilitating solutions,{" "}
            </p>
          </div>
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              Priority Support
            </h3>
            <p className="font_sizing_op">
              Our partners receive the highest level of attention and support.
              As soon as you become part of the Biztech family, you gain access
              to our priority support system. This ensures prompt and effective
              resolution of all your concerns and queries, making your
              experience smooth and efficient.
            </p>
          </div>
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              Priority Support
            </h3>
            <p className="font_sizing_op">
              Our partners receive the highest level of attention and support.
              As soon as you become part of the Biztech family, you gain access
              to our priority support system. This ensures prompt and effective
              resolution of all your concerns and queries, making your
              experience smooth and efficient.
            </p>
          </div>
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              Priority Support
            </h3>
            <p className="font_sizing_op">
              Our partners receive the highest level of attention and support.
              As soon as you become part of the Biztech family, you gain access
              to our priority support system. This ensures prompt and effective
              resolution of all your concerns and queries, making your
              experience smooth and efficient.
            </p>
          </div>
          <div className="card_op2">
            <h3 className="font_sizing_op_heading" style={{ color: "#00386B" }}>
              Priority Support
            </h3>
            <p className="font_sizing_op">
              Our partners receive the highest level of attention and support.
              As soon as you become part of the Biztech family, you gain access
              to our priority support system. This ensures prompt and effective
              resolution of all your concerns and queries, making your
              experience smooth and efficient.
            </p>
          </div>
        </div>
      </div>

      <div className="bg_map">
        <div className="Ourpatners_child">
          <h2 className="heading_oupatners" style={{ color: "white" }}>
            LET’S TALK ABOUT YOUR PROJECT
          </h2>
        </div>
        <div className="Ourpatners_child2">
          <h3 style={{ marginLeft: "-160px",marginTop:'20px'}}>Contact Us</h3>
          <p style={{ fontSize: "14px",marginLeft:"10%" }}>
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
