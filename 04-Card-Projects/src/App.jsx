import React from 'react'
import './App.css'
import Card from './Components/Card'
function App() {

  const arr = [1,2,3,4,5,6,7,8,9]
  return (
    <>

    
      <div className="parent">
       {arr.map((item) => {
        return <Card key={item} />
       })}
        
      </div>
    </>
  )
}

export default App
