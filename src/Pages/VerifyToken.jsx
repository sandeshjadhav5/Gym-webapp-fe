import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import http from "../configs/http";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VerifyToken = () => {
  const [token, settoken] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isTokenVerified = localStorage.getItem("isTokenVerified") || false;
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };
    console.log(payload);
    if (payload) {
      handleLogin(payload);
    }
  };

  //save new user details function
  const handleLogin = async (payload) => {
    setLoading(true);
    try {
      const response = await http.get(`/users/verify?token=${token}`);
      console.log("res is", response);
      if (response.status === 200) {
        console.log("success", response.data.token);
        setTimeout(()=>{
            localStorage.setItem("isTokenVerified",true)
        },[2000])
      }
    
      toast.success('Token Verified', {
        position: "bottom-center"
      })
      setLoading(false);
    } catch (err) {
        toast.error(err?.response?.data?.message || "An error occurred");
      console.log(err);
      setLoading(false);
      localStorage.setItem("isTokenVerified",false)
    }
  };
  useEffect(() => {
    if (isTokenVerified) {
      navigate("/login");
    }
  }, [isTokenVerified]);
  return (
    <div>
      <Navbar />
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Fitness Plus
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
               Verify Token
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Token
                  </label>
                  <input
                    onChange={(e) => settoken(e.target.value)}
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="abcdexfg"
                    required
                  />
                </div>
                
                <input
                  type="submit"
                  class="w-full bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded"
                />
               
              </form>
            </div>
          </div>
        </div>
      </section>{" "}
      <div><Toaster/></div>
    </div>
  );
};

export default VerifyToken;
