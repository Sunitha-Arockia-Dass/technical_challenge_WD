import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SinglePhone from './components/SinglePhone'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} /> 
    </Routes>
       
    </>
  )
}

export default App
