import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bmi from "./BMI";
import Login from "./Login";
import SignUp from "./SignUp";
import Excercises from "./Excercises";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/excercises" element={<Excercises />} />
      </Routes>
    </div>
  );
}

export default Allroutes;
