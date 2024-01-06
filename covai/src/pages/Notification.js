import React, { useState ,useEffect} from 'react';
import axios from 'axios';


import './Notification.css'

const Notification = ({userName,userDetailsArray}) => {
  const [filteredUser,setfilteredUser]=useState({})
    useEffect(()=>{
       
        try{
            axios.post('https://covai-glimpse.onrender.com/getting/notification',{userName})
            .then(res =>{
              if (res.data){
                  setfilteredUser(res.data.data)
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
     },[])
     const temp23=userDetailsArray.filter((single)=>single.userName===userName)

  const[notification,setnotification]=useState(true)

  return (
    <div className='notificationPage'>
     
      <div className='notificationPage2'>
        <div className='notificationPage3' onClick ={()=>{setnotification(false)}}>
          <h1>Check Out Your Notification</h1>
              {temp23[0].messages.length ? temp23[0].messages.map((single)=>(
                                                          <div className='notificationPage4'>
                                                            <p>{single.message}</p>
                                                            </div>
                                                          )) 
              : <h2>No notification</h2> }
        </div>
      </div>
    
    </div>
  )
}

export default Notification