import instance from "../API";

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

const updateBank = async (noteInfo) => {
  const { data } = await instance.put(`/notes/${noteInfo._id}`, noteInfo);
  return data;
};

const deleteBank = async (noteId) => {
  const { data } = await instance.delete(`/notes/${noteId}`);
  return data;
};

export { getAllBanks, getBank, createBank, updateBank, deleteBank };
