import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar'
import Home from './pages/home'
import Login from './pages/login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>} >
       <Route index element={<Home/>} />
       <Route path='login' element={<Login/>} />

      </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
