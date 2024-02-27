import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bmi from "./BMI";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<Bmi />} />
      </Routes>
    </div>
  );
}

export default Allroutes;
