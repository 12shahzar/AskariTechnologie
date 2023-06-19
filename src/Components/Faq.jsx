import React from 'react'

function Faq() {
  return (
    <div className="container cont">
    <h4 className="head3">Frequently Asked Questions</h4>
    <h6 className="Everything">
      Everything you need to know about the product and billing.
    </h6>

    <div className="accordion w-50 cont2" id="basicAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#basicAccordionCollapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <h6 className="listT">Is there a free trial available?</h6>
          </button>
        </h2>
        <div
          id="basicAccordionCollapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-mdb-parent="#basicAccordion"
          style={{}}
        >
          <div className="accordion-body">
            <p>
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding
              call to get you up and running as soon as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#basicAccordionCollapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <h6 className="listT"> I change my plan later?</h6>
          </button>
        </h2>
        <div
          id="basicAccordionCollapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-mdb-parent="#basicAccordion"
          style={{}}
        >
          <div className="accordion-body">Lorem ipsum</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#basicAccordionCollapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <h6 className="listT">What is your cancellation policy?</h6>
          </button>
        </h2>
        <div
          id="basicAccordionCollapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-mdb-parent="#basicAccordion"
          style={{}}
        >
          <div className="accordion-body">lorem ipsum</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#basicAccordionCollapseOne1"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <h6 className="listT">
              Can other info be added to an invoice?
            </h6>
          </button>
        </h2>
        <div
          id="basicAccordionCollapseOne1"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-mdb-parent="#basicAccordion"
          style={{}}
        >
          <div className="accordion-body">lorem ipsum</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#basicAccordionCollapseTwo1"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <h6 className="listT">How does billing work?</h6>
          </button>
        </h2>
        <div
          id="basicAccordionCollapseTwo1"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-mdb-parent="#basicAccordion"
          style={{}}
        >
          <div className="accordion-body">lorem ipsum</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#basicAccordionCollapseThree1"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <h6 className="listT">How do I change my account email?</h6>
          </button>
        </h2>
        <div
          id="basicAccordionCollapseThree1"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-mdb-parent="#basicAccordion"
          style={{}}
        >
          <div className="accordion-body">lorem ipsum</div>
        </div>
      </div>
    </div>

    
  </div>
  )
}

export default Faq
