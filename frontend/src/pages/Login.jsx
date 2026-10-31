import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setDone(true)
  }

  if (done) {
    return (
      <main className="page">
        <div className="auth-card">
          <h1>Demo login worked 👋</h1>
          <p>Real login arrives once we build the backend and database.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Welcome back</h1>

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

        <button type="submit" className="btn btn-lemon">Log in</button>

        <p className="auth-switch">
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </form>
    </main>
  )
}

export default Login