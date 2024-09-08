const setToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const deleteToken = () => {
  localStorage.removeItem("token"); //for logout
};

const checkToken = () => {
  const token = getToken();
  if (getToken) {
    return true;
  } else {
    return false;
  }
};
export { setToken, getToken, deleteToken, checkToken };
