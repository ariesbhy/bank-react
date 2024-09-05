import React, { useState } from "react";
import BankItem from "../components/BankItem";
import { getAllBanks } from "../API/banks";
import { useQuery } from "@tanstack/react-query";
import AddBank from "../components/AddBank";

const Banks = () => {
  const {
    data: banks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["banks"],
    queryFn: getAllBanks,
  });

  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);

  const bankList = banks?.map((bank) => <BankItem key={bank._id} {...bank} />);
  return (
    <div className="p-5 min-h-screen bg-gray-900">
      {/* Add note button */}
      <div className="mb-5">
        <button
          onClick={onOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Add Bank
        </button>
      </div>
      {/* Note list */}
      <div className="flex flex-wrap gap-3 ">{bankList}</div>

      {/* Add note modal */}
      <AddBank show={show} onClose={onClose} onSave={() => {}} />
    </div>
  );
};

export default Banks;
