import React from 'react'
import { Link } from 'react-router-dom'



const Login = () => {
  return (
    <div className='login-container'>
      <h1>Login</h1>
     
      <form>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button className='login' type='submit'> <Link to="/Home">Login</Link></button>
      </form>
      <Link to="./Registration" className='enter'>--SignUp--</Link>
      
    </div>
  )
}

export default Login