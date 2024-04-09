import React, { useState } from "react";
import "./Range.css";
import Slider from "react-slider";

function Range(variant) {
  const MIN = 0;
  const MAX = 15000;
  const [values, setValues] = useState([MIN, MAX]);
  const [thumbGrabbed, setThumbGrabbed] = useState(false);

  return (
    <>
      <div className="app">
        <div className="box">
          <h3>Price Range</h3>
          <div className={"value"}>
            ${values[0]} - ${values[1]}
          </div>
          <small>Current Range: ${values[1] - values[0]}</small>
          <Slider
            className={"slider"}
            onChange={setValues}
            value={values}
            thumbClassName={thumbGrabbed ? "thumb" : "thumbGrabbed"}
            min={MIN}
            max={MAX}
            onClick={() => setThumbGrabbed(!thumbGrabbed)}
          />
        </div>
      </div>
    </>
  );
}

export default Range;
