import React, { useEffect, useState } from 'react'
import './Sign.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const Sign = ({userName,setuserName,Password,setPassword,data,setdata,navigate,userDetailsArray,setuserDetailsArray,mobilenumber,gmail,gender,age,profileImage,profileVideo,totalPosts,totalLikes,followers,likedPosts,dislikedPosts,commentedPosts,followedUsers,Notifications}) => {

    const [name,setname]=useState('')
    const [createPassword,setcreatePassword]=useState('')
    const [reEnterPassword,setreEnterPassword]=useState('')
    const [checker,setchecker] = useState(true)
    const [eye1,seteye1] = useState(true)
    const [eye2,seteye2] = useState(true)
    const [see1,setsee1] = useState(true)
    const [see2,setsee2] = useState(true)

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

    const handleForm=async(e)=>{
        e.preventDefault()
    if (createPassword === reEnterPassword)
        {
            setuserName(name)
            setPassword(createPassword)
            const id = userDetailsArray.length ? userDetailsArray[userDetailsArray.length-1].id + 1 : 1 ;
            const temp = {id:id,userName:name,password:createPassword,mobilenumber:mobilenumber,age:age,gmail:gmail,gender:gender,profileImage:profileImage,profileVideo:profileVideo}
            const updatedArray = [...userDetailsArray,temp]
            setuserDetailsArray(updatedArray)

        try{
            axios.post('https://covai-glimpse.onrender.com/app/signup',{
                    id,
                    name,
                    createPassword,
                    mobilenumber,
                    gender,
                    age,
                    gmail,
                    profileImage,
                    profileVideo,
                    followers,
                    likedPosts,
                    dislikedPosts,
                    commentedPosts,
                    followedUsers,
                    Notifications             
                })
                .then(res => { 
                        if (res.data === 'exist'){
                            alert('User already exist')
                        }
                        else if (res.data === 'not exist'){
                            setname('')
                            setcreatePassword('')
                            setreEnterPassword('')
                            navigate('/home')
                            alert('Thank you! You have been successfully signed up')
                        }
                })
                .catch(e => {
                    alert('Sorry! something went wrong')
                })

        }
        catch(e){
                    console.log(e)
        }
    }
    else {
        alert("Password doesn't match")
    }
}

const handleEye1 =(e)=>{
    e.preventDefault()
    seteye1(!eye1)
    setsee1(!see1)
}    
const handleEye2 =(e)=>{
    e.preventDefault()
    seteye2(!eye2)
    setsee2(!see2)
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
                        type={see1 ? 'password' : 'text'}
                        required
                    ></input>
                    <span className='eye1'>{eye1 ? <IoEyeOutline onClick={(e)=>{handleEye1(e)}}/> : <IoEyeOffOutline onClick={(e)=>{handleEye1(e)}} />}</span>
                    <label>ReEnter Password</label>
                    <input
                        value={reEnterPassword}
                        onChange={(e)=>{setreEnterPassword(e.target.value)}}
                        placeholder='Re-enter Password'
                        type={see2 ? 'password' : 'text'}
                        required
                    ></input>
                    <span className='eye2'>{eye2 ? <IoEyeOutline onClick={(e)=>{handleEye2(e)}}/> : <IoEyeOffOutline onClick={(e)=>{handleEye2(e)}} />}</span>
                    <button type='submit' className='signupButton'>Sign Up</button>
                </form>
                <p>Already have account? <Link to='/' className='Link'>Sign In</Link></p>
            </div>
            <p className='Agreement'>By clicking "Sign Up", you agree to our <Link to='/TermsAndConditions' className='Link' style={{color:'white',textDecoration:'underline'}}>Terms & Conditions</Link>. &copy;CopyRight by AG Devs.</p>
    </div>
  )
}

export default Sign