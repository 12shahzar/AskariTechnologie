import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Hearder.css";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import Software from "../Assets/Frame.png";
import AI from "../Assets/ai.png";
import Appdev from "../Assets/appdev.png";
import Webdev from "../Assets/webdev.png";
import Interprise from "../Assets/interprise.png";
import Ecommerce from "../Assets/ecommerce.png";
import backend from "../Assets/backend.png";
import Erp from "../Assets/erp.png";
import Mobile from "../Assets/mobile.png";
const HireDevSidebar = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);

  const abba = () => {
    const butt = document.getElementById("first");
    butt.style.display = "block";
    const butt2 = document.getElementById("second");
    butt2.style.display = "none";
    const butt3 = document.getElementById("third");
    butt3.style.display = "none";
    const butt4 = document.getElementById("fourth");
    butt4.style.display = "none";
    const butt5 = document.getElementById("fifth");
    butt5.style.display = "none";
    const side = document.getElementById("ecommerce");
    side.style.backgroundColor = "#0659A4";
    side.style.color = "white";
    const change = document.getElementById("mobile");
    change.style.backgroundColor = "#f5f5ef";
    change.style.color = "black";
    const change1 = document.getElementById("frontend");
    change1.style.backgroundColor = "#f5f5ef";
    change1.style.color = "black";
    const change2 = document.getElementById("backend");
    change2.style.backgroundColor = "#f5f5ef";
    change2.style.color = "black";
    const change3 = document.getElementById("crmerp");
    change3.style.backgroundColor = "#f5f5ef";
    change3.style.color = "black";
  };
  const abba2 = () => {
    const butt = document.getElementById("first");
    butt.style.display = "none";
    const butt2 = document.getElementById("second");
    butt2.style.display = "block";
    const butt3 = document.getElementById("third");
    butt3.style.display = "none";
    const butt4 = document.getElementById("fourth");
    butt4.style.display = "none";
    const butt5 = document.getElementById("fifth");
    butt5.style.display = "none";
    const side = document.getElementById("mobile");
    side.style.backgroundColor = "#0659A4";
    side.style.color = "white";
    const change = document.getElementById("ecommerce");
    change.style.backgroundColor = "#f5f5ef";
    change.style.color = "black";
    const change1 = document.getElementById("frontend");
    change1.style.backgroundColor = "#f5f5ef";
    change1.style.color = "black";
    const change2 = document.getElementById("backend");
    change2.style.backgroundColor = "#f5f5ef";
    change2.style.color = "black";
    const change3 = document.getElementById("crmerp");
    change3.style.backgroundColor = "#f5f5ef";
    change3.style.color = "black";
  };
  const abba3 = () => {
    const butt = document.getElementById("first");
    butt.style.display = "none";
    const butt2 = document.getElementById("second");
    butt2.style.display = "none";
    const butt3 = document.getElementById("third");
    butt3.style.display = "block";
    const butt4 = document.getElementById("fourth");
    butt4.style.display = "none";
    const butt5 = document.getElementById("fifth");
    butt5.style.display = "none";
    const side3 = document.getElementById("frontend");
    side3.style.backgroundColor = "#0659A4";
    side3.style.color = "white";
    const side = document.getElementById("mobile");
    side.style.backgroundColor = "#f5f5ef";
    side.style.color = "black";
    const change = document.getElementById("ecommerce");
    change.style.backgroundColor = "#f5f5ef";
    change.style.color = "black";
    const change1 = document.getElementById("frontend");
    change1.style.backgroundColor = "#0659A4";
    change1.style.color = "white";
    const change2 = document.getElementById("backend");
    change2.style.backgroundColor = "#f5f5ef";
    change2.style.color = "black";
    const change3 = document.getElementById("crmerp");
    change3.style.backgroundColor = "#f5f5ef";
    change3.style.color = "black";
  };
  const abba4 = () => {
    const butt = document.getElementById("first");
    butt.style.display = "none";
    const butt2 = document.getElementById("second");
    butt2.style.display = "none";
    const butt3 = document.getElementById("third");
    butt3.style.display = "none";
    const butt4 = document.getElementById("fourth");
    butt4.style.display = "block";
    const butt5 = document.getElementById("fifth");
    butt5.style.display = "none";
    const side4 = document.getElementById("backend");
    side4.style.backgroundColor = "blue";
    side4.style.color = "white";
    const side = document.getElementById("mobile");
    side.style.backgroundColor = "#f5f5ef";
    side.style.color = "black";
    const change = document.getElementById("ecommerce");
    change.style.backgroundColor = "#f5f5ef";
    change.style.color = "black";
    const change1 = document.getElementById("frontend");
    change1.style.backgroundColor = "#f5f5ef";
    change1.style.color = "black";
    const change2 = document.getElementById("backend");
    change2.style.backgroundColor = "#0659A4";
    const change3 = document.getElementById("crmerp");
    change3.style.backgroundColor = "#f5f5ef";
    change3.style.color = "black";
  };
  const abba5 = () => {
    const butt = document.getElementById("first");
    butt.style.display = "none";
    const butt2 = document.getElementById("second");
    butt2.style.display = "none";
    const butt3 = document.getElementById("third");
    butt3.style.display = "none";
    const butt4 = document.getElementById("fourth");
    butt4.style.display = "none";
    const butt5 = document.getElementById("fifth");
    butt5.style.display = "block";
    const side5 = document.getElementById("crmerp");
    side5.style.backgroundColor = "#0659A4";
    side5.style.color = "white";
    const side = document.getElementById("mobile");
    side.style.backgroundColor = "#f5f5ef";
    side.style.color = "black";
    const change = document.getElementById("ecommerce");
    change.style.backgroundColor = "#f5f5ef";
    change.style.color = "black";
    const change1 = document.getElementById("frontend");
    change1.style.backgroundColor = "#f5f5ef";
    change1.style.color = "black";
    const change2 = document.getElementById("backend");
    change2.style.backgroundColor = "#f5f5ef";
    change2.style.color = "black";
    const change3 = document.getElementById("crmerp");
    change3.style.backgroundColor = "#0659A4";
    change3.style.color = "white";
  };
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-4 HireDevCont">
            <div className="row Techhead">Technology</div>
            <div className="row sidebarItems" onClick={abba} id="ecommerce">
              Ecommerce
            </div>
            <div className="row sidebarItems" onClick={abba2} id="mobile">
              Mobile
            </div>
            <div className="row sidebarItems" onClick={abba3} id="frontend">
              Front End
            </div>
            <div className="row sidebarItems" onClick={abba4} id="backend">
              Back End
            </div>
            <div className="row sidebarItems" onClick={abba5} id="crmerp">
              CRM & ERP
            </div>
          </div>
          <div className="col-8">
            <h1 id="first" className="">
              <div className="container gred">
                <div className="row divHeader">
                  <h3 className="ecommerceHeading">Ecommerce</h3>
                  <p>Sell faster with a comprehensive eCommerce site</p>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="">
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/hireshopfiy"}>
                          <li>Hire Shopify Developer</li>
                        </Link>
                      </div>

                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/hiremagento"}>
                          <li>Hire Magento Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/hiredrupal"}>
                          <li>Hire Drupal Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/opencart"}>
                          <li>Hire Opencart Developer</li>
                        </Link>
                      </div>
                    </ul>
                  </div>
                  <div className="col">
                    <img src={Ecommerce} className="navimg" />
                  </div>
                </div>
              </div>
            </h1>

            <h1 id="second" className="hideOptions">
              <div className="container gred">
                <div className="row divHeader">
                  <h3 className="MobileHeading">Mobile</h3>
                  <p>Create mobile-first solutions to reach a wider audience</p>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="">
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/flutter"}>
                          <li>Hire Flutter Developer</li>
                        </Link>
                      </div>

                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/kotlin"}>
                          <li>Hire Kotlin Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/swift"}>
                          <li>Hire Swift Developer</li>
                        </Link>
                      </div>

                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/ios"}>
                          <li>Hire Ios App Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/andriod"}>
                          <li>Hire Android App Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/ar"}>
                          <li>Hire AR App Developer</li>
                        </Link>
                      </div>
                    </ul>
                  </div>
                  <div className="col">
                    <img src={Mobile} className="navimg" />
                  </div>
                </div>
              </div>
            </h1>

            <h1 id="third" className="hideOptions">
              {" "}
              <div className="container gred">
                <div className="row divHeader">
                  <h3 className="FrontHeading">Front End</h3>
                  <p>Create mobile-first solutions to reach a wider audience</p>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="">
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/vuejs"}>
                          <li>Hire Vuejs Developer</li>
                        </Link>
                      </div>

                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/reactjs"}>
                          <li>Hire Reactjs Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/angular"}>
                          <li>Hire Angularjs Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"fabricjs"}>
                          <li>Hire Fabricjs Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/mean"}>
                          <li>Hire Mean Stack Developer</li>
                        </Link>
                      </div>
                      {/* <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <li>Hire Ios App Developer</li>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <li>Hire Android App Developer</li>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <li>Hire AR App Developer</li>
                      </div> */}
                    </ul>
                  </div>
                  <div className="col">
                    <img src={Software} className="navimg" />
                  </div>
                </div>
              </div>
            </h1>

            <h1 id="fourth" className="hideOptions">
              {" "}
              <div className="container gred">
                <div className="row divHeader">
                  <h3 className="backendHeading">Back End</h3>
                  <p>Create mobile-first solutions to reach a wider audience</p>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="">
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/mean"}>
                          <li>Hire Mean Stack Developer</li>
                        </Link>
                      </div>

                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/net"}>
                          <li>Hire .Net Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/asp"}>
                          <li>Hire Asp Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/laravel"}>
                          <li>Hire Laravel Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/nodejs"}>
                          <li>Hire Nodejs Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/django"}>
                          <li>Hire Django Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/pythone"}>
                          <li>Hire Python Developer</li>
                        </Link>
                      </div>
                      {/* <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <li>Hire Android App Developer</li>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <li>Hire AR App Developer</li>
                      </div> */}
                    </ul>
                  </div>
                  <div className="col">
                    <img src={backend} className="navimg" />
                  </div>
                </div>
              </div>
            </h1>

            <h1 id="fifth" className="hideOptions">
              {" "}
              <div className="container gred">
                <div className="row divHeader">
                  <h3 className="erpHeading">CRM & ERP</h3>
                  <p>Create mobile-first solutions to reach a wider audience</p>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="">
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/hiresales"}>
                          <li>Hire Salesforce Developer</li>
                        </Link>
                      </div>

                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/hireodoo"}>
                          <li>Hire Odoo Developer</li>
                        </Link>
                      </div>
                      {/* <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <li>Hire Swift Developer</li>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <li>Hire Ionic Developer</li>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <li>Hire React Native Developer</li>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <li>Hire Ios App Developer</li>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <li>Hire Android App Developer</li>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <li>Hire AR App Developer</li>
                      </div> */}
                    </ul>
                  </div>
                  <div className="col">
                    <img src={Erp} className="navimg" />
                  </div>
                </div>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HireDevSidebar;
