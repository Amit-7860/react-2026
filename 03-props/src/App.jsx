import React from 'react'
import './App.css'
import Card from './component/card.jsx'
function App() {
  return (
    <><div className="Parent">
      <Card user="John Doe" age={30} />
      <Card user="Jane Smith" age={25} />
    </div></>
  )
}

export default App
