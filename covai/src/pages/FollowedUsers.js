import React, { useEffect } from 'react'
import './FollowedUsers.css'
import { Link } from 'react-router-dom';

const FollowedUsers = ({userDetailsArray,setuserDetailsArray,userName,setvisit}) => {
 

  useEffect(()=>{
  fetch('https://covai-glimpse.onrender.com/getall/user', {
                method:"GET",
            })
            .then(async (res)=> await res.json())
            .then( (data)=>{
              setuserDetailsArray(data.data)
            })
          
          },[])

   
   const temp12=userDetailsArray.filter((single)=>(
          single.userName === userName
   ))
   
   const temp13=temp12[0].followedUser
   console.log(temp12)
  return (
    <div className='icons'>
      
     {temp13.map((single)=>(
      <div className='followedusers'>
        {single.profileImage ? <img src={single.profileImage}/>
                             : <img src={require('../images/userIcon.png')}/>}
        
        <Link to ='/home/visitprofile' className='followedusers2'><p onClick={(()=>setvisit(single.user))}>{single.user}</p></Link>
      </div>
     ))}
     

    </div>
  )
}

export default FollowedUsers