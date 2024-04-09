import React from "react";
import './Range.css';

function Range() {
  return (
    <>
      <div className="app">

      <div className="box">
        <h3>Price Range</h3>
        <div>
          <span className="value">$100</span> -   <span className="value">$15000</span>
        </div>
        <small>Current Range: $2325</small>
      </div>
      </div>
    </>
  );
}

export default Range;
