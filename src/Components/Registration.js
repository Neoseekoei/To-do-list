import React from 'react'
// import Login from './Login'
import './Registration.css'

const Registration = () => {
  return (
    <div className='registration-container'>
      <h1 className='head'>Registration</h1>
      <form className='register'>
        <input type="text" placeholder="Usename"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm Password"/>
        <button className='signup' type='submit'>Sign Up</button>
      </form>
      {/* <Login/> */}
    </div>
  )
}

export default Registration
