import React, { useEffect, useState } from 'react'
import './Sign.css'
import axios from 'axios'

const Sign = ({setprofileName,setdata,navigate}) => {

    const [name,setname]=useState('')
    const [createPassword,setcreatePassword]=useState('')
    const [reEnterPassword,setreEnterPassword]=useState('')

 /*useEffect(()=>{
    fetch('http://localhost:3001/dashboard/user', {
            method:"GET",
        })
        .then(async (res)=> await res.json())
        .then( (data)=>{
             console.log(data , "userData")
             setdata(data.data)
         
        })
 })*/

    const handleForm=(e)=>{
        e.preventDefault()
        console.log('hi')
        if (createPassword === reEnterPassword)
        {
            axios.post('http://localhost:3001/app/signup',{
                name:name,
                password:createPassword
            })
            .then(res => console.log('server is working'));
            setprofileName(name)
            setname('')
            setcreatePassword('')
            setreEnterPassword('')
            navigate('/home')
        }
        else {
            alert("Password doesn't match")
        }
    }
    

  return (
    <div className='Sign'>
            <img src={require('.././images/userIcon.png')} alt='Signup'></img>
            <div className='formElement1'>
                <form className='SignupForm' onSubmit={(e)=>{handleForm(e)}}>
                    <label>Username</label>
                    <input
                        value={name}
                        onChange={(e)=>{setname(e.target.value)}}
                        placeholder='Username'
                        required
                    ></input>
                    <label>Create Password</label>
                    <input
                        value={createPassword}
                        onChange={(e)=>{setcreatePassword(e.target.value)}}
                        placeholder='Create Password'
                        type='password'
                        required
                    ></input>
                    <label>Mobile Number</label>
                    <input
                        value={reEnterPassword}
                        onChange={(e)=>{setreEnterPassword(e.target.value)}}
                        placeholder='Re-enter Password'
                        type='password'
                        required
                    ></input>
                    <button type='submit' className='signupButton'>Sign Up</button>
                </form>
                <p>Already have account? <a href='/'>Sign In</a></p>
            </div>
            <p className='Agreement'>By clicking "Sign Up", you agree to our <a href='/TermsAndConditions' style={{color:'white',textDecoration:'underline'}}>Terms & Conditions</a>. &copy;CopyRight by AG Devs.</p>
    </div>
  )
}

export default Sign