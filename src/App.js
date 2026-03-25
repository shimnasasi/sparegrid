import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/about" element={<h1>About</h1>}></Route> */}
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App