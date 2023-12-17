import React, { useEffect, useState } from 'react'
import './Sign.css'
import axios from 'axios'

const Sign = ({userName,setuserName,Password,setPassword,data,setdata,navigate,userDetailsArray,setuserDetailsArray,mobilenumber,gmail,gender,age,profileImage,profileVideo}) => {

    const [name,setname]=useState('')
    const [createPassword,setcreatePassword]=useState('')
    const [reEnterPassword,setreEnterPassword]=useState('')
    const [checker,setchecker] = useState(true)

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
                    profileVideo                
                })
                .then(res => { 
                        if (res.data === 'exist'){
                            setname('')
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