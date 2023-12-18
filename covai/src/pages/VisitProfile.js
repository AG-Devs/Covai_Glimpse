import React,{useRef,useEffect, useState} from 'react'
import './visitProfile.css'
import {Link} from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios';

const VisitProfile= ({userDetailsArray,setuserDetailsArray,profileVideo,setprofileVideo,profileImage,setprofileImage,finalComment,navigate,userName,settoggle,totalLikes,totalPosts,followers}) => {

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

    const [profilePic,setprofilePic] = useState('')
    const[tick,settick]=useState(false) 

    const inputRef2 = useRef()

    const requiredObject1 = userDetailsArray.filter((single)=>(
        single.userName === userName
    ))

    const handleProfileClick = ()=>{
        inputRef2.current.click()
    }
    const handleProfileUpload = (e)=>{
        try{
            const temp = e.target.files[0] ? e.target.files[0] : ''
            setprofileImage(URL.createObjectURL(temp))
            requiredObject1[0].profileImage = temp
            setprofilePic(null)
            settick(true)
        }
        catch(err){
            handleDelete()
        }
    }
    const handleDelete=(()=>{      
        setprofileImage(null)
        setprofilePic(null)
        settick(false)
    })
    const handlevideodelete=(()=>{      
        setprofileVideo(null)
        settick(false)
      })

    const requiredObject = finalComment.filter((single)=>(
        single.userName === userName
    ))

  return (
    <div className='profilePage'>
        <div className='userDetails'>
            <div className='profileDetails'>
                    <div className='profilePic'>
                            <div className='profileVideo'>
                                {profileVideo ?  
                                    <div className='profileVideoDisplay'>
                                        <video muted autoPlay loop>
                                            <source src={profileVideo}></source>
                                        </video>
                                    </div>
                                : profileImage ? <img onClick={(e)=>handleProfileClick(e)} src={profileImage} alt=''></img>
                                : <img style={{height:'100%'}} onClick={(e)=>handleProfileClick(e)} src={require('.././images/userIcon.png')} alt=''></img>}
                            </div>
                            <h1>@{userName}</h1>
                            <div className = 'imgInput'>
                                <input
                                    type='file'
                                    accept='image/jpg, image/png'
                                    ref={inputRef2}
                                    value={profilePic}
                                    onChange={(e)=>{handleProfileUpload(e)}}
                                ></input>
                            </div>
                    </div>
                    <div>
                        <button className='profileButtons'onClick={()=>{settoggle(false)}}> follow</button>
                        {profileImage ?
                            <div  className='profilePicDelete'>
                                    <button onClick={()=>{handleDelete()}}><AiFillDelete /></button>
                            </div>
                          :
                          ''}
                          {profileVideo?
                         <div  className='profilePicDelete'>
                                <button onClick={()=>{ handlevideodelete()}}><AiFillDelete /></button>
                          </div>
                          :
                          ''}
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

export default VisitProfile