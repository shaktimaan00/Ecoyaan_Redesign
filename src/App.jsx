import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
