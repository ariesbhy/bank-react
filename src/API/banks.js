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
  const { data } = await instance.put(`/banks/${bankInfo._id}`, noteInfo);
  return data;
};

const deleteBank = async (bankId) => {
  const { data } = await instance.delete(`/banks/${bankId}`);
  return data;
};

export { getAllBanks, getBank, createBank, updateBank, deleteBank };
