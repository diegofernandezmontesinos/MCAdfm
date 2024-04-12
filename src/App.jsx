import { useState } from "react";
import "./App.css";
import Range from "./components/Range/Range";
import RangeNoLibrary from "./components/RangeNoLib/RangeNoLibrary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/LandingPage/landing";
import { Parameter } from "./share/typeExercise";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/sliderExercise1"
          element={<Range variant={Parameter.normal} />}
        />
        <Route
          path="/sliderExercise2"
          element={<Range variant={Parameter.fixed} />}
        />
        <Route path="/sliderInputExercise1" element={<RangeNoLibrary />} />
        <Route
          path="/sliderInputExercise2"
          element={<RangeNoLibrary />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
