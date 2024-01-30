import './App.css'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PostDetails from './components/PostDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  )
}

export default App
