import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
// Pictures Import
import Logo from "../Assets/logo.jpg.jpeg";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-end  ">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  to={"magento"}
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to={"/about"} className="dropdown-item" href="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Venture"} className="dropdown-item" href="#">
                      How it Work
                    </Link>
                  </li>

                  <li>
                    <Link to={"/Partner"} className="dropdown-item" href="#">
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Contact"} className="dropdown-item" href="#">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Capabilities
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      to={"/ProductEngering"}
                      className="dropdown-item"
                      href="#"
                    >
                      Software Product Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/QualiftyEngering"}
                      className="dropdown-item"
                      href="#"
                    >
                      Quality Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to={"/ErpService"} className="dropdown-item" href="#">
                      ERP Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/EcommerceService"}
                      className="dropdown-item"
                      href="#"
                    >
                      Ecommerce Development
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Cloudsol"} className="dropdown-item" href="#">
                      Cloud Application
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      CRM Services
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Devops"} className="dropdown-item" href="#">
                      Devops
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/ArtificalIntelligence"}
                      className="dropdown-item"
                      href="#"
                    >
                      AL ML Development
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Development
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      to={"/Shopfifydevelopment"}
                      className="dropdown-item"
                      href="#"
                    >
                      Shopfiy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/woocommerce"}
                      className="dropdown-item"
                      href="#"
                    >
                      Woocommerce
                    </Link>
                  </li>

                  <li>
                    <Link to={"/ecommerce"} className="dropdown-item" href="#">
                      E-Commerce App
                    </Link>
                  </li>
                  <li>
                    <Link to={"/ShopfiyApp"} className="dropdown-item" href="#">
                      Shopfiy App
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/enterpricesapp"}
                      className="dropdown-item"
                      href="#"
                    >
                      Enterprise App
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/micorsoftdynamic"}
                      className="dropdown-item"
                      href="#"
                    >
                      MS Dynamic 365
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/leverageodoodevelopment"}
                      className="dropdown-item"
                      href="#"
                    >
                      odoo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Ms-Dynamic 365
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      odoo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/salesforcedevelopment"}
                      className="dropdown-item"
                      href="#"
                    >
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/SalesforceConsultingServices"}
                      className="dropdown-item"
                      href="#"
                    >
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/SalesImplemation"}
                      className="dropdown-item"
                      href="#"
                    >
                      Implemation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Salesfroceapplication"}
                      className="dropdown-item"
                      href="#"
                    >
                      Sales Force Application
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/salesmigration"}
                      className="dropdown-item"
                      href="#"
                    >
                      Migration
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/salesintergation"}
                      className="dropdown-item"
                      href="#"
                    >
                      Interigation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/salessuppport"}
                      className="dropdown-item"
                      href="#"
                    >
                      Support & Maintenece
                    </Link>
                  </li>
                  <li>
                    <Link to={"/customlms"} className="dropdown-item" href="#">
                      Learining Management System
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Content Management System
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hire Developer
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/hireShopfy" className="dropdown-item" href="#">
                      Hire Shopfiy Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/magento" className="dropdown-item" href="#">
                      Hire Magento Developer
                    </Link>
                  </li>

                  <li>
                    <Link to={"opencart"} className="dropdown-item" href="#">
                      Hire Opencart
                    </Link>
                  </li>
                  <li>
                    <Link to={"/hireskills"} className="dropdown-item" href="#">
                      Hire Drupal Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/flutter" className="dropdown-item" href="#">
                      Hire Flutter Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/swift"} className="dropdown-item" href="#">
                      Hire Swift Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/ios"} className="dropdown-item" href="#">
                      Hire IOS Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Andriod"} className="dropdown-item" href="#">
                      Hire Andriod App Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/augmented"} className="dropdown-item" href="#">
                      Hire AR Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/vuejs"} className="dropdown-item" href="#">
                      Hire Vuejs Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/reactjs"} className="dropdown-item" href="#">
                      Hire Reactjs Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/fabricjs"} className="dropdown-item" href="#">
                      Hire Fabricjs Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/mean"} className="dropdown-item" href="#">
                      Hire Mean Stack Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/laravel"} className="dropdown-item" href="#">
                      Hire Laravle Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/asp"} className="dropdown-item" href="#">
                      Hire .Net Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/.net"} className="dropdown-item" href="#">
                      Hire .Net Core Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/node"} className="dropdown-item" href="#">
                      Hire Nodejs Developer
                    </Link>
                  </li>

                  <li>
                    <Link to={"/django"} className="dropdown-item" href="#">
                      Hire Django Developer
                    </Link>
                  </li>

                  <li>
                    <Link to={"/pyhtone"} className="dropdown-item" href="#">
                      Hire Pythone Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/salesforce"} className="dropdown-item" href="#">
                      Hire Saslesforce Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/odoo"} className="dropdown-item" href="#">
                      Hire odoo Developer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/wordpress"} className="dropdown-item" href="#">
                      Hire Wordpress Developer Developer
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutoins
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to={"/solution1"} className="dropdown-item" href="#">
                      Booking
                    </Link>
                  </li>
                  <li>
                    <Link to={"/solution2"} className="dropdown-item" href="#">
                      Portal
                    </Link>
                  </li>

                  <li>
                    <Link to={"/solution3"} className="dropdown-item" href="#">
                      On-Demand Services
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Solution4"} className="dropdown-item" href="#">
                      Customer Support
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Solution5"} className="dropdown-item" href="#">
                      Web To Print
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Solution6"} className="dropdown-item" href="#">
                      Dynamic 365
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <button class="btn btn-contact" type="submit">
              Let's Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
