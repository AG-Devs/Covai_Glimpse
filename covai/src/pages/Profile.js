import React,{useRef} from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'

const Profile = ({profileVideo,profileImage,setprofileImage,finalComment,navigate,userName}) => {

    const inputRef2 = useRef()
    const handleProfileClick = ()=>{
        inputRef2.current.click()
    }
    const handleProfileUpload = (e)=>{
        setprofileImage(URL.createObjectURL(e.target.files[0]))
    }

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
                                    <video muted autoPlay>
                                        <source src={profileVideo}></source>
                                    </video>
                                : profileImage ? <img src={profileImage} alt=''></img>
                                : <img style={{height:'100%'}} onClick={(e)=>handleProfileClick(e)} src={require('.././images/userIcon.png')} alt=''></img>}
                            </div>
                            <h1>@{userName}</h1>
                            <div className = 'imgInput'>
                                <input
                                    type='file'
                                    accept='image/jpg, image/png'
                                    ref={inputRef2}
                                    onChange={(e)=>{handleProfileUpload(e)}}
                                ></input>
                            </div>
                    </div>
                    <div>
                        <Link to='/home/editprofile' className='profileButtons'><p> Edit</p></Link>
                    </div>
            </div>
            <div className='userAnalytics'>
                <div className='analytics'>
                    <h2>100</h2>
                    <h3>Posts</h3>
                </div >
                <div className='analytics'>
                    <h2>100</h2>
                    <h3>Followers</h3>
                </div>
                <div className='analytics'>
                    <h2>100</h2>
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