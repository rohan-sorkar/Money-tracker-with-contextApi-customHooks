import React from 'react'
import AddTransactionForm from './addTransactionForm'

const AddTransaction = ({addTransaction}) => {
  return (
    <div>
      <h3 className="text-lg font-medium mt-5">Add new transaction</h3>
      <AddTransactionForm addTransaction={addTransaction}/>
    </div>
  )
}

export default AddTransaction