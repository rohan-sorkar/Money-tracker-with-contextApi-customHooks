import AddTransactionForm from "./addTransaction";
import FilterTransaction from "./filterTransaction";

const AddAndFilterContainer = () => {
  return (
    <div className="flex gap-20">
      <FilterTransaction />
      <AddTransactionForm />
    </div>
  );
};

export default AddAndFilterContainer;
