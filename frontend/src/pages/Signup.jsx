import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Auth.css'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setError('')
    setDone(true)
  }

  if (done) {
    return (
      <main className="page">
        <div className="auth-card">
          <h1>You're in, {name}! 🎉</h1>
          <p>This is a demo for now. The account becomes real once we build the backend.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Create your account</h1>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="btn btn-lemon">Sign up</button>
      </form>
    </main>
  )
}

export default Signup