import React from 'react'

function Card(props) {
  return (
    <>
      <div className="Parent">
      <div className="Card">
       <img src="https://plus.unsplash.com/premium_photo-1736338574510-11a82f432258?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       <h1>{props.user} and his age is {props.age}</h1>
       <p>Lorem ipsum dolor sit amet.</p>
      </div>
      </div>
    </>
  )
}

export default Card
