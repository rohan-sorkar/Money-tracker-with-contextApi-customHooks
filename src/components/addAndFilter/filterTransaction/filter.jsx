import React from "react";

const Filter = (props) => {
  const {
    deleteAll,
    deleteSelectedTransaction,
    searchTerm,
    searchInputChange,
    filterTerm,
    filterInputChange,
  } = props;
  
  return (
    <div className="mt-5 shadow p-4 rounded-xl">
      <input
        type="text"
        className="border outline-none rounded-xl py-2 px-4 border-purple-100 caret-purple-200 text-sm mb-2 w-full"
        placeholder="Search..."
        value={searchTerm}
        onChange={searchInputChange}
      />
      <div className="flex gap-2">
        <button
          onClick={() => filterInputChange("all")}
          className={`${
            filterTerm === "all" && "bg-gray-600 text-white"
          } border-2 border-gray-600 rounded-full py-1 px-2 xs:px-6 text-sm`}
        >
          All
        </button>
        <button
          onClick={() => filterInputChange("income")}
          className={`${
            filterTerm === "income" && "bg-gray-600 text-white"
          } border-2 border-gray-600 rounded-full py-1 px-2 xs:px-6 text-sm`}
        >
          Income
        </button>
        <button
          onClick={() => filterInputChange("expense")}
          className={`${
            filterTerm === "expense" && "bg-gray-600 text-white"
          } border-2 border-gray-600 rounded-full py-1 px-2 xs:px-6 text-sm`}
        >
          Expense
        </button>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={deleteSelectedTransaction}
          className="border-2 border-gray-600 rounded-full py-1 px-2 xs:px-6 bg-gray-200 transition text-red-500 font-bold"
        >
          Delete selected
        </button>
        <button
          onClick={deleteAll}
          className="border-2 border-gray-600 rounded-full py-1 px-2 xs:px-6 bg-gray-200 transition text-red-500 font-bold"
        >
          Delete all
        </button>
      </div>
    </div>
  );
};

export default Filter;
