import React, { useContext } from "react";
import { RiDeleteBin4Line } from "react-icons/ri";
import { AppContext } from "../../state-provider/stateProvider";

const Transaction = ({ transaction }) => {
  const { selectTransaction, deleteTransaction } = useContext(AppContext);
  
  return (
    <div
      className={`shadow rounded-2xl py-3 px-4 border-r-8 ${
        transaction.isIncome ? "border-green-300" : "border-red-300"
      } w-full`}
    >
      <div className="flex items-center">
        <div
          onClick={() => selectTransaction(transaction?.id)}
          className="mr-4"
        >
          <input
            className="h-3 accent-teal-600 outline-teal-600 outline rounded"
            type="checkbox"
          />
        </div>
        <div className="w-full">
          <p className="text-center font-medium border shadow-sm mb-2">
            {transaction?.date.toLocaleString("en-US", { weekday: "long" })},{" "}
            {transaction?.date.toLocaleDateString()}
          </p>
          <div className="flex justify-between items-center">
            <p className="capitalize">{transaction?.title.slice(0, 10)}...</p>
            <div
              onClick={() => deleteTransaction(transaction.id)}
              className="cursor-pointer bg-red-100 px-2 py-2 rounded-full hover:bg-red-300 text-red-600"
            >
              <RiDeleteBin4Line />
            </div>
            <p>{transaction?.amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
