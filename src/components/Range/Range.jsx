import React, { useState } from "react";
import "./Range.css";
import Slider from "react-slider";

function Range() {
  const MIN = 100;
  const MAX = 15000;
  const [values, setValues] = useState([MIN, MAX]);

  console.log(values);
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
            thumbClassName="thumb"
            min={MIN}
            max={MAX}
          />
        </div>
      </div>
    </>
  );
}

export default Range;
