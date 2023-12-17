import React, { useEffect, useState } from 'react'
import './Signin.css'
import axios from 'axios'


const Signin = ({setuserName,navigate,}) => {

    
    const [name,setname]=useState('')
    const [enterPassword,setenterPassword]=useState('')

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

    const handleForm=async (e)=>{
        e.preventDefault()  
    try{
          await axios.post('http://localhost:3001/login/oneUser',{name,enterPassword})
          .then(res =>{
            if (res.data === 'exist'){
                setuserName(name)
                setname('')
                setenterPassword('')
                navigate('/home')
                alert('Successfully Verified')
            }
            else if (res.data === 'not exist'){
                alert('Incorrect username / password')
                setname('')
                setenterPassword('')
            }
          })
          .catch(e=>{
                alert('Sorry! something went wrong')
          })
    }
    catch(e){
        alert('error')
    }
}
    
  return (
    <div className='Signin'>
        <img src={require('.././images/userIcon.png')} alt='Signin'></img>
            <div className='formElement2'>
                <form className='SigninForm' onSubmit={(e)=>{handleForm(e)}}>
                    <label>Username</label>
                    <input
                        value={name}
                        onChange={(e)=>{setname(e.target.value)}}
                        placeholder='Username'
                        required
                    ></input>
                    <label>Enter Password</label>
                    <input
                        value={enterPassword}
                        onChange={(e)=>{setenterPassword(e.target.value)}}
                        placeholder='Enter Password'
                        type='password'
                        required
                    ></input>
                    <button type='submit' className='signinButton'>Sign In</button>
                </form>
                <p>Create account? <a href='/signup'>Sign Up</a></p>
            </div>
            <p className='Agreement'>By clicking "Sign In", you agree to our <a href='/TermsAndConditions' style={{color:'white',textDecoration:'underline'}}>Terms & Conditions</a>. &copy;CopyRight by AG Devs.</p>
    </div>
  )
}

export default Signin