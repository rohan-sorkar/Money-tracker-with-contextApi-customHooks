import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import Swal from "sweetalert2";

const initialState = { title: "", amount: "", isIncome: true };

const AddTransactionForm = ({ addTransaction }) => {
  const [formState, setFormState] = useState({ ...initialState });

  const inputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]:
        event.target.name === "amount"
          ? Number(event.target.value)
          : event.target.name === "isIncome"
          ? Boolean(event.target.value)
          : event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!formState.title || !formState.amount) {
      Swal.fire({
        title: "Your Input Field is Empty",
        color: 'red',
        timer: 3000,
        toast: true,
        position: "top",
      });
      return;
    }
    addTransaction({
      id: uuidV4(),
      isSelect: false,
      date: new Date(),
      ...formState,
    });
    setFormState({ ...initialState });
  };

  return (
    <form onSubmit={handleFormSubmit} className="shadow rounded-2xl mt-4 p-5">
      <div className="flex flex-col">
        <label className="font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          className="border outline-none rounded-xl py-2 px-4 border-purple-100 caret-purple-200 text-sm mb-2"
          placeholder="Enter title..."
          name="title"
          onChange={inputChange}
          value={formState.title}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-medium text-gray-700 mb-1">Amount</label>
        <input
          type="number"
          className="border outline-none rounded-xl py-2 px-4 border-purple-100 caret-purple-200 text-sm mb-2"
          placeholder="Amount..."
          name="amount"
          onChange={inputChange}
          value={formState.amount}
        />
      </div>
      <div className="flex gap-4 mb-2">
        <input
          type="radio"
          className="w-4 accent-green-400"
          name="isIncome"
          onChange={inputChange}
          value="truthy"
          checked={formState.isIncome === true}
        />
        <p className="text-slate-700 text-lg font-medium">Income</p>
      </div>
      <div className="flex gap-4 mb-2">
        <input
          type="radio"
          className="w-4 accent-red-400"
          name="isIncome"
          onChange={inputChange}
          value=""
          checked={formState.isIncome === false}
        />
        <p className="text-slate-700 text-lg font-medium">Expense</p>
      </div>
      <button
        type="submit"
        className="bg-gray-600 text-white w-full rounded-full py-1 mt-2 hover:bg-gray-700 transition"
      >
        Add transaction
      </button>
    </form>
  );
};

export default AddTransactionForm;
