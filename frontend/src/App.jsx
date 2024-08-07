import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Landingpage from './components/Landingpage';


function App() {
  return (
    <>
       <Router>
        <Routes>
        <Route path="/" element={<Landingpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
