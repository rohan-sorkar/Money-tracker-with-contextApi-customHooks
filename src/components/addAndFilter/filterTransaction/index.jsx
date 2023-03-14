import React from "react";
import Balance from "./balance";
import Filter from "./filter";

const FilterTransaction = (props) => {
  const {
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
    <div>
      <Balance totalIncome={totalIncome} totalExpense={totalExpense} />
      <Filter
        deleteAll={deleteAll}
        deleteSelectedTransaction={deleteSelectedTransaction}
        searchTerm={searchTerm}
        searchInputChange={searchInputChange}
        filterTerm={filterTerm}
        filterInputChange={filterInputChange}
      />
    </div>
  );
};

export default FilterTransaction;
