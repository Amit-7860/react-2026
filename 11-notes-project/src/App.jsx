import React from 'react'
import './App.css'

const App = () => {

  const [title, setTitle] = React.useState('')
  const [details, setDetails] = React.useState('')

  const [tasks, setTasks] = React.useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
const copyTasks = [...tasks]

    copyTasks.push({title, details})
    setTasks(copyTasks)

    console.log(copyTasks)

    setTitle('')
    setDetails('')  
  }
  return (
    <div className="  p-2 bg-red-100  w-screen m-2 justify-space-between lg:flex rounded-md ">
      <form action="" className='flex flex-col justify-space-between align-items-space-between gap-3 p-5' onSubmit={handleSubmit}>

        <input type="text" placeholder='Enter task' className='p-5 border border-gray-300 rounded-md bg-green-50 w-90'
        onChange={(e) => setTitle(e.target.value)} value={title}
        required/>

        <textarea type="text" placeholder='Enter details' name="" id=""  className='p-2 border border-gray-300 rounded-md bg-green-50 w-full' 
        onChange={(e) => setDetails(e.target.value)} value={details}
        required/>
        
        <button type='submit' className='bg-blue-500 text-white p-5 rounded-md'>Add Task</button>
      </form>
     <div className='flex flex-wrap mt-6 h-full gap-3 overflow-auto items-start bg-green-400 p-5 rounded-md'>
      {tasks.map((task, index) => (
        <div key={index} className='p-5 rounded-md w-52 h-40 mb-3 bg-cover bg-center' style={{backgroundImage: 'url("https://tse4.mm.bing.net/th/id/OIP.TBsyGGWx0FvbGkpyYt4BIAHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3")'}}>
          <div className=' p-4 rounded h-full'>
            <h1 className='text-sm text-green mb-1'>Task {index + 1}</h1>
            <h2 className='text-xl font-bold mb-2 text-green'>{task.title}</h2>
            <p className='whitespace-pre-wrap break-words text-green text-sm'>{task.details}</p>
          </div>
        </div>
      ))}
      </div>
    </div>

 
  )
}
export default App  