import React, { useState } from 'react';
import './Notification.css'

const Notification = () => {
  const[notification,setnotification]=useState(true)
  const[notificationList,setnotificationList]=useState([
    {id:1,message:'you got a like'},
    {id:2,message:'you got a like'},
    {id:3,message:'you got a like'},
    {id:4,message:'you got a like'},
    {id:5,message:'you got a like'},
    {id:6,message:'you got a like'},
    {id:7,message:'you got a like'},
    {id:8,message:'you got a like'},
    {id:9,message:'you got a like'},
    {id:10,message:'you got a like'},
    {id:11,message:'you got a like'},
    {id:12,message:'you got a like'}
  ])
  return (
    <div className='notificationPage'>
     {notificationList.map((messages)=>(
      <div className='notificationPage2'>
        <div className='notificationPage3' onClick ={()=>{setnotification(false)}}>
            {messages.message}
        </div>
      </div>
     ))}
    </div>
  )
}

export default Notification