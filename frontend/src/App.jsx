import { Routes, Route } from 'react-router-dom'
import Aurora from './components/ui/Aurora'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Transactions from './pages/Transactions'

function App() {
  return (
    <div>
      <Aurora />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App