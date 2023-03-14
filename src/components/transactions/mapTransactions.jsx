import React, { useContext } from "react";
import { AppContext } from "../../state-provider/stateProvider";
import Transaction from "./transaction";

const MapTransactions = () => {
  const {filteredTransactions, transactions} = useContext(AppContext);
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-7 mt-4">
      {transactions.length > 0 &&
        filteredTransactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
          />
        ))}
    </div>
  );
};

export default MapTransactions;
