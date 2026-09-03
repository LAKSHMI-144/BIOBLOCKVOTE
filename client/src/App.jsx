import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Vote from './pages/Vote'
import Results from './pages/Results'
import BlockchainStatus from './pages/BlockchainStatus'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/register', label: 'Register' },
  { to: '/vote', label: 'Vote' },
  { to: '/results', label: 'Results' },
  { to: '/blockchain-status', label: 'Blockchain Status' },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block" aria-label="BioBlockVote brand">
          <div className="brand-mark">B</div>
          <div className="brand-copy">
            <span className="brand-title">BioBlockVote</span>
            <span className="brand-subtitle">
              Privacy-Preserving Biometric E-Voting
            </span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/results" element={<Results />} />
          <Route path="/blockchain-status" element={<BlockchainStatus />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
