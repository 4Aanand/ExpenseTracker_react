import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './expenseData'
import { useLocalStorage } from './hooks/useLocalStorage'
import BillSplitter from './components/BillSplitter'

function App() {
  const [expense, setExpense] = useLocalStorage('expense',{
    title: '',
    category: '',
    amount: '',
    name: '',
  })
  const [expenses, setExpenses] = useLocalStorage('expenses',expenseData)
  
  const [editingRowId, setEditingRowId] = useLocalStorage('editingRowId', '')

  return (
    <main>
      <div className='Header'>
        <div className="image">
          <img className='spend' src="https://cdn-icons-png.freepik.com/256/10758/10758836.png?semt=ais_white_label" alt="" />
        </div>
      <h1><span className='first'>Expense</span> <span className='second'>Tracker</span></h1>
      </div>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpense={setExpense}
          setExpenses={setExpenses}
          setEditingRowId={setEditingRowId}
        />
      </div>
        <BillSplitter/>
    </main>
  )
}

export default App
