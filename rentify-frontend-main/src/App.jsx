import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import RoutesMain from './RoutesMain';
import Footer from './components/layout/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Navbar />
        <RoutesMain />
        <Footer />
    </Router>
  )
}

export default App
