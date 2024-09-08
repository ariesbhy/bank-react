import instance from ".";
import { setToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  setToken(data.token);
  return data;
};

const register = async (userInfo) => {
  const formData = new formData(); // for upload photo folder
  for (const key in userInfo) {
    formData.append(userInfo[key]);
  }
  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formData
  );
  setToken(data.token);
  return data;
};

const myProfile = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};
const logout = () => {
  localStorage.removeItem("token");
};
const myTransactions = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};

export { login, register, myProfile, getAllUsers, myTransactions };
