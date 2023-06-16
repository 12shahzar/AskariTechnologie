import React from "react";
import "../Styles//Hirebutton.css";
const Hirebutton = (props) => {
  return (
    <>
      <div className="centerbutton">
        <button type="button" class="btn hirebut">
          {props.text}
        </button>
      </div>
    </>
  );
};

export default Hirebutton;
