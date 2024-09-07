import React, { useState } from "react";
import { register } from "../API/auth";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
  });

  const handleFormSubmit = (e) => {
    e.preventDefult();
    console.log(userInfo);
    mutate();
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-3xl text-rgb(83, 187, 106) font-semibold mb-6">
          Register Your Account
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <div className="mb-4">
              <label
                htmlFor="Username"
                className="block text-black text-sm font-medium mb-2"
              >
                Username
              </label>

              <input
                type="text"
                id="Username"
                name="Username"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-black text-sm font-medium mb-2"
                >
                  Password
                </label>
                <label
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="image"
                  className="block text-black text-sm font-medium mb-2"
                >
                  Upload Profile Picture
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleFormSubmit}
                  type="submit"
                  className="px-4 py-2 bg-rgb(83, 187, 106) text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
