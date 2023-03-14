import React from "react";
import AddTransactionForm from "./addTransaction";
import FilterTransaction from "./filterTransaction";

const AddAndFilterContainer = (props) => {
  const {
    addTransaction,
    totalIncome,
    totalExpense,
    deleteAll,
    deleteSelectedTransaction,
    searchTerm,
    searchInputChange,
    filterTerm,
    filterInputChange,
  } = props;
  return (
    <div className="flex gap-20">
      <FilterTransaction
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        deleteAll={deleteAll}
        deleteSelectedTransaction={deleteSelectedTransaction}
        searchTerm={searchTerm}
        searchInputChange={searchInputChange}
        filterTerm={filterTerm}
        filterInputChange={filterInputChange}
      />
      <AddTransactionForm addTransaction={addTransaction} />
    </div>
  );
};

export default AddAndFilterContainer;
