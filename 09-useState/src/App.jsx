import React, { useState } from 'react'
import './App.css'

const App = () => {

 const [a, setA] = useState([10,20,30]);

 const btnClicked=()=>{
  const newA = a.map((item, index) => {
    if (index === 0) return item + 5;
    if (index === 1) return item - 5;
    if (index === 2) return item * 2;
    return item;
  });
  newA.push(Math.floor(Math.random() * 100));
  console.log(newA);

  setA(newA);
}

return (
  <div>
    <h1>Value of a is : {a[0]}, Age: {a[2]} {a.join(', ')}</h1>
    <h1>Updated Values: {a.join(', ')}</h1>
    <button onClick={() => setA([...a.slice(0, 2), a[2] - 1])} className='D'>Decrease</button>
    <button onClick={() => setA([...a.slice(0, 2), a[2] - 5])} className='R'>Reduce By 5</button>
    <button onClick={() => setA([...a.slice(0, 2), a[2] + 1])} className='I'>Increase</button>
    <button onClick={() => setA([...a.slice(0, 2), a[2] + 5])} className='J'>Jump by 5</button>
    <button onClick={btnClicked}>Update User</button>
  </div>
)
}

export default App
