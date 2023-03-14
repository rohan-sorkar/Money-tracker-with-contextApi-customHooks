import { useState } from "react";
import Swal from "sweetalert2";
import {fakeTransactions} from '../constants';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([...fakeTransactions]);

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

  return {
    transactions,
    addTransaction,
    selectTransaction,
    deleteTransaction,
    deleteAll,
    deleteSelectedTransaction
  }
};
