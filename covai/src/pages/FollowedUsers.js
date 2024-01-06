import React, { useEffect } from 'react'
import './FollowedUsers.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

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
    let tempf = []
   
   if (temp13.length){
     for (let i=0;i<=temp13.length-1;i++){
         const tem = userDetailsArray.filter((single)=>(temp13[i].user === single.userName))
         tempf = [...tempf,tem[0]]      
     }
   }
   
   const tempf2= tempf.slice(0).reverse()

  return (
    <div className='icons'>
      
     {tempf2.map((single)=>(
      <div className='followedusers'>
        {single.profileImage ? <img src={single.profileImage}/>
                             : <img src={require('../images/userIcon.png')}/>}
        
        <p style={{margin:'0%',color:'blueviolet',fontWeight:'bold'}}>{single.followers}</p>
        <Link to ='/home/visitprofile' className='followedusers2'><p onClick={(()=>setvisit(single.userName))}>{single.userName}</p></Link>
      </div>
     ))}
     

    </div>
  )
}

export default FollowedUsers