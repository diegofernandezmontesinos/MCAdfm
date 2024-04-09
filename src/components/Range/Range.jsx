import React, { useState } from "react";
import "./Range.css";
import Slider from "react-slider";

function Range() {
  const [values, setValues] = useState([MIN, MAX]);
  const MIN = 100;
  const MAX = 15000;
  return (
    <>
      <div className="app">
        <div className="box">
          <h3>Price Range</h3>
          <div className={"value"}>$100 - $15000</div>
          <small>Current Range: $2325</small>
          <Slider className={"slider"} onChange={setValues} value={values} min={MIN} max={MAX} />
        </div>
      </div>
    </>
  );
}

export default Range;
