import React, { useEffect, useState } from "react";
import { myProfile } from "../API/auth";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/mini-project/api/auth/me")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
      <img
        src={user.image || "https://placehold.co/200x200"}
        alt="User profile"
        className="w-40 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{user.username}</h2>
      <p className="text-gray-700 mb-4">Balance: {user.balance}</p>
      <p className="text-gray-500 mb-2">Upload a Profile Picture</p>
      <div className="flex items-center justify-center mb-4">
        <label className="bg-gray-800 text-white px-4 py-2 rounded-l cursor-pointer">
          CHOOSE FILE
          <input type="file" className="hidden" />
        </label>
        <span className="bg-gray-200 px-4 py-2 rounded-r">No file chosen</span>
      </div>
      <button className="bg-gray-200 px-4 py-2 rounded">Save</button>
    </div>
  );
};

export default Profile;
