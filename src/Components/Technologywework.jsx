import React from 'react'

import js from "../Assets/js.png";
import php from "../Assets/php.png";
import microsoft from "../Assets/micro2.png";
import salesforce from "../Assets/sales2.png";
import odoo from "../Assets/odoo.png";
import netcore from "../Assets/netCore.png";

function Technologywework() {
  return (
    <div>
          <div className="container-icon">
      <h2>Technologies we work on</h2>
      <p>
        We use best-in-className tools, technologies, and modern approaches to
        help you stay ahead of your competitors.
      </p>
      <div className="icon-row">
        <img className="icon" src={salesforce} alt="Salesforce" />
        <img className="icon" src={microsoft} alt="Microsoft Dynamics 365" />
        <img className="icon" src={netcore} alt=".NET Core" />
        <img className="icon" src={js} alt="JavaScript" />
        <img className="icon" src={odoo} alt="Odoo" />
        <img className="icon" src={php} alt="PHP" />
      </div>
    </div>
    </div>
  )
}

export default Technologywework
