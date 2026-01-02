// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import ResultsPage from './components/ResultsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results/:range" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App