import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Hearder.css";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import Software from "../Assets/frontsvg.svg";
import AI from "../Assets/ai.png";
import Appdev from "../Assets/appdev.png";
import Webdev from "../Assets/webdev.png";
import Interprise from "../Assets/interprise.png";
import Ecommerce from "../Assets/ecommercesvg.svg";
import backend from "../Assets/backsvg.svg";
import Erp from "../Assets/erpsvg.svg";
import Mobile from "../Assets/mobilesvg.svg";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/hireshopfiy"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Shopify Developer</li>
                        </Link>
                      </div>

                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/hiremagento"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Magento Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/hiredrupal"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Drupal Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/opencart"} style={{textDecoration:"none",color:"black"}}>
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
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/flutter"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Flutter Developer</li>
                        </Link>
                      </div>

                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/kotlin"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Kotlin Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/swift"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Swift Developer</li>
                        </Link>
                      </div>

                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/ios"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Ios App Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/andriod"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Android App Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/ar"} style={{textDecoration:"none",color:"black"}}>
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
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/vuejs"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Vuejs Developer</li>
                        </Link>
                      </div>

                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/reactjs"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Reactjs Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/angular"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Angularjs Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"fabricjs"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Fabricjs Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/mean"}  style={{textDecoration:"none",color:"black"}}>
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
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/mean"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Mean Stack Developer</li>
                        </Link>
                      </div>

                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/net"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire .Net Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/asp"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Asp Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/laravel"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Laravel Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/nodejs"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Nodejs Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/django"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Django Developer</li>
                        </Link>
                      </div>
                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/pythone"} style={{textDecoration:"none",color:"black"}}>
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
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/hiresales"} style={{textDecoration:"none",color:"black"}}>
                          <li>Hire Salesforce Developer</li>
                        </Link>
                      </div>

                      <div className="uldiv">
                      <FiberManualRecordIcon className="circleicon" style={{height:'13px',width:'13px'}} />{" "}
                        <Link to={"/hireodoo"} style={{textDecoration:"none",color:"black"}}>
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
