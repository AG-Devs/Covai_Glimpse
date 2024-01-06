import React,{useRef,useEffect, useState} from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios';

const Profile = ({userDetailsArray,setuserDetailsArray,profileVideo,setprofileVideo,profileImage1,setprofileImage1,finalComment,navigate,userName,settoggle,followers,live2,setlive2,visit}) => {

    const [filteredUser,setfilteredUser]=useState({})
    const [profileImage3,setprofileImage3]=useState({})

    const requiredObject = finalComment.filter((single)=>(
        single.userName === userName
    ))

    let totalLikes2 = 0
    for (let i=0;i<=requiredObject.length-1;i++){
        totalLikes2 = requiredObject[i].likeCount + totalLikes2
    }

    useEffect(()=>{
        settoggle(false)
        setlive2(false)
        try{
            axios.post('https://covai-glimpse.onrender.com/single/profile',{userName})
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
     },[live2])

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

            var reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            reader.onload = () =>{
                sendImgToDataBase(reader.result)
                setprofileImage1(reader.result)
                updateFeedImg(reader.result)
            }
            reader.onerror = err =>{
                console.log('err')
            }
            requiredObject1[0].profileImage = temp
            settick(true)
            setprofilePic(null)
        }
        catch(err){
            alert(err)
        }
    }

    const handleDelete=(()=>{      
        setprofileImage1(null)
        setprofilePic(null)
        settick(false)
        deleteProfileImg()
    })
    const handlevideodelete=(()=>{      
        setprofileVideo(null)
        settick(false)
        sendToDataBase()
        setlive2(true)
      })

      const sendToDataBase = ()=>{
        const profileVideo2 = null
        axios.post('https://covai-glimpse.onrender.com/delete/profilevideo',{
              userName,
              profileVideo2
            })
            .then(res =>{
              if(res.data==='updated'){
              }
              else{
                alert('error')
              }  
            });       
  }
  const temp19=userDetailsArray.filter((single)=>(
    single.userName === userName
))
const temp20=temp19[0].followedUser

      const sendImgToDataBase = (profileImage3)=>{

        const profileImage2 = profileImage3 ? profileImage3 : null
        axios.post('https://covai-glimpse.onrender.com/send/profileimg',{
              userName,
              profileImage2
            })
            .then(res =>{
              if(res.data==='updated'){
                alert('hisss')
              }
              else{
                alert('error')
              }  
            });
     setlive2(true)
  }
      const updateFeedImg = (profileImage5)=>{
        const profileImage6 = profileImage5 ? profileImage5 : null
        axios.post('https://covai-glimpse.onrender.com/change/feedimg',{
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

  const deleteProfileImg = ()=>{
    const profileImage2 = null
    axios.post('https://covai-glimpse.onrender.com/deleting/profileimage',{
          userName,
          profileImage2
        })
        .then(res =>{
          if(res.data==='updated'){
          }
          else{
            alert('error')
          }  
        }); 
    setlive2(true)      
}

  return (
    <div className='profilePage'>
        <div className='userDetails'>
            <div className='profileDetails'>
                    <div className='profilePic'>
                            <div className='profileVideo'>
                                {filteredUser.profileVideo ?  
                                    <div className='profileVideoDisplay'>
                                        <video muted autoPlay loop>
                                            <source src={filteredUser.profileVideo}></source>
                                        </video>
                                    </div>
                                : filteredUser.profileImage ? <img onClick={(e)=>handleProfileClick(e)} src={filteredUser.profileImage} alt=''></img>
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
                        <Link to='/home/editprofile' className='profileButtons'><p onClick={()=>{settoggle(false)}}> Edit</p></Link>
                        {filteredUser.profileImage ?
                            <div  className='profilePicDelete'>
                                    <button onClick={()=>{handleDelete()}}><AiFillDelete /></button>
                            </div>
                          :
                          ''}
                          {filteredUser.profileVideo?
                         <div  className='profilePicDelete'>
                                <button onClick={()=>{ handlevideodelete()}}><AiFillDelete /></button>
                          </div>
                          :
                          ''}
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
                    <h2>{totalLikes2}</h2>
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

export default Profile