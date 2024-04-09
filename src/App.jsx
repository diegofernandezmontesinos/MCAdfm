import { useState } from "react";
import "./App.css";
import Range from "./components/Range/Range";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/LandingPage/landing";
import { Parameter } from "./share/typeExercise";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const _handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  const _handleNext = (currentIndex) => {
    setCurrentIndex(currentIndex + 1);
  };

  const _handleComplete = () => {};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/sliderExercise1"
          element={
            <Range
              onChange={_handleIndexChange}
              currentIndex={currentIndex}
              variant={Parameter.normal}
            />
          }
        />
        <Route
          path="/sliderExercise2"
          element={
            <Range
              onChange={_handleIndexChange}
              currentIndex={currentIndex}
              variant={Parameter.fixed}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
