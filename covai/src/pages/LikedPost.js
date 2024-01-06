import React, { useEffect,useState } from 'react'
import '../homeComponents/Feed.css'
import axios from 'axios'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

const LikedPost = ({userDetailsArray,setuserDetailsArray,finalComment,setfinalComment,profileImage1,stateChecker,live2,setlive2,userName}) => {
    useEffect(()=>{
        
          setlive2(false)
  
          fetch('https://covai-glimpse.onrender.com/display/feed', {
                  method:"GET",
              })
              .then(async (res)=> await res.json())
              .then( (data)=>{
                  setfinalComment(data.data)
              })
  
              fetch('https://covai-glimpse.onrender.com/getall/user', {
                  method:"GET",
              })
              .then(async (res)=> await res.json())
              .then( (data)=>{
                setuserDetailsArray(data.data)
              })
              
    },[live2])
  

   console.log(userDetailsArray)
  
  
  
    const requiredObject7 = userDetailsArray.filter((single)=>(
      userName === single.userName
    ))
    const temp9 = requiredObject7[0]
  
    const updatePostProfilePic = ()=>{
      const profileImage5 = requiredObject7[0].profileImage
      const profileImage6 = profileImage5 ? profileImage5 : null
          axios.post('http://localhost:3001/change/feedimg',{
                userName,
                profileImage6
              })
              .then(res =>{
                if(res.data==='updated'){
                }
                else{
                  alert('err')
                }  
              });
    }
    const updatePostProfilePic2 = ()=>{
      const profileImage6 =  null
          axios.post('http://localhost:3001/change/feedimg',{
                userName,
                profileImage6
              })
              .then(res =>{
                if(res.data==='updated'){
                }
                else{
                  alert('err')
                }  
              });
    }
  
    if (temp9) {
      updatePostProfilePic()
    }
    else {
      updatePostProfilePic2()
    }
  
    return (
      <div className='feed'>
         <p style={{fontSize:'160%',fontWeight:'bold',color:'blueviolet'}}>You Liked These Posts!!</p>
        <div className='feedDisplay'>
           
            {finalComment.map((singlePost)=>(
              <Link to={`/home/post/${singlePost.id}`}>
                <div className='post'>
                  {(singlePost.message).length > 270 ? 
                    <>
                        <div className='feedUserInfo'>
                            {singlePost.profileImages
                                    ? 
                                      <img style={{height:'70%'}} src={singlePost.profileImages} alt=''></img>      
                                    : 
                                      <img style={{height:'70%'}} src={require('../images/userIcon.png')}></img>
                            }
                            <h2>@{singlePost.userName}</h2>
                        </div>
                        <h3>{singlePost.title.toUpperCase()}</h3>
                        <p>{singlePost.content.slice(0,271)+"..."}</p>
                        <div className={singlePost.img ? 'feedImg' : 'feedImg1'}>
                            <img src={singlePost.img} alt='' />
                        </div>
                    </>                  
                    : 
                    <>
                        <div className='feedUserInfo'>
                            {singlePost.profileImages
                                    ? 
                                      <img style={{height:'70%'}} src={singlePost.profileImages} alt=''></img>      
                                    : 
                                      <img style={{height:'70%'}} src={require('../images/userIcon.png')}></img>
                            }
                            <h2>@{singlePost.userName}</h2>
                        </div>
                        <h3>{singlePost.title.toUpperCase()}</h3>
                        <p>{singlePost.content}</p>
                        <div className={singlePost.img ? 'feedImg' : 'feedImg1'}>
                            <img src={singlePost.img} alt='' />
                      </div>
                    </>
                  }
                </div>
              </Link>
            ))}
        </div>
      </div>
    )
}

export default LikedPost