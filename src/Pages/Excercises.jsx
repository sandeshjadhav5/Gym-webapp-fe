import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Chest from "../Components/Excercises/Chest";
import Arms from "../Components/Excercises/Arms";
import Shoulders from "../Components/Excercises/Shoulders";
import Back from "../Components/Excercises/Back";
import Legs from "../Components/Excercises/Legs";
import Footer from "../Components/Footer";

const Excercises = () => {
  const [selectedPart, setSelectedPart] = useState(null);

  const renderComponent = () => {
    switch (selectedPart) {
      case "chest":
        return <Chest />;
      case "arms":
        return <Arms />;
      case "shoulders":
        return <Shoulders />;
      case "back":
        return <Back />;
      case "legs":
        return <Legs />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="m-6 grid grid-cols-1 md:grid-cols-5 gap-4 justify-center">
        <div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          onClick={() => setSelectedPart("chest")}
        >
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Chest
            </h5>
          </div>
        </div>
        <div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          onClick={() => setSelectedPart("arms")}
        >
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Arms
            </h5>
          </div>
        </div>
        <div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          onClick={() => setSelectedPart("shoulders")}
        >
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Shoulders
            </h5>
          </div>
        </div>
        <div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          onClick={() => setSelectedPart("back")}
        >
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Back
            </h5>
          </div>
        </div>
        <div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          onClick={() => setSelectedPart("legs")}
        >
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Legs
            </h5>
          </div>
        </div>
      </div>
      <br />
      {renderComponent()}
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Excercises;
