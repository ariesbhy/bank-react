import instance from ".";

const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  return data;
};

const register = async (userInfo) => {
  const { data } = await instance.post("/auth/register", userInfo);
  return data;
};

const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};
const logout = () => {
  localStorage.removeItem("token");
};

export { login, register, me, getAllUsers };
