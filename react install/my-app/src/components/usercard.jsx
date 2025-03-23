import React from 'react'
import muzu from '../assets/muzu.png'
import "./usercard.css"

const Usercard = (props) => {
  return (
    <div className='usercontainer' style={props.style}>
      <p id='user-title'>{props.name}</p>
      <img id='user-img' src={muzu} alt="muz" /> 
      <p id='user-des'>{props.desc}</p>     
    </div>
  )
}

export default Usercard
