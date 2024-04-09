import React from "react";
import Range from "../Range/Range";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div>Select an option:</div>
     <Link to={'/sliderExercise1'}>
     <button> Go to Slider Exersice 1</button>
     </Link>
     <Link to={'/sliderExercise2'}>
     <button> Go to Slider Exersice 2</button>
     </Link>
    </>
  );
}

export default Landing;
