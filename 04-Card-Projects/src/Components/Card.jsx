import React from 'react'

function Card(props) {
  return (
    <>
        <div className="card">

          <div className="top">
            <img src="https://hdqwalls.com/wallpapers/amazon-4k-logo-qhd.jpg" alt="img" />
            <button>Save</button>
          </div>

          <div className="center">
            <h3></h3>
          </div>

          <div className="bottom">
            <h2>Amazon</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
          
            <button>Apply</button>
          </div>

        </div>
    </>
  )
}

export default Card
