import React from 'react'

function Contactsub() {
  return (
    <section className="contact-us" id="contact-us">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 conact-c1">
          <h4 className="contact-head ">
            Get 30-Minute <br></br> Free Strategy<br></br>  Consultation
          </h4>
          <p className="contact-para">
            Let’s discuss how Biztech can help you convert <br></br> breakthrough
            ideas into tangible outcomes. <br></br>Take the first step with our
            software product <br></br> engineering services today!
          </p>
        </div>
        <div className="col-lg-6 conact-c2">
          <h1 className="conatact-tittle ">Get Started</h1>

          <form>
            <div >
              <label for="exampleInputName" class="form-label" className="align_contact_lab">
                Name
              </label>
              <input
                type="name"
                class="form-control"
                id="exampleInputname"
                aria-describedby="nameHelp"
                placeholder="Enter Your Name"
                className="input_pro_eng"
              />
            </div>
            <div >
              <label for="exampleInputName" class="form-label" className="align_contact_lab">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputname"
                aria-describedby="nameHelp"
                placeholder="Enter Your Email"
                className="input_pro_eng"
              />
            </div>
            <div >
              <label for="exampleInpuEmail" class="form-label" className="align_contact_lab">
                Phone Number
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                placeholder="Enter Your Phone Number"
                className="input_pro_eng"
              />
            </div>

            <div >
              <label for="exampleFormControlTextarea1" class="form-label" className="align_contact_lab">
                Message
              </label>
              <textarea
                
                class="form-control"
                id="exampleInputEmail"
                placeholder="Give us a brief about your requirment"
                className="input_pro_eng_inp"
              />
            </div>
            <button type="submit" class="btn_get_form">
              Get Started
            </button>
            <p >
            
              <span className="guaranteed" > 100% Guaranteed </span> Security
              of the Information.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contactsub
