import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { checkToken, getToken } from "./API/storage";
import User from "./pages/Users";
import UserContext from "./context/UserContext";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (checkToken()) {
      setUser(true);
    }
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono">
        <h1 className="text-white">the user state is {`${user}`}</h1>
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
