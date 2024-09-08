import React from "react";
import { getAllUsers } from "../API/auth";

const UserList = () => {
  const displayUsers = users.map((user) => {
    return <users />;
  });
  return <div className="">{displayUsers}</div>;
};

export default UserList;
