import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "../Styles/nav.css";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Logo from "../Assets/logo.jpg.jpeg";
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [show , setShow] =useState(false);
  return (
    <>
    <div className='Navbara'>
<div className='leftside'>
<Link to="/"><img src={Logo} className='navlogoa'/></Link>
</div>
<div className='rightside'>
    <div className='toggle' onClick={()=>setShow(!show)} >
    <DensityMediumIcon style={{color:"gray"}}/>
    </div>
    </div>
    </div>
    
    {
     show && <div className="accordion w-100" id="basicAccordion">
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
        ABOUT
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
      <div className='listdiv'>
      <Link to="/about" style={{textDecoration:"none", color:"black"}}><p>About Us</p></Link>
        <Link to="/patner" style={{textDecoration:"none", color:"black"}}><p>Partners</p></Link>
        <Link to="/ouventure" style={{textDecoration:"none", color:"black"}}> <p>How It Works</p></Link>
        <Link to="/Contact" style={{textDecoration:"none", color:"black"}}><p>Contact Us</p></Link>
      </div>
        
        
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
        CAPABILITIES
      </button>
    </h2>
    <div
      id="basicAccordionCollapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-mdb-parent="#basicAccordion"
      style={{}}
    >
      <div className="accordion-body">
      <div className='listdiv'>
      
         <Link to="/proeng" style={{textDecoration:"none", color:"black"}}><p>Software Engineering</p></Link>
         <Link to="/Ecommerce" style={{textDecoration:"none", color:"black"}}><p>E-commerce Development</p></Link>
         <Link to="/devops" style={{textDecoration:"none", color:"black"}}><p>Devops</p></Link>
         <Link to="/Quality" style={{textDecoration:"none", color:"black"}}><p>Quality Engineering</p></Link>
         <Link to="/Cloudsol" style={{textDecoration:"none", color:"black"}}><p>Cloud Application</p></Link>
         <Link to="/Alml" style={{textDecoration:"none", color:"black"}}><p>AI Development</p></Link>
      </div>
     
      </div>
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
        DEVELOPMENT
      </button>
    </h2>
    <div
      id="basicAccordionCollapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-mdb-parent="#basicAccordion"
      style={{}}
    >
      <div className="accordion-body">
      <div className='listdiv'>


      <Link to="/shopifydevelopment" style={{textDecoration:"none", color:"black"}}> <p>Shopify</p></Link>
      <Link to="/magentodevelopment" style={{textDecoration:"none", color:"black"}}> <p>Magento</p></Link>
      <Link to="/woocommerce" style={{textDecoration:"none", color:"black"}}><p>Woocommerce</p></Link>
      <Link to="/Ecommerceapp" style={{textDecoration:"none", color:"black"}}><p>E-Commerce App</p></Link>
      <Link to="/shopfiyapp" style={{textDecoration:"none", color:"black"}}> <p>Shopify App</p></Link>
      <Link to="/enterprices" style={{textDecoration:"none", color:"black"}}><p>Enterprise App</p></Link>
      <Link to="/Dynamic365" style={{textDecoration:"none", color:"black"}}><p>Microsoft Dynamics 365</p></Link>
      <Link to="/odoo" style={{textDecoration:"none", color:"black"}}><p>Odoo</p></Link>
      <Link to="/salesconsulting" style={{textDecoration:"none", color:"black"}}><p>Consulting</p></Link>
      <Link to="/SalesForc" style={{textDecoration:"none", color:"black"}}><p>Development</p></Link>
      <Link to="/salesimplemation" style={{textDecoration:"none", color:"black"}}> <p>Implementation</p></Link>
      <Link to="/salesapplication" style={{textDecoration:"none", color:"black"}}><p>App-Development</p></Link>
      <Link to="/salesmigration" style={{textDecoration:"none", color:"black"}}> <p>Migration</p></Link>
      <Link to="/salesintregation" style={{textDecoration:"none", color:"black"}}> <p>Integration</p></Link>
      <Link to="/supportmaintainece" style={{textDecoration:"none", color:"black"}}> <p>Support & Maintenance</p></Link>
      <Link to="/lms" style={{textDecoration:"none", color:"black"}}><p>Learning Management System</p></Link>
      
      </div>
      
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThreeaa">
      <button
        className="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseThreeaa"
        aria-expanded="false"
        aria-controls="collapseThreeaa"
      >
        HIRE DEVELOPER
      </button>
    </h2>
    <div
      id="basicAccordionCollapseThreeaa"
      className="accordion-collapse collapse"
      aria-labelledby="headingThreeaa"
      data-mdb-parent="#basicAccordion"
      style={{}}
    >
      <div className="accordion-body">
      <div className='listdiv'>
      
      
      <Link to="/hireshopfiy" style={{textDecoration:"none", color:"black"}}> <p>Hire Shopify Developer</p></Link>
      <Link to="/hiremagento" style={{textDecoration:"none", color:"black"}}><p>Hire Magento Developer</p></Link>
      <Link to="/hiredrupal" style={{textDecoration:"none", color:"black"}}> <p>Hire Drupal Developer</p></Link>
      <Link to="/opencart" style={{textDecoration:"none", color:"black"}}><p>Hire Opencart Developer</p></Link>
      <Link to="/flutter" style={{textDecoration:"none", color:"black"}}> <p>Hire Flutter Developer</p></Link>
      <Link to="/kotlin" style={{textDecoration:"none", color:"black"}}> <p>Hire Kotlin Developer</p></Link>
      <Link to="/swift" style={{textDecoration:"none", color:"black"}}><p>Hire Swift Developer</p></Link>
      <Link to="/ios" style={{textDecoration:"none", color:"black"}}> <p>Hire Ios App Developer</p></Link>
      <Link to="/andriod" style={{textDecoration:"none", color:"black"}}><p>Hire Android App Developer</p></Link>
      <Link to="/ar" style={{textDecoration:"none", color:"black"}}><p>Hire AR App Developer</p></Link>
      <Link to="/vuejs" style={{textDecoration:"none", color:"black"}}> <p>Hire Vuejs Developer</p></Link>
      <Link to="/reactjs" style={{textDecoration:"none", color:"black"}}><p>Hire Reactjs Developer</p></Link>
      <Link to="/angular" style={{textDecoration:"none", color:"black"}}><p>Hire Angularjs Developer</p></Link>
      <Link to="fabricjs" style={{textDecoration:"none", color:"black"}}> <p>Hire Fabricjs Developer</p></Link>
      <Link to="/mean" style={{textDecoration:"none", color:"black"}}><p>Hire Mean Stack Developer</p></Link>
      <Link to="/mean" style={{textDecoration:"none", color:"black"}}> <p>Hire Mean Stack Developer</p></Link>
      <Link to="/net" style={{textDecoration:"none", color:"black"}}><p>Hire .Net Developer</p></Link>
      <Link to="/asp" style={{textDecoration:"none", color:"black"}}> <p>Hire Asp Developer</p></Link>
      <Link to="/laravel" style={{textDecoration:"none", color:"black"}}><p>Hire Laravel Developer</p></Link>
      <Link to="/nodejs" style={{textDecoration:"none", color:"black"}}><p>Hire Nodejs Developer</p></Link>
      <Link to="/django" style={{textDecoration:"none", color:"black"}}> <p>Hire Django Developer</p></Link>
      <Link to="/pythone" style={{textDecoration:"none", color:"black"}}> <p>Hire Python Develope</p></Link>
      <Link to="/hiresales" style={{textDecoration:"none", color:"black"}}><p>Hire Salesforce Developer</p></Link>
      <Link to="/hireodoo" style={{textDecoration:"none", color:"black"}}> <p>Hire Odoo Developer</p></Link>
      </div>
      
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThreb">
      <button
        className="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseThreb"
        aria-expanded="false"
        aria-controls="collapseThreb"
      >
        SOLUTIONS
      </button>
    </h2>
    <div
      id="basicAccordionCollapseThreb"
      className="accordion-collapse collapse"
      aria-labelledby="headingThreb"
      data-mdb-parent="#basicAccordion"
      style={{}}
    >
      <div className="accordion-body">
      <div className='listdiv'>


      <Link to="/sol1" style={{textDecoration:"none", color:"black"}}><p>Asaan ERP</p></Link>
      <Link to="/sol2" style={{textDecoration:"none", color:"black"}}><p>Cognitive Edu</p></Link>
      <Link to="sol3" style={{textDecoration:"none", color:"black"}}> <p>Client Connect</p></Link>
      <Link to="/sol5" style={{textDecoration:"none", color:"black"}}> <p>Instant Sales</p></Link>
      <Link to="/sol6" style={{textDecoration:"none", color:"black"}}><p>Medease</p></Link>
      <Link to="sol4" style={{textDecoration:"none", color:"black"}}><p>Agrisense</p></Link>
      </div>
      
      </div>
    </div>
  </div>
</div>


    }



    </>
  )
}

export default Nav