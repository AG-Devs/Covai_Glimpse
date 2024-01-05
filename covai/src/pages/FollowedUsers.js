import React from 'react'
import './FollowedUsers.css'
const FollowedUsers = ({userDetailsArray,userName}) => {
   
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
        
        <p>{single.user}</p>
      </div>
     ))}
     

    </div>
  )
}

export default FollowedUsers