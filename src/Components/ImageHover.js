import React from "react";
import pe1 from "../Assets/pe1.png";
import pe2 from "../Assets/pe2.png";
import pe3 from "../Assets/pe3.png";
import pe4 from "../Assets/pe4.png";
import pe5 from "../Assets/pe5.png";
import "../Styles/newnew.css";
const ImageHover = () => {
  return (
    <div ClassName="container">
      <div ClassName="row">
        <div ClassName="col-md-2 col-sm-6">
          <div ClassName="box">
            <img src={pe1} />
            <div ClassName="box-content">
              <h3 ClassName="title">Williamson</h3>
              <span ClassName="post">Web designer</span>
            </div>
          </div>
        </div>
        <div ClassName="col-md-2 col-sm-6">
          <div ClassName="box">
            <img src={pe2} />
            <div ClassName="box-content">
              <h3 ClassName="title">Miranda Roy</h3>
              <span ClassName="post">Web designer</span>
            </div>
          </div>
        </div>
        <div ClassName="col-md-2 col-sm-6">
          <div ClassName="box">
            <img src={pe3} />
            <div ClassName="box-content">
              <h3 ClassName="title">Miranda Roy</h3>
              <span ClassName="post">Web designer</span>
            </div>
          </div>
        </div>
        <div ClassName="col-md-2 col-sm-6">
          <div ClassName="box">
            <img src={pe4} />
            <div ClassName="box-content">
              <h3 ClassName="title">Miranda Roy</h3>
              <span ClassName="post">Web designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHover;
