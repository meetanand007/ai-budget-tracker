import { useState } from 'react'
import './Transactions.css'

function Transactions() {
  const [transactions, setTransactions] = useState([])
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('expense')
  const [category, setCategory] = useState('Food')

  function handleSubmit(event) {
    event.preventDefault()

    const newTransaction = {
      id: Date.now(),
      description: description,
      amount: Number(amount),
      type: type,
      category: category,
    }

    setTransactions([newTransaction, ...transactions])
    setDescription('')
    setAmount('')
  }

  function handleDelete(id) {
    setTransactions(transactions.filter((t) => t.id !== id))
  }

  return (
    <main className="tx-page">
      <h1>Transactions</h1>

      <form className="tx-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What was it for?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Food</option>
          <option>Rent</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Salary</option>
          <option>Other</option>
        </select>
        <button type="submit" className="btn btn-lemon">Add</button>
      </form>

      <div className="tx-list">
        {transactions.length === 0 && (
          <p className="tx-empty">No transactions yet. Add your first one above.</p>
        )}

        {transactions.map((t) => (
          <div className={'tx-item ' + t.type} key={t.id}>
            <div>
              <strong>{t.description}</strong>
              <span>{t.category}</span>
            </div>
            <div className="tx-right">
              <strong>{t.type === 'income' ? '+' : '-'}₹{t.amount}</strong>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Transactions