import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">Opesora</div>
        <a href="/#features">Features</a>
        <a href="/#how-it-works">How it works</a>
        <a href="/#faq">FAQ</a>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </nav>
    </header>
  )
}

export default Navbar