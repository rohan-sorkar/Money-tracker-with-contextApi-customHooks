import React, { useContext } from 'react'
import { AppContext } from '../../../state-provider/stateProvider';

const Balance = () => {
  const {totalIncome, totalExpense} = useContext(AppContext);
  return (
    <>
    <h3 className="mt-5 text-xl font-bold">Your Balance</h3>
      <p className="text-xl">${totalIncome - totalExpense}</p>
      <div className="flex justify-between shadow py-4 px-8 mt-6 rounded-2xl text-center divide-x-2 divide-slate-100">
        <div>
          <p className="text-sm font-bold text-gray-700">INCOME</p>
          <p className="text-lg">${totalIncome}</p>
        </div>
        <div className="pl-5 xs:pl-20">
          <p className="text-sm font-bold text-gray-700">EXPENSE</p>
          <p className="text-lg">${totalExpense}</p>
        </div>
      </div>
    </>
  )
}

export default Balance