import React, { useState ,useEffect} from 'react';
import axios from 'axios';


import './Notification.css'

const Notification = ({userName}) => {
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

  const[notification,setnotification]=useState(true)
  const[notificationList,setnotificationList]=useState([{userName:'gokul',notification:[{id:1,message:'hi'}]}])
  const temp3 = filteredUser.messages ? filteredUser.messages : 'hi'
  console.log(temp3)

  return (
    <div className='notificationPage'>
     
      <div className='notificationPage2'>
        <div className='notificationPage3' onClick ={()=>{setnotification(false)}}>
              {filteredUser.messages ? temp3.map((single)=>(
                                                            <p>{single.message}</p>
                                                          )) 
              : 'No notification' }
        </div>
      </div>
    
    </div>
  )
}

export default Notification