import React, { useEffect, useState } from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";

function Landing() {
  const [color, setColor] = useState(true);
  useEffect(() => {
    setInterval(() => setColor(false), 1500);
  }, []);
  return (
    <>
      <div className="landingBodyContainer">
        <h2 className={color ? "openingColor" : "ContinueColor"}>
          Welcome to this test made by{" "}
        </h2>
        {!color && <h2 className="ContinueColor">Diego Fernández</h2>}
        <div className="landingPageContainer">
          <div className="textContainer">Select an option:</div>
          <div className="landingPageButtonContainer">
            <Link to={"/sliderExercise1"}>
              <button className="landingpageButton">
                {" "}
                Go to Slider Exersice 1
              </button>
            </Link>
            <Link to={"/sliderExercise2"}>
              <button className="landingpageButton">
                {" "}
                Go to Slider Exersice 2
              </button>
            </Link>
          </div>
        </div>
        <div className="landingPageContainer">
          <div className="textContainer">Select an option:</div>
          <div className="landingPageButtonContainer">
            <Link to={"/sliderInputExercise1"}>
              <button className="landingpageButton">
                {" "}
                Go to Slider Exersice 1
              </button>
            </Link>
            <Link to={"/sliderInputExercise2"}>
              <button className="landingpageButton">
                {" "}
                Go to Slider Exersice 2
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
