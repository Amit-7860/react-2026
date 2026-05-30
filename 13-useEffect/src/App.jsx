import React from 'react'
import { useEffect } from 'react'
import './App.css'

const App = () => {
 const [num, setNum] = React.useState(0)
 const [count, setCount] = React.useState(0)

useEffect(function(){
      console.log('Num is Changed')
    },[num])

    useEffect(function(){
      console.log('Count is Changed')
    },[count])

  return (

    


    <>

    <div>
      useEffect Hook
    </div>
    <h1>{num}</h1>
    <h2>{count}</h2>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setNum(num + Math.floor(Math.random() * 100))}>+</button>
    
    </> 
    
  
  )
}

export default App
