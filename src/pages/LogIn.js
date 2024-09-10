import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { login } from "../API/auth";

import UserContext from "../context/UserContext";
import { checkToken } from "../API/storage";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    mutate();
  };

  // if (user) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
        <div class="flex justify-center items-center h-screen bg-white">
          <div class="flex flex-col md:flex-row items-center">
            <img
              alt="bank logo"
              class="w-1/2 md:w-1/3"
              height="400"
              src="https://www.pngitem.com/pimgs/m/153-1531279_bank-building-icon-generic-monochrome-free-bank-logo.png"
              width="400"
            />
            <div class="w-full md:w-1/3 p-8">
              <h2 class="text-2xl font-bold text-green-600 mb-4">
                Log in to your account
              </h2>
              <p class="mb-4">
                If you do not have an account,
                <NavLink class="text-blue-500" to="#">
                  register here
                </NavLink>
              </p>
            </div>
            <form onSubmit={handleFormSubmit}>
              <h2>Username</h2>
              <input
                class="w-full p-2 mb-4 border border-gray-300 rounded"
                placeholder="Username"
                type="text"
              />

              <h2>Password</h2>
              <input
                class="w-full p-2 mb-4 border border-gray-300 rounded"
                placeholder="Password"
                type="password"
              />
              <p class="mb-4 text-right">
                <a class="text-blue-500" href="#">
                  Forgot password?
                </a>
              </p>
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2 rounded"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
