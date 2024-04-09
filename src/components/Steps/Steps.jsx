import React from "react";
import "./Steps.css";
const steps = ["1.99", "5.99", "30.99", "50.99", "70.99"];

const Step = () => {
  return (
    <div className="steps-container">
      {steps.map((step, index) => {
        return (
          <div className="steps-item">
            <h5>{step}</h5>
          </div>
        );
      })}
    </div>
  );
};
export default Step;
