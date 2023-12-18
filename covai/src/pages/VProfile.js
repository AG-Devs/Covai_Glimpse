import React,{useRef,useEffect, useState} from 'react'
import './visitProfile.css'
import {Link} from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios';

const VProfile = ({userDetailsArray,setuserDetailsArray,profileVideo,setprofileVideo,profileImage,setprofileImage,finalComment,navigate,userName,settoggle,totalLikes,totalPosts,followers}) => {

    const [filteredUser,setfilteredUser]=useState({})
    useEffect(()=>{
        settoggle(false)
        try{
            axios.post('http://localhost:3001/single/profile',{userName})
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



    const requiredObject1 = userDetailsArray.filter((single)=>(
        single.userName === userName
    ))


  

    const requiredObject = finalComment.filter((single)=>(
        single.userName === userName
    ))
  return (
    <div className='profilePage'>
        <div className='userDetails'>
            <div className='profileDetails'>
                    <div className='profilePic'>
                    <img style={{height:'100%'}}  src={require('.././images/userIcon.png')} alt=''></img>
                            <h1>@{userName}</h1>

                    </div>
                    <div>
                        <button className='profileButtons'> follow</button>
                    </div>
            </div>
            <div className='userAnalytics'>
                <div className='analytics'>
                    <h2>{filteredUser.totalPosts}</h2>
                    <h3>Posts</h3>
                </div >
                <div className='analytics'>
                    <h2>{filteredUser.followers}</h2>
                    <h3>Followers</h3>
                </div>
                <div className='analytics'>
                    <h2>{filteredUser.totalLikes}</h2>
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
                    <p>Upload Your First Post</p> 
                </div>
                }
        </div>
    </div>
  )
}

export default VProfile