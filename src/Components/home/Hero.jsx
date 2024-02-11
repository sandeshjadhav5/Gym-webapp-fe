import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: "75vh",
      }}
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://www.daimlertruck.com/fileadmin/_processed_/2/e/csm_bharatbenz-truck-range_d970ec1a05.webp')",
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
                Online Roads Goods Transportaion System
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                At ORGTS, we revolutionize the way businesses transport goods by
                providing a seamless and efficient platform for booking trucks
                online.
              </p>
            </div>{" "}
            <div className="m-8">
              {" "}
              <Link
                href="/bookride"
                className=" bg-green-600 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded"
              >
                Book a Ride
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
