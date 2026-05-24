import React from 'react'
import './App.css'

const App = () => {
const [name, setName]   = React.useState("")
const [email, setEmail] = React.useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
   
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' onChange={(e)=>{
          setName(e.target.value)
        }}/>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <input type="email" placeholder='Enter your email'
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        />
        <input type="password" placeholder='Enter your password'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
