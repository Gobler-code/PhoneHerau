<<<<<<< HEAD
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
=======

function App() {


  return (
    <>

    </>
>>>>>>> 4e719b683dd2ff406222b091d32ed0ef12692c55
  )
}

export default App