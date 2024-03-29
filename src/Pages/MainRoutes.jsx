import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bmi from "./BMI";
import Login from "./Login";
import SignUp from "./SignUp";
import Excercises from "./Excercises";
import VerifyToken from "./VerifyToken";
import Dashboard from "./Dashboard";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verifytoken" element={<VerifyToken />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/excercises" element={<Excercises />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default Allroutes;
