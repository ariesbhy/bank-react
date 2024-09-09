import React from "react";
import Register from "./Register";

function Home() {
  return (
    <header className="masthead bg-primary text-green text-center">
      <div className="container d-flex align-items-center flex-column">
        <h1 className="masthead-heading text-uppercase mb-0">
          International Bank
        </h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
      </div>
    </header>
  );
}

export default Home;
