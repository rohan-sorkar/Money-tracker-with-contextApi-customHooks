import { useState } from "react";
import AddAndFilterContainer from "../addAndFilter";
import TransactionContainer from "../transactions";
import ContainerWrapper from "./containerWrapper";
import { fakeTransactions } from "../../constants";
import Swal from "sweetalert2";

const Container = () => {
  const [transactions, setTransactions] = useState([...fakeTransactions]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("all");

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
    Swal.fire({
      target: "#custom-target",
      customClass: {
        container: "position-absolute",
      },
      toast: true,
      position: "top",
      icon: "success",
      title: "Your transaction has been saved",
      showConfirmButton: false,
      timer: 2000,
    });
  };

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

  const selectTransaction = (id) => {
    const transaction = transactions.find((item) => item.id === id);
    transaction.isSelect = !transaction.isSelect;
    setTransactions([...transactions]);
  };

  const deleteTransaction = (id) => {
    Swal.fire({
      target: "#custom-target",
      customClass: {
        container: "position-absolute",
      },
      toast: true,
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      position: "top",
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredTransactions = transactions.filter(
          (item) => item.id !== id
        );
        setTransactions([...filteredTransactions]);
        Swal.fire({
          text: "Your File Has been Deleted",
          icon: "success",
          timer: 2000,
          target: "#custom-target",
          customClass: {
            container: "position-absolute",
          },
          toast: true,
          position: "top",
        });
      }
    });
  };

  const deleteAll = () => {
    Swal.fire({
      target: "#custom-target",
      customClass: {
        container: "position-absolute",
      },
      toast: true,
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      position: "top",
    }).then((result) => {
      if (result.isConfirmed) {
        setTransactions([]);
        Swal.fire({
          text: "Your Transactions has been removed",
          icon: "success",
          timer: 2000,
          target: "#custom-target",
          customClass: {
            container: "position-absolute",
          },
          toast: true,
          position: "top",
        });
      }
    });
  };

  const deleteSelectedTransaction = () => {
    Swal.fire({
      target: "#custom-target",
      customClass: {
        container: "position-absolute",
      },
      toast: true,
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      position: "top",
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredTransactions = transactions.filter(
          (item) => !item.isSelect
        );
        setTransactions(filteredTransactions);
        Swal.fire({
          text: "Your selected Transactions has been removed",
          icon: "success",
          timer: 2000,
          target: "#custom-target",
          customClass: {
            container: "position-absolute",
          },
          toast: true,
          position: "top",
        });
      }
    });
  };

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

  return (
    <ContainerWrapper>
      <AddAndFilterContainer
        addTransaction={addTransaction}
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        deleteAll={deleteAll}
        deleteSelectedTransaction={deleteSelectedTransaction}
        searchTerm={searchTerm}
        searchInputChange={searchInputChange}
        filterTerm={filterTerm}
        filterInputChange={filterInputChange}
      />
      <TransactionContainer
        transactions={filteredTransactions}
        selectTransaction={selectTransaction}
        deleteTransaction={deleteTransaction}
      />
    </ContainerWrapper>
  );
};

export default Container;
