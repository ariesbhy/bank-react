import React from "react";
import Register from "./Register";

const Home = () => {
  return (
    <div className="bg-white-900 text-rgb(83, 187, 106) min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-bold mb-8">International Bank</h1>

        <img
          className=""
          src="https://www.pngitem.com/pimgs/m/153-1531279_bank-building-icon-generic-monochrome-free-bank-logo.png"
          alt="bank-logo"
        />
      </div>
      <Register />
    </div>
  );
};

export default Home;
