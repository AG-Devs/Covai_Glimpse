import React, { useRef, useState } from 'react'
import './Post.css'
import { useParams } from 'react-router-dom'
import { GrSend } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import axios from 'axios';

const Post = ({finalComment,userName,profileImage,stateChecker,setstateChecker}) => {

  const[like,setLike]=useState(false)
  const[like1,setLike1]=useState(false)
  const[liked,setliked]=useState(true)
  const[disliked,setdisliked]=useState(true)

  const [Comment,setComment] = useState('')

  const id = useParams()
  const Id = id.id

  const requiredObject = finalComment.filter((post)=>(
    Number(Id) === Number(post.id)
  ))
  
  const temp2 = requiredObject[0].postComment

  const textbox=useRef(null)  

  const handleLike=(()=>{
      const result= liked ? requiredObject[0].likeCount+1 : requiredObject[0].likeCount === 0 ?  0 : requiredObject[0].likeCount-1
      const result2 = requiredObject[0].disLikeCount === 0 ? 0 : requiredObject[0].disLikeCount-1
      requiredObject[0].disLikeCount = result2
      setliked(!liked)
      setdisliked(true)
      requiredObject[0].likeCount = result
      setLike(!like);
      setLike1(false)
  })
  const handleDisLike=(()=>{
      const result= disliked ? requiredObject[0].disLikeCount+1 : requiredObject[0].disLikeCount === 0 ?  0 : requiredObject[0].disLikeCount-1
      const result2 = requiredObject[0].likeCount === 0 ? 0 : requiredObject[0].likeCount-1
      setdisliked(!disliked)
      setliked(true)
      requiredObject[0].disLikeCount = result
      requiredObject[0].likeCount = result2
      setLike1(!like1);
      setLike(false)
  })
  



  const handleComment = (e)=>{
      textbox.current.style.height="32px";
      textbox.current.style.height=`${textbox.current.scrollHeight}px`;
      setComment(e.target.value)
  }
  const handleCommentSubmit = (e)=>{
    e.preventDefault()
    const id1 = temp2.length ? temp2[temp2.length-1].id1 + 1 : 1 ;
    const text = {id1:id1,userName:userName,Comment:Comment}
    const updatedtemp2 = [...temp2,text]
    requiredObject[0].postComment = updatedtemp2
    const name1 = requiredObject[0].userName
    try{
      axios.post('https://covai-glimpse.onrender.com/post/update',{
                          name1,
                          updatedtemp2    
          })
          .then(res => { 
                  if (res.data === 'done'){
                      alert('done')
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
    setstateChecker(!stateChecker)
    textbox.current.style.height="32px";
    setComment('')
  }

  return (
    <div className='singlePost'>
      <div className='singlePostContent'>
         <div className='postContent'>
              <div className='userInfo'>
                    {profileImage 
                        ? 
                          <img src={profileImage} alt=''></img>      
                        : 
                          <img style={{height:'70%'}}src={require('.././images/userIcon.png')} alt=''></img>
                    }
                    <h2>@{requiredObject[0].userName}</h2>
              </div>
              <h1>{requiredObject[0].title}</h1>
              <p>{requiredObject[0].message}</p>
              { requiredObject[0].img ? <img className='postImg' src={requiredObject[0].img} alt='' /> : ''}
         </div>
         <div className='interactionSession'>
              <div className='likeSession'>
                    <div className={like?'buttons1':'buttons'} onClick={(()=>{handleLike()})}>
                        <AiFillLike />
                        <p>{requiredObject[0].likeCount}</p>
                    </div>
                    <div className={like1?'buttons1':'buttons'} onClick={(()=>{handleDisLike()})}>  
                        <AiFillDislike /> 
                        <p>{requiredObject[0].disLikeCount}</p>
                    </div>
              </div>
              <div className='commentSession'>
                  <form className='commentForm' onSubmit={(e)=>{handleCommentSubmit(e)}}>
                      <label htmlFor='comment' id='comment'>Enter comment:</label>
                      <textarea 
                            id='comment' 
                            value={Comment}
                            onChange={(e)=>{handleComment(e)}} 
                            ref={textbox}
                            placeholder='Enter your Comment'
                            required
                      ></textarea>
                      <button className='commentButton' type='submit'>
                            <GrSend />
                      </button>
                  </form>
                  <div className='comments'>
                      <div className='commentContent'>
                            {(requiredObject[0].postComment).length ? (requiredObject[0].postComment).map((single)=>(
                              <div className='commentDisplay'>
                                <div className='commentUser'>
                                  <img src={require('.././images/userIcon.png')} alt='' />
                                  <h3>@{single.userName}</h3>
                                </div>
                                  <p>{single.Comment}</p>
                              </div>    
                            )):'No comments'}
                      </div>
                  </div>
              </div>
         </div>
      </div>
    </div>
  )
}

export default Post