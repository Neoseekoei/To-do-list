import React from 'react'
// import Login from './Login'
import './Registration.css'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div className='registration-container'>
      <h1 className='head'>Registration</h1>
      <form className='register'>
        <input type="text" placeholder="Usename" id='Username' required/>
        <input type="email" placeholder="Email" id='Email' required/>
        <input type="password" placeholder="Password" id='Password' required/>
        <input type="password" placeholder="Confirm Password" id='confirm Password' required/>
        <button className='signup' type='submit'> <Link to="/Home">Sign Up</Link></button>
      </form>
      {/* <Login/> */}
    </div>
  )
}

export default Registration
