import instance from ".";

const getAllBanks = async () => {
  const { data } = await instance.get("/banks");
  return data;
};

const getBank = async (bankUserName) => {
  const { data } = await instance.get(`/banks/${bankUserName}`);
  return data;
};

const createBank = async (bankProfile) => {
  const { data } = await instance.post("/banks", bankProfile);
  return data;
};

const updateBank = async (bankInfo) => {
  const { data } = await instance.put(
    `/banks/"/mini-project/api/auth/profile"`,
    bankInfo
  );
  return data;
};

export { getAllBanks, getBank, createBank, updateBank };
