import { createContext } from "react";
import { useFilter } from "../hooks/useFilter";
import { useTransactions } from "../hooks/useTransaction";

export const AppContext = createContext();

const StateProvider = ({children}) => {
    const {transactions, addTransaction, deleteTransaction, deleteAll, selectTransaction, deleteSelectedTransaction} = useTransactions();
    const {searchTerm, filterTerm, searchInputChange, filterInputChange, filteredTransactions, totalIncome, totalExpense} = useFilter(transactions);

    const contextValue = {transactions, addTransaction, deleteTransaction, deleteAll, selectTransaction, deleteSelectedTransaction, searchTerm, filterTerm, searchInputChange, filterInputChange, filteredTransactions, totalIncome, totalExpense}

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export default StateProvider;