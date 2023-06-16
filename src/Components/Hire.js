import React from "react";
import "../Styles//Hire.css";
import Note from "../Assets/funtion.png"
import CV  from "../Assets/Group.png"
import Meeting from "../Assets/Group.png"
import Avatar from "../Assets/avatar.png"
import Remote from "../Assets/monitor.png" 
import Vector from "../Assets/Vector3.png"
const Hire = (props) => {
  return (
    <>
      <div className="rowheading  hirecontainer">
        <h2 className="pad2">{props.Text}</h2>
        <div className="row textcent">
          <div
            className="col textcent"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="ellipes">
              <img src={Note} />
            </div>
            <h4 className="pad">Share Requirements</h4>
          </div>
          <div className="col hiddenarrow" style={{ marginTop: "-100px" }}>
            <img src={Vector} className="arroww" />
          </div>
          <div
            className="col textcent"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="ellipes">
              <img src={CV} />
            </div>
            <h4 className="pad">Shortlist CVs</h4>
          </div>
          <div className="col hiddenarrow" style={{ marginTop: "-100px" }}>
            <img src={Vector} className="arroww" />
          </div>
          <div
            className="col textcent"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="ellipes">
              <img src={Meeting}/>
            </div>
            <h4 className="pad">Conduct Interviews</h4>
          </div>
          <div className="col hiddenarrow " style={{ marginTop: "-100px" }}>
            <img src={Vector} className="arroww" />
          </div>
          <div
            className="col textcent"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="ellipes">
              <img src={Avatar} />
            </div>
            <h4 className="pad">Select Shopify Experts</h4>
          </div>
          <div className="col hiddenarrow" style={{ marginTop: "-100px" }}>
            <img src={Vector} className="arroww " />
          </div>
          <div
            className="col textcent"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="ellipes">
              <img src={Remote}/>
            </div>
            <h4 className="pad">Remote Onboarding</h4>
          </div>
        </div>
        {/* <div className="row" style={{border:'1px solid black' ,height:'100px',paddingTop:'80px'}}>
           <div className="col textcent">
            <h4>Share Requirements</h4>
           </div>
           <div className="col textcent">
         
           </div>
           <div className="col textcent"   >
    <h4>Conduct Interviews</h4>
           </div>
           <div className="col textcent"   >
          <h4>Select Shopify Experts</h4>
           </div>
           <div className="col textcent">
           <h4>Remote Onboarding</h4>
           </div>
         </div> */}
      </div>
    </>
  );
};

export default Hire;
