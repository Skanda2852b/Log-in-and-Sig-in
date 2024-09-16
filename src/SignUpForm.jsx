import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './signup.css'

const SignUpForm = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth,email,password)
            console.log('account created')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSubmit}>
            <h2>Sign-Up</h2>
            <label htmlFor="email">
                Email:
                <input type="text" name="" id="" onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label htmlFor="Password">
                Password:
                <input type="password" name="" id="" onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <button type='submit'>SignUp</button><br /><br />
            <p>Alread y registered? <Link id='link' to='/login'>Login</Link></p>
        </form>
    </div>
  )
}

export default SignUpForm