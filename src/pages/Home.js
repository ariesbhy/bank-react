import React from "react";

const Home = () => {
  const nameBank = "International Bank";
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-bold mb-8">{nameBank} </h1>

        <img
          className=""
          src="https://www.pngitem.com/pimgs/m/153-1531279_bank-building-icon-generic-monochrome-free-bank-logo.png"
          alt="bank-logo"
        />
      </div>
    </div>
  );
};

export default Home;
