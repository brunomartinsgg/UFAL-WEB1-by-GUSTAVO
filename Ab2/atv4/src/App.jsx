import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { FaChartBar, FaCog, FaUser } from 'react-icons/fa'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="menu">
        <Link to="/" className="menu-item">
          <FaChartBar className="menu-icon" />
          <span>Dashboard</span>
        </Link>

        <Link to="/settings" className="menu-item">
          <FaCog className="menu-icon" />
          <span>Settings</span>
        </Link>

        <Link to="/profile" className="menu-item">
          <FaUser className="menu-icon" />
          <span>Profile</span>
        </Link>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App

