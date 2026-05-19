import React from 'react'
import './App.css'

const App = () => {

const changeUser = (elem) => {
  console.log(elem.target.value)
}

  return (
    <div>
      <h1>Hello , Amit</h1>
      <button >Change User</button> 
    <br />
      <input type="text" placeholder="Enter new user name" onChange={function (elem){
        console.log(elem.target.value)
      }} />

      <div onMouseEnter={() => console.log("Mouse moved")} className="Box">
        Hello
      </div>
    </div>
  )
}

export default App
