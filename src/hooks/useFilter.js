import { useState } from "react";

export const useFilter = (transactions) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("all");

  const searchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const performSearch = () => {
    return transactions.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
  };

  const searchedTransactions = performSearch();

  const filterInputChange = (filterText) => {
    setFilterTerm(filterText);
  };

  const performFilter = (transactions) => {
    if (filterTerm === "income") {
      return transactions.filter((item) => item.isIncome);
    } else if (filterTerm === "expense") {
      return transactions.filter((item) => !item.isIncome);
    } else {
      return transactions;
    }
  };

  const filteredTransactions = performFilter(searchedTransactions);

  const { totalIncome, totalExpense } = transactions.reduce(
    (acc, cur) => {
      if (cur.isIncome) {
        acc.totalIncome += cur.amount;
      } else {
        acc.totalExpense += cur.amount;
      }

      return acc;
    },
    { totalIncome: 0, totalExpense: 0 }
  );

  return {
    searchTerm, filterTerm, searchInputChange, filterInputChange, filteredTransactions, totalIncome, totalExpense
  }
};
