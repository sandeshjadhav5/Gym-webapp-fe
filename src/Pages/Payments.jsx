import React, { useState } from "react";
import Navbar from "../Components/Navbar"; // Assuming the correct path to Navbar component
import Footer from "../Components/Footer"; // Assuming the correct path to Footer component

const Payments = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPaymentUI, setShowPaymentUI] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [otp, setOtp] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');

  const handleSignUp = () => {
    setShowModal(true);
  };

  const handlePayment = () => {
    setShowModal(false);
    setShowPaymentUI(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentUI(false);
    setShowSnackBar(true);
    // Generate a random OTP
    const randomOTP = Math.floor(1000 + Math.random() * 9000);
    setOtp(randomOTP);
  };

  const handleOTPVerification = () => {
    setShowSnackBar(false);
    // Verify the entered OTP
    if (otp == enteredOTP) {
      alert('Payment Successful!');
      localStorage.setItem("isPaymentDone",true)
    } else {
      alert('Invalid OTP. Please try again.');
      window.location.reload()
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          Fitness Plus Plans
        </h1>
        <div className="grid grid-cols-2 gap-8">
        <div className="border rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-4">Monthly Plan</h2>
  <p className="text-gray-700 mb-4">
    Get access to all facilities and classes for one month. Save 20%!
  </p>
  <div className="mb-4">
    <img
      src="https://images.unsplash.com/photo-1434596922112-19c563067271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bSUyMG1lbWJlcnNoaXB8ZW58MHx8MHx8fDA%3D" // Replace "path_to_your_image.jpg" with the actual path to your image
      alt="Yearly Plan"
      className="w-full rounded-lg"
    />
  </div>
  <div className="flex justify-between items-center mt-6">
    <span className="text-lg font-bold">Rs. 1999</span>
    <button
      onClick={handleSignUp}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    >
      Sign Up
    </button>
  </div>
</div>
          
          <div className="border rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-4">Yearly Plan</h2>
  <p className="text-gray-700 mb-4">
    Get access to all facilities and classes for one year. Save 20%!
  </p>
  <div className="mb-4">
    <img
      src="https://images.unsplash.com/photo-1596357395104-ba989e72b5ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltJTIwbWVtYmVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D" // Replace "path_to_your_image.jpg" with the actual path to your image
      alt="Yearly Plan"
      className="w-full rounded-lg"
    />
  </div>
  <div className="flex justify-between items-center mt-6">
    <span className="text-lg font-bold">Rs. 20999</span>
    <button
      onClick={handleSignUp}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    >
      Sign Up
    </button>
  </div>
</div>

        </div>

        {showModal && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
              <p className="mb-4">Make Payment</p>
              <button
                onClick={handlePayment}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Proceed
              </button>
            </div>
          </div>
        )}

        {showPaymentUI && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg max-w-xl">
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              <div className="mb-4">
                <label
                  htmlFor="cardNumber"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Debit Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your debit card number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="upiNumber"
                  className="block text-gray-700 font-medium mb-1"
                >
                  UPI Number (Optional)
                </label>
                <input
                  type="text"
                  id="upiNumber"
                  className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your UPI number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="bankDetails"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Bank Details
                </label>
                <input
                  type="text"
                  id="bankDetails"
                  className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your bank details"
                />
              </div>
              <button
                onClick={handlePaymentSuccess}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mt-4 w-full"
              >
                Complete Payment
              </button>
            </div>
          </div>
        )}

        {showSnackBar && (
          <div className="fixed bottom-0 right-0 m-4 bg-green-500 text-white p-4 rounded-lg">
            <p>OTP: {otp}</p>
            <input
  type="text"
  placeholder="Enter OTP"
  className="mt-2 text-black px-4 py-2 rounded-lg"
  value={enteredOTP}
  onChange={(e) => setEnteredOTP(e.target.value)}
/>

            <button
              onClick={handleOTPVerification}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-2"
            >
              Verify OTP
            </button>
          </div>
        )}
      </div>
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />

      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Payments;
