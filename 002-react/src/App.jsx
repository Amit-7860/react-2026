import React from 'react'
import './App.css'
import Card from './component/card.jsx'
import Navbar from './component/Navbar.jsx'
function App() {
  return (
    <>
      <div className='card'>
        <h1>Hello World</h1>
      </div>
        <Card />
        <Card /><Card /><Card /><Card /><Card />
        <Navbar />
    </>
  )
}

export default App
