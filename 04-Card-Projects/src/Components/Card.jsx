import React from 'react'

function Card(props) {
  return (
    <>
        <div className="card">

          <div className="top">
            <img src={props.image} alt="img" />
            <button>Save</button>
          </div>

          <div className="center">
          <h3>{props.id}</h3>
          </div>

          <div className="bottom">
            <h2>{props.company}</h2>
            <p>{props.description}</p>
          
            <button>Buy</button>
          </div>

        </div>
    </>
  )
}

export default Card
