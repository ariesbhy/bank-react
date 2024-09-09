import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Users from "./pages/Users";
import Transaction from "./pages/Transactions";
import Profile from "./pages/Profile";
import Login from "./pages/LogIn";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/Home",
        element: <Profile />,
      },
      {
        path: "/Profile",
        element: <Transaction />,
      },
      {
        path: "/Users/user_id",
        element: <Users />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
