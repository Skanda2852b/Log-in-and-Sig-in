import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {auth} from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import './login.css'

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth,email,password)
            console.log('login successfully')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="email">
                Email:
                <input type="text" name="" id="" onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label htmlFor="Password">
                Password:
                <input type="password" name="" id="" onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <button type='submit'>Login</button><br /><br />
            <p>Dont have acc? <Link id='link' to='/signup' >Register</Link></p>
        </form>
    </div>
  )
}

export default Login