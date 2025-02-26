import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import UserPage from './pages/UserPage'
import CustomerPage from './pages/CustomerPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li><Link to="/users">Kullanıcı İşlemleri</Link></li>
            <li><Link to="/customers">Müşteri İşlemleri</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/customers" element={<CustomerPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
