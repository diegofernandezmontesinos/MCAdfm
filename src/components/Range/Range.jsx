import React, { useState } from "react";
import "./Range.css";
import Slider from "react-slider";
import { Parameter } from "../../share/typeExercise";
import ReactSlider from "react-slider";

function Range(props) {
  const MIN = 0;
  const MAX = 15000;
  const [values, setValues] = useState([MIN, MAX]);
  const [thumbGrabbed, setThumbGrabbed] = useState(false);

  return (
    <>
      <div className="app">
        <div className="box">
          <h3>Price Range</h3>
          {props.variant == Parameter.normal ? (
            <>
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
            </>
          ) : (
            <>
              <ReactSlider
                className="vertical-slider"
                markClassName="example-mark"
                // onChange={onChange}
                trackClassName="example-track"
                defaultValue={0}
                value={props.currentIndex}
                min={0}
                max={4}
                marks
                renderMark={(props) => {
                  if (props.key < props.currentIndex) {
                    props.className = "example-mark example-mark-completed";
                  } else if (props.key === props.currentIndex) {
                    props.className = "example-mark example-mark-active";
                  }
                  return <span {...props} />;
                }}
                orientation="horizontal"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Range;
