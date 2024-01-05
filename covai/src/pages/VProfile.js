import React,{useRef,useEffect, useState} from 'react'
import './visitProfile.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

const VProfile = ({userDetailsArray,setuserDetailsArray,profileVideo,setprofileVideo,profileImage1,setprofileImage1,finalComment,navigate,userName,settoggle,followers,visit,Notification,followedUsers,setfollowedUsers,Notifications,setNotifications}) => {
    
    
    const [filteredUser,setfilteredUser]=useState({})
    const [follow,setfollow] = useState(true)

    const [live,setlive]=useState(false)

    const requiredObject = finalComment.filter((single)=>(
        single.userName === visit
    ))
  
    const requiredObject8=userDetailsArray.filter((single)=>(
        single.userName ===visit
    ))

    let totalLikes = 0
    for (let i=0;i<=requiredObject.length-1;i++){
        totalLikes = requiredObject[i].likeCount + totalLikes
    }

    
    const requiredObject3 = userDetailsArray.filter((single)=>(
        userName === single.userName
    ))
    const temp5 = requiredObject3[0].followedUser
    const temp6 = temp5.filter((single)=>(
                                        single.user === visit
                               ))

    useEffect(()=>{
        settoggle(false)
        if (temp6.length){
            setfollow(false)
        }
        else{
            setfollow(true)
        }

        try{
            axios.post('https://covai-glimpse.onrender.com/visited/profiles',{visit})
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
     },[live])

    const updateFollow = (Notification2)=>{
        const newFollowers = filteredUser.followers
        try{
            axios.post('https://covai-glimpse.onrender.com/follow/updated',{
                                visit,
                                newFollowers,
                                Notification2
                })
                .then(res => { 
                        if (res.data === 'done'){
                           
                        }
                        else if (res.data === 'error'){                            
                            alert('Sorry! something went wrong')
                        }
                })
                .catch(e => {
                    alert(e)
                })
          }
          catch(e){
                console.log('err')
          }

        const id = filteredUser.followedUsers ? filteredUser.followedUsers[filteredUser.followedUsers.length-1].id + 1 : 1
        const tempObj = {id_u:id,user:visit,profileImage:filteredUser.profileImage ? filteredUser.profileImage : null }
        const temp4 = [...temp5,tempObj]
        try{
            axios.post('https://covai-glimpse.onrender.com/followed/users',{
                                userName,
                                temp4
                })
                .then(res => { 
                        if (res.data === 'done'){
                            
                        }
                        else if (res.data === 'error'){                            
                            alert('Sorry! something went wrong')
                        }
                })
                .catch(e => {
                    alert(e)
                })
          }
          catch(e){
                console.log('err')
          }
          setlive(false)
    }

    const handleFollow=()=>{
        filteredUser.followers = filteredUser.followers + 1
        const temp = filteredUser.messages
        setfollow(false)
        const Notification1={id:1,message:'you got a new follower'}
        const Notification2=[...temp,Notification1]
        updateFollow(Notification2)
    }
  
    const updateUnfollow = ()=>{
        const newFollowers = filteredUser.followers
        try{
            axios.post('https://covai-glimpse.onrender.com/unfollow/updating',{
                                visit,
                                newFollowers,
                })
                .then(res => { 
                        if (res.data === 'done'){
                           
                        }
                        else if (res.data === 'error'){                            
                            alert('Sorry! something went wrong')
                        }
                })
                .catch(e => {
                    alert(e)
                })
          }
          catch(e){
                console.log('err')
          }

          
          const temp4 = temp5.filter((single)=>(
                                                single.user !== visit
                                            ))
          try{
            axios.post('https://covai-glimpse.onrender.com/unfollowed/people',{
                                userName,
                                temp4
                })
                .then(res => { 
                        if (res.data === 'done'){
                            
                        }
                        else if (res.data === 'error'){                            
                            alert('Sorry! something went wrong')
                        }
                })
                .catch(e => {
                    alert(e)
                })
          }
          catch(e){
                console.log('err')
          }
          setlive(false)
    }

    const handleUnfollow=()=>{
        filteredUser.followers = filteredUser.followers - 1
        setfollow(true)
        updateUnfollow()
    }

  return (
    <div className='profilePage'>
        <div className='userDetails'>
            <div className='profileDetails'>
                    <div className='profilePic'>
                            <div className='profileVideo'>
                                { requiredObject8[0].profileVideo?  
                                    <div className='profileVideoDisplay'>
                                        <video muted autoPlay loop>
                                            <source src={requiredObject8[0].profileVideo}></source>
                                        </video>
                                    </div>
                                : requiredObject8[0].profileImage ? <img src={requiredObject8[0].profileImage} alt=''></img>
                                : <img style={{height:'100%'}} src={require('.././images/userIcon.png')} alt=''></img>}
                            </div>
                            <h1>@{filteredUser.userName}</h1>
                            <div className='followButtons' >
                                {follow ? <p onClick={(e)=>{handleFollow(e)}}> Follow </p> : <p onClick={(e)=>{handleUnfollow(e)}}> Unfollow </p> }
                            </div>
                    </div>          
            </div>
            <div className='userAnalytics'>
                <div className='analytics'>
                    <h2>{requiredObject.length}</h2>
                    <h3>Posts</h3>
                </div >
                <div className='analytics'>
                    <h2>{filteredUser.followers}</h2>
                    <h3>Followers</h3>
                </div>
                <div className='analytics'>
                    <h2>{totalLikes}</h2>
                    <h3>Likes</h3>
                </div>
            </div>
        </div>
        <div className='yourPostsDisplay'>
            {requiredObject.length ? 
                    requiredObject.map((singlePost)=>(
                        <Link to={`/home/post/${singlePost.id}`}>
                            <div className='posts'>
                                <h3>{singlePost.title.toUpperCase()}</h3>
                                <p>{singlePost.content}</p>
                                <div className={singlePost.img ? 'profileFeedImg' : 'profileFeedImg1'}>
                                     <img src={singlePost.img} alt='' />
                                </div>
                            </div>
                        </Link>
                    ))
                : 
                <div className='noPost'>
                    <p>No Post</p> 
                </div>
                }
        </div>
    </div>
  )
}

export default VProfile