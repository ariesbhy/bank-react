import React, { useState } from "react";
import { register } from "../API/auth";
import { useMutation } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = React.useState();
  const [image, setImage] = React.useState();
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
  });

  const handleFormSubmit = (e) => {
    e.preventDefult();
    console.log(userInfo);
    handleRegister();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center">
        <img
          alt="bank logo"
          className="w-1/2 md:w-1/3"
          height="400"
          src="https://www.pngitem.com/pimgs/m/153-1531279_bank-building-icon-generic-monochrome-free-bank-logo.png"
          width="400"
        />
        <div className="w-full md:w-1/3 p-8">
          <h2 className="text-2xl font-bold text-navyblue mb-4">
            Register your account
          </h2>
          <p className="mb-4">
            If you do have an account,
            <NavLink className="text-blue-500" to="/login">
              login here
            </NavLink>
          </p>
          <form onSubmit={handleFormSubmit}>
            <h2>Username</h2>
            <input
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              placeholder="Username"
              type="text"
            />

            <h2>Password</h2>
            <input
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              placeholder="Password"
              type="password"
            />
            <div className="mb-4">
              <label classN="block mb-2">Upload a Profile Picture</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="file"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-2 rounded"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
