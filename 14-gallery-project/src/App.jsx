import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    .then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
  }

  useEffect(() => {
    getData()
  }, [index])

  return (


    <div className='   bg-red-100 mt-2.5  p-4 rounded-lg shadow-lg'>

      
      
      <div className='flex flex-wrap gap-4 justify-center'>
        {data.map((item) => (
          <div key={item.id}>
            <a href={item.download_url} target="_blank" rel="noopener noreferrer"> 
              <div className='w-64 h-64 overflow-hidden rounded-lg shadow-lg mb-5'>
                <img  src={`https://picsum.photos/id/${item.id}/400/400`} alt={item.author} className='w-full h-full object-cover rounded-lg' loading="lazy" />
              </div>
            </a>
            <h1 className='text-center mt-1 text-2xl font-extrabold text-black'>{item.author}</h1>
          </div>
        ))}

      </div>

      <div className='flex justify-center mt-4 gap-4'>
        <button onClick={() => setIndex(index - 1)} disabled={index === 1} className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed'>
          Previous
        </button>
        <span className='text-xl font-bold text-gray-700'>Page {index}</span>
        <button onClick={() => setIndex(index + 1)} className='px-4 py-2 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600'>
          Next
        </button>
      </div>
      
    </div>
  )
}

export default App
