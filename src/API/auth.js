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

const logout = () => {
  localStorage.removeItem("token");
};
const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};

const myTransactions = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};
const myDeposit = async () => {
  const { data } = await instance.put("/mini-project/api/transactions/deposit");
  return data;
};

const myWithdraw = async () => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/withdraw"
  );
  return data;
};
const transferToaccount = async () => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/transfer/<username> "
  );
  return data;
};

export {
  login,
  register,
  myProfile,
  myTransactions,
  myDeposit,
  myWithdraw,
  transferToaccount,
  getAllUsers,
};
