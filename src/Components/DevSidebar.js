import React from "react";
import "../Styles/Hearder.css";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import Software from "../Assets/Frame.png";
import App from "../Assets/AppDevelopment.png";
import Salesforce from "../Assets/salesforce.png";
import Ecom from "../Assets/Ecomm1.png";
import Custom from "../Assets/custom.png";
import Erp from "../Assets/erp.png";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Elogo from "../Assets/ecomlogo.png";
import { Link } from "react-router-dom";

const DevSidebar = () => {
  const abbas = () => {
    const butt = document.getElementById("first1");
    butt.style.display = "block";
    const butt2 = document.getElementById("second1");
    butt2.style.display = "none";
    const butt3 = document.getElementById("third1");
    butt3.style.display = "none";
    const butt4 = document.getElementById("fourth1");
    butt4.style.display = "none";
    const butt5 = document.getElementById("fifth1");
    butt5.style.display = "none";
    const side = document.getElementById("ecommerce1");
    side.style.backgroundColor = "#0659A4";
    side.style.color = "white";
    const change = document.getElementById("app");
    change.style.backgroundColor = "#f5f5ef";
    change.style.color = "black";
    const change1 = document.getElementById("erp");
    change1.style.backgroundColor = "#f5f5ef";
    change1.style.color = "black";
    const change2 = document.getElementById("salesforce");
    change2.style.backgroundColor = "#f5f5ef";
    change2.style.color = "black";
    const change3 = document.getElementById("custom");
    change3.style.backgroundColor = "#f5f5ef";
    change3.style.color = "black";
  };
  const abbas2 = () => {
    const butt = document.getElementById("first1");
    butt.style.display = "none";
    const butt2 = document.getElementById("second1");
    butt2.style.display = "block";
    const butt3 = document.getElementById("third1");
    butt3.style.display = "none";
    const butt4 = document.getElementById("fourth1");
    butt4.style.display = "none";
    const butt5 = document.getElementById("fifth1");
    butt5.style.display = "none";
    const side = document.getElementById("ecommerce1");
    side.style.backgroundColor = "#f5f5ef";
    side.style.color = "black";
    const change = document.getElementById("app");
    change.style.backgroundColor = "#0659A4";
    change.style.color = "white";
    const change1 = document.getElementById("erp");
    change1.style.backgroundColor = "#f5f5ef";
    change1.style.color = "black";
    const change2 = document.getElementById("salesforce");
    change2.style.backgroundColor = "#f5f5ef";
    change2.style.color = "black";
    const change3 = document.getElementById("custom");
    change3.style.backgroundColor = "#f5f5ef";
    change3.style.color = "black";
  };
  const abbas3 = () => {
    const butt = document.getElementById("first1");
    butt.style.display = "none";
    const butt2 = document.getElementById("second1");
    butt2.style.display = "none";
    const butt3 = document.getElementById("third1");
    butt3.style.display = "block";
    const butt4 = document.getElementById("fourth1");
    butt4.style.display = "none";
    const butt5 = document.getElementById("fifth1");
    butt5.style.display = "none";
    const side = document.getElementById("ecommerce1");
    side.style.backgroundColor = "#f5f5ef";
    side.style.color = "black";
    const change = document.getElementById("app");
    change.style.backgroundColor = "#f5f5ef";
    change.style.color = "black";
    const change1 = document.getElementById("erp");
    change1.style.backgroundColor = "#0659A4";
    change1.style.color = "white";
    const change2 = document.getElementById("salesforce");
    change2.style.backgroundColor = "#f5f5ef";
    change2.style.color = "black";
    const change3 = document.getElementById("custom");
    change3.style.backgroundColor = "#f5f5ef";
    change3.style.color = "black";
  };
  const abbas4 = () => {
    const butt = document.getElementById("first1");
    butt.style.display = "none";
    const butt2 = document.getElementById("second1");
    butt2.style.display = "none";
    const butt3 = document.getElementById("third1");
    butt3.style.display = "none";
    const butt4 = document.getElementById("fourth1");
    butt4.style.display = "block";
    const butt5 = document.getElementById("fifth1");
    butt5.style.display = "none";
    const side = document.getElementById("ecommerce1");
    side.style.backgroundColor = "#f5f5ef";
    side.style.color = "black";
    const change = document.getElementById("app");
    change.style.backgroundColor = "#f5f5ef";
    change.style.color = "black";
    const change1 = document.getElementById("erp");
    change1.style.backgroundColor = "#f5f5ef";
    change1.style.color = "black";
    const change2 = document.getElementById("salesforce");
    change2.style.backgroundColor = "#0659A4";
    change2.style.color = "white";
    const change3 = document.getElementById("custom");
    change3.style.backgroundColor = "#f5f5ef";
    change3.style.color = "black";
  };
  const abbas5 = () => {
    const butt = document.getElementById("first1");
    butt.style.display = "none";
    const butt2 = document.getElementById("second1");
    butt2.style.display = "none";
    const butt3 = document.getElementById("third1");
    butt3.style.display = "none";
    const butt4 = document.getElementById("fourth1");
    butt4.style.display = "none";
    const butt5 = document.getElementById("fifth1");
    butt5.style.display = "block";
    const side = document.getElementById("ecommerce1");
    side.style.backgroundColor = "#f5f5ef";
    side.style.color = "black";
    const change = document.getElementById("app");
    change.style.backgroundColor = "#f5f5ef";
    change.style.color = "black";
    const change1 = document.getElementById("erp");
    change1.style.backgroundColor = "#f5f5ef";
    change1.style.color = "black";
    const change2 = document.getElementById("salesforce");
    change2.style.backgroundColor = "#f5f5ef";
    change2.style.color = "black";
    const change3 = document.getElementById("custom");
    change3.style.backgroundColor = "#0659A4";
    change3.style.color = "white";
  };
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-4 HireDevCont">
            <div className="row Techhead">Development</div>
            <div className="row sidebarItems" onCLinkck={abbas} id="ecommerce1">
              Ecommerce
            </div>
            <div className="row sidebarItems" onCLinkck={abbas2} id="app">
              App Development
            </div>
            <div className="row sidebarItems" onCLinkck={abbas3} id="erp">
              CRM & ERP
            </div>
            <div
              className="row sidebarItems"
              onCLinkck={abbas4}
              id="salesforce"
            >
              Salesforce
            </div>
            <div className="row sidebarItems" onCLinkck={abbas5} id="custom">
              Custom
            </div>
          </div>
          <div className="col-8">
            <h1 id="first1" className="">
              {" "}
              <div className="container gred">
                <div className="row divHeader">
                  <h3 className="ecommerceHeading">Ecommerce</h3>
                  <p>
                    Sell faster and better with a comprehensive eCommerce site
                    <i class="fa fa-cart-plus" aria-hidden="true"></i>
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="">
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/shopifydevelopment"}>Shopify</Link>
                      </div>

                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/magentodevelopment"}>Magento</Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link to={"/woocommerce"}>Woocommerce</Link>
                      </div>
                    </ul>
                  </div>
                  <div className="col">
                    <img src={Ecom} className="navimg" />
                  </div>
                </div>
              </div>
            </h1>

            <h1 id="second1" className="hideOptions">
              {" "}
              <div className="container gred">
                <div className="row divHeader">
                  <h3 className="MobileHeading">App Development</h3>
                  <p>
                    Leverage mobile accessibiLinkty with blazing-fast
                    appLinkcations
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="">
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link>Cross-Platform Enterprise App Development</Link>
                      </div>

                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link>Mobile UI/UX Design</Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link>App Porting</Link>
                      </div>
                    </ul>
                  </div>
                  <div className="col">
                    <img src={App} className="navimg" />
                  </div>
                </div>
              </div>
            </h1>

            <h1 id="third1" className="hideOptions">
              {" "}
              <div className="container gred">
                <div className="row divHeader">
                  <h3 className="FrontHeading">CRM & ERP</h3>
                  <p>
                    Seize the capabiLinkties of CRM & ERP for faster development
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="">
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link>Cross-Platform Enterprise App Development</Link>
                      </div>

                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link>Mobile UI/UX Design</Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link>App Porting</Link>
                      </div>
                    </ul>
                  </div>
                  <div className="col">
                    <img src={Erp} className="navimg" />
                  </div>
                </div>
              </div>
            </h1>

            <h1 id="fourth1" className="hideOptions">
              <div className="container gred">
                <div className="row divHeader">
                  <h3 className="backendHeading">Salesforce</h3>
                  <p>
                    Strengthen customer relationships with Salesforce cloud
                    solutions
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="">
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link>Cross-Platform Enterprise App Development</Link>
                      </div>

                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link>Mobile UI/UX Design</Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link>App Porting</Link>
                      </div>
                    </ul>
                  </div>
                  <div className="col">
                    <img src={Salesforce} className="navimg" />
                  </div>
                </div>
              </div>
            </h1>

            <h1 id="fifth1" className="hideOptions">
              {" "}
              <div className="container gred">
                <div className="row divHeader">
                  <h3 className="erpHeading">Custom</h3>
                  <p>
                    Create custom solutions for your unique project requirements
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="">
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link>Cross-Platform Enterprise App Development</Link>
                      </div>

                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link>Mobile UI/UX Design</Link>
                      </div>
                      <div className="uldiv">
                        <PanoramaFishEyeIcon className="circleicon" />{" "}
                        <Link>App Porting</Link>
                      </div>
                    </ul>
                  </div>
                  <div className="col">
                    <img src={Custom} className="navimg" />
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

export default DevSidebar;
