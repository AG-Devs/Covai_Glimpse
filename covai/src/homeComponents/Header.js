import React from 'react'
import './Header.css'
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = ({settoggle}) => {

  const handleNotification = (e)=>{
    settoggle(false)
  } 
  const handleNewPost = (e)=>{
    settoggle(false)
  } 

  return (
    <div className='Header'>
      <img src={require('.././images/userIcon.png')} alt='logo'></img>
      <h1>Covai Glimpse</h1>
      <div className='headerButton'>
          <Link to='/home/notification' className='headerButtons' onClick={(e)=>{handleNotification(e)}} ><FaBell /></Link>
          <Link to='/home/newpost' className='headerButtons' onClick={(e)=>{handleNewPost(e)}} ><FaPlus /></Link>
      </div>
    </div>
  )
}

export default Header