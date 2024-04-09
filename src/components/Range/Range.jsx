import React, { useState } from "react";
import "./Range.css";
import Slider from "react-slider";
import { Parameter } from "../../share/typeExercise";
import ReactSlider from "react-slider";
import Step from "../Steps/Steps";
import { Link } from "react-router-dom";

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
                // markClassName="example-mark"
                // trackClassName="example-track"
                defaultValue={0}
                thumbClassName={thumbGrabbed ? "thumb" : "thumbGrabbed"}
                // value={props.currentIndex}
                min={0}
                max={4}
                marks
                renderMark={(props) => {
                  return <span {...props} />;
                }}
                orientation="horizontal"
              />
              <Step />
            </>
          )}
          <div className="returnButtonContainer">
            <Link to={"/"}>
              <button className="returnButton">Return to home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Range;
