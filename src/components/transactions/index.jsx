import React from "react";
import MapTransactions from "./mapTransactions";

const TransactionContainer = (props) => {
  const { transactions, selectTransaction, deleteTransaction } = props;
  return (
    <div className="mb-10">
      <h3 className="text-lg font-medium mt-6">History</h3>
      <hr className="border-[1px] border-gray-300 w-20" />
      <hr className="mt-1 border-[1px] border-gray-300 w-28" />
      {transactions.length === 0 && (
        <h2 className="mt-5 text-xl">There is no Transactions😥</h2>
      )}
      <MapTransactions
        transactions={transactions}
        selectTransaction={selectTransaction}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default TransactionContainer;
