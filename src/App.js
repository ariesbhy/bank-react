import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { getToken } from "./API/storage";
import User from "./pages/Users";
import UserContext from "./context/UserContext";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(true);
    }
  });
  return (
    <UserContext.Provider value={(User, setUser)}>
      <div className="App font-mono">
        <h1 className="text-white">the user state is {`${User}`}</h1>
        <Navbar />
        <Outlet />
        <Register />
      </div>
    </UserContext.Provider>
  );
}

export default App;
