import instance from ".";

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  return data;
};

const register = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    userInfo
  );
  return data;
};

const profile = async (userInfo) => {
  const { data } = await instance.get("/mini-project/api/auth/me", userInfo);
  return data;
};
