import React from "react";
import Transaction from "./transaction";

const MapTransactions = (props) => {
  const { transactions, selectTransaction, deleteTransaction } = props;
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-7 mt-4">
      {transactions.length > 0 &&
        transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            selectTransaction={selectTransaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
    </div>
  );
};

export default MapTransactions;
