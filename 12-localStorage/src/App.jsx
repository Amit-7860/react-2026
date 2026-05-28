import React from 'react'

const App = () => {



 const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  console.log(await response.json())
 }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
