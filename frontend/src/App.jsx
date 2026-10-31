import { Routes, Route } from 'react-router-dom'
import Aurora from './components/ui/Aurora'
import MarketingLayout from './layouts/MarketingLayout'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Transactions from './pages/Transactions'

function App() {
  return (
    <>
      <Aurora />
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="/transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </>
  )
}

export default App