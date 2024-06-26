import React, { useState } from "react";
import SimWork from "../Components/charts/SimWork";
import Bmichart from "../Components/charts/BmiChart";
import MacroChart from "../Components/charts/MacroChart";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const initmacro = {
  title: "",
  protine: 0,
  fat: 0,
  carbs: 0,
};
export default function Bmi() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [ybmi, setYBmi] = useState(0);
  //---
  const [food, setFood] = useState("");
  const [qty, setQty] = useState(1);
  const [marcores, setmacrores] = useState(initmacro);
  const handlesubmit = (e) => {
    e.preventDefault();
    let h = +height * +height;
    h = h * 0.304 * 0.304;
    let bmi = +weight / h;
    setYBmi(bmi);
  };

  const handlemacros = (e) => {
    e.preventDefault();
    console.log(food, qty);
    let obj = {
      food,
      qty,
    };
    console.log(obj, "macrodata");
    axios
      .get(`https://weary-ruby-coat.cyclic.app/macro?food=${food}&qty=${qty}`)
      .then((res) => setmacrores(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          {" "}
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-20 w-auto"
                src="https://www.shutterstock.com/image-vector/indikator-bmi-on-white-background-260nw-2100889945.jpg"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                BMI CALCULATOR
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" onSubmit={handlesubmit}>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Weight in KG
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="weight"
                      type="number"
                      value={weight}
                      placeholder="Enter Weight"
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div className=" items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900 "
                    >
                      Height in Feet
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Enter Height"
                      id="password"
                      name="height"
                      type="number"
                      value={height}
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Calculate BMI
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="">
          <Bmichart ybmi={ybmi} />
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <div className="">
            {" "}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-20 w-auto"
                  src="https://lowcarbyum.com/wp-content/uploads/2022/11/KETO-PERCENTAGES.png"
                  alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  MACRONUTRIENTS CALCULATOR
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" onSubmit={handlemacros}>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Choose your Food
                    </label>
                    <div className="mt-2">
                      <select
                        className="border-2 border-black-500 py-2 px-5"
                        onChange={(e) => setFood(e.target.value)}
                        value={food}
                      >
                        <option>Select Foods</option>
                        <option value={"apple"}>Apple</option>
                        <option value={"banana"}>Banana</option>
                        <option value={"egg"}>Egg</option>
                        <option value={"darkchocolate"}>Dark Chocolate</option>
                        <option value={"tofu"}>Tofu</option>
                        <option value={"chapati"}>Chapati</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className=" items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900 "
                      >
                        No of Quantity
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        placeholder="Enter Height"
                        id="password"
                        name="height"
                        type="number"
                        value={qty}
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setQty(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Calculate MACROS
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="">
            {/* <Bmichart ybmi={ybmi} height={height} weight={weight} /> */}
          </div>
        </div>
        <div>
          <MacroChart marcores={marcores} food={food} />
        </div>
      </div>
      <SimWork />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 w-5/6 mx-auto gap-4 mt-5">
          <div className="hover:bg-grey">
            <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/02/frogjump-1455820924.gif" />
          </div>
          <div className="hover:bg-grey">
            <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/12/bandoneleghiphinge-1480689468.gif?resize=640:*" />
          </div>
          <div className="hover:bg-grey">
            <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/12/bandpullapart-1480689234.gif?resize=640:*" />
          </div>
          <div className="hover:bg-grey">
            <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/12/bandsplitthruster-1480692778.gif?resize=640:*" />
          </div>
        </div>
      </div>
      {/* <PushUp /> */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 w-5/6 mx-auto gap-4 mt-5">
          <div className="hover:bg-grey">
            <img src="https://hips.hearstapps.com/hmg-prod/images/pushup-1462808858.gif" />
          </div>
          <div className="hover:bg-grey">
            <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/04/tpushup-1461693226.gif" />
          </div>
          <div className="hover:bg-grey">
            <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/supermandeadstoptosuperman-1472153653.gif" />
          </div>
          <div className="hover:bg-grey">
            <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/pushupandrow-1457101819.gif" />
          </div>
        </div>
      </div>
      {/* <GirlsEx /> */}
      <Footer />
    </div>
  );
}
