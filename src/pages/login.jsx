import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('x')
    const handelLogin = ()=>{
        setError(email,password)
        console.log(email,password)
    }

  return (
    <div>
      <div className="login-box">
        <div className="login-left">
            <h1 className='login-text' >Log In<span className='dot' >.</span></h1>
            <div className="google-login">
                <div className="facebook">
                <h1><i className="bi bi-facebook"></i> Log in With Facebook</h1>
                </div>
                <div className="google">
                <h1><i className="bi bi-google"></i> Log in With Facebook</h1>
                </div>
            </div>
                <label htmlFor="email" >Email *</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" id='email' placeholder='Enter email' />
                 {error?"":<p className='error' >Please enter email</p>} 
                <label htmlFor="password" >Password *</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" id='password' placeholder='Enter a password' />
                {error?"":<p className='error' >Please enter Password</p>} 
                <button onClick={handelLogin} className='loginbtn' >Log in</button>
            
          
        </div>
        <div className="login-rigth">
            <div className="login-img">
            <img className='login-image' src='img/child.jpg' alt="" />
            </div>
        
        </div>
        
      </div>
    </div>
  )
}

export default Login
