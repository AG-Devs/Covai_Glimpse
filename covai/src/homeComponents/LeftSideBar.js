import React, { useState,useEffect} from 'react'
import './LeftSideBar.css'
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { RiUserFollowLine } from "react-icons/ri";

import { Link } from 'react-router-dom';
import axios from 'axios';

const LeftSideBar = ({userName,settoggle,profileImage1,userDetailsArray,live2,setlive2}) => {
  
  const [filteredUser2,setfilteredUser2]=useState({})

  useEffect(()=>{
    settoggle(false)
    setlive2(false)
    try{
        axios.post('https://covai-glimpse.onrender.com/single/profile',{userName})
        .then(res =>{
          if (res.data){
              setfilteredUser2(res.data.data)
          }
          else if (res.data === 'not exist'){
              alert('Incorrect username / password')
          }
        })
        .catch(e=>{
              alert('Sorry! something went wrong')
        })
  }
  catch(e){
      alert('error')
  }
 },[live2])

  const displayName = userName.length > 5 ? userName.slice(0,5).toUpperCase()+'...' : userName.toUpperCase();

  const requiredObject5 = userDetailsArray.filter((single)=>(
    single.userName === userName
  ))
  const temp8 = requiredObject5[0]

  const handleProfile = (e)=>{
    settoggle(false)
  }  
  const handleHome = (e)=>{
    settoggle(true)
  }  

  return (
    <div className='LeftSideBar'>
      <div className='profileName'>
          {filteredUser2.profileImage
                  ? 
                    <img src={filteredUser2.profileImage} alt=''></img>      
                  : 
                    <img style={{height:'70%'}} src={require('.././images/userIcon.png')} alt=''></img>
          }
        <h3>Hi,{displayName}</h3>
      </div>  
      <div className='home'>
        <AiOutlineHome />
        <Link to='/home' className='home' onClick={(e)=>{handleHome(e)}}><p>Home</p></Link>
      </div> 
      <div className='profile'>
        <CgProfile />
        <Link to='/home/profile' className='profile' onClick={(e)=>{handleProfile(e)}}><p>Profile</p></Link>
      </div> 
      <div className='follow'>
      <RiUserFollowLine />
      <Link to='/home/followedusers'><p className='followuser'>FollowedUsers</p></Link> 
      </div> 
      <Link to='/'><p className='logout'>Logout</p></Link>
    </div>
  )
}

export default LeftSideBar