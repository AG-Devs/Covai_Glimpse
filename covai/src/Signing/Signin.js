import React, { useEffect, useState } from 'react'
import './Signin.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const Signin = ({setuserName,navigate,}) => {

    
    const [name,setname]=useState('')
    const [enterPassword,setenterPassword]=useState('')
    const [eye,seteye] = useState(true)
    const [see,setsee] = useState(true)

 /*useEffect(()=>{
    fetch('https://covai-glimpse.onrender.com/dashboard/user', {
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
          await axios.post('https://covai-glimpse.onrender.com/login/oneUser',{name,enterPassword})
          .then(res =>{
            if (res.data === 'exist'){
                setuserName(name)
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

const handleEye =(e)=>{
    e.preventDefault()
    seteye(!eye)
    setsee(!see)
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
                        type={see ? 'password' : 'text'}
                        required
                    ></input>
                    {eye ? <IoEyeOutline onClick={(e)=>{handleEye(e)}}/> : <IoEyeOffOutline onClick={(e)=>{handleEye(e)}} />}
                    <button type='submit' className='signinButton'>Sign In</button>
                </form>
                <p>Create account? <Link to='/signup' className='Link'>Sign Up</Link></p>
            </div>
            <p className='Agreement'>By clicking "Sign In", you agree to our <Link to='/TermsAndConditions' className='Link' style={{color:'white',textDecoration:'underline'}}>Terms & Conditions</Link>. &copy;CopyRight by AG Devs.</p>
    </div>
  )
}

export default Signin