import React from 'react'
import axios from 'axios'

const App = () => {
const [data, setData] = React.useState([])


 const getData = async () => {
      const response = await axios.get('https://picsum.photos/v2/list')
      setData(response.data)
 }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' , backgroundColor: '#f0f0f0', padding: '20px'}}>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.download_url} alt={item.author}  style={{width: '300px', height: '300px'}}/>
            <h1>{item.author}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
