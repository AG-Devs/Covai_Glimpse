import React, { useRef, useState } from 'react'
import './Post.css'
import { useNavigate, useParams } from 'react-router-dom'
import { GrSend } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Post = ({finalComment,userName,profileImage,stateChecker,setstateChecker,like,setLike,like1,setLike1,interactionsArray,setinteractionsArray}) => {

  
  const[liked,setliked]=useState(true)
  const[disliked,setdisliked]=useState(true)

  const [Comment,setComment] = useState('')
  const navigateTo = useNavigate()

  const id = useParams()
  const Id = id.id

  const requiredObject = finalComment.filter((post)=>(
    Number(Id) === Number(post.id)
  ))
  
  const temp2 = requiredObject[0].postComment

  const textbox=useRef(null)  

  console.log(requiredObject[0])

  const updateInteraction=()=>{
    const name1 = requiredObject[0].userName
    const like = requiredObject[0].likeCount
    const dislike = requiredObject[0].dislikeCount
    const postComment = requiredObject[0].postComment
    try{
      axios.post('http://localhost:3001/post/update',{
                          name1,
                          like,
                          dislike,
                          postComment   
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
  }

  const handleLike=()=>{
      const result= liked ? requiredObject[0].likeCount+1 : requiredObject[0].likeCount === 0 ?  0 : requiredObject[0].likeCount-1
      const result2 = requiredObject[0].dislikeCount === 0 ? 0 : requiredObject[0].dislikeCount-1
      requiredObject[0].dislikeCount = result2
      setliked(!liked)
      setdisliked(true)
      requiredObject[0].likeCount = result
      setLike(!like);
      setLike1(false)
      updateInteraction() 
      
  }

  const handleDisLike=()=>{
      const result= disliked ? requiredObject[0].dislikeCount+1 : requiredObject[0].dislikeCount === 0 ?  0 : requiredObject[0].dislikeCount-1
      const result2 = requiredObject[0].likeCount === 0 ? 0 : requiredObject[0].likeCount-1
      requiredObject[0].likeCount = result2
      setdisliked(!disliked)
      setliked(true)
      requiredObject[0].dislikeCount = result
      setLike1(!like1);
      setLike(false)
      updateInteraction()
  }

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
    updateInteraction()
    textbox.current.style.height="32px";
    setComment('')

  }

  const handleDeletePost =()=>{
    const name1 = requiredObject[0].userName
    const id = Number(requiredObject[0].id)
    try{
      axios.post('http://localhost:3001/currentPost/delete',{
                          name1,
                          id  
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
    setstateChecker(!stateChecker)
    navigateTo('/home')
  }

  return (
    <div className='singlePost'>
      <div className='singlePostContent'>
         <div className='postContent'>
              <div className='userInfo'>
                    {profileImage 
                        ? 
                        <Link to='/home/visitprofile'><img src={profileImage} alt=''/></Link>   
                        : 
                      <Link to='/home/visitprofile' style={{height:'70%'}}><img src={require('.././images/userIcon.png')} alt=''/></Link>
                    }
                    <h2>@{requiredObject[0].userName}</h2>
                    { userName === requiredObject[0].userName ? 
                          <div className='postDeleteButton'>
                              <button onClick={()=>{handleDeletePost()}}><AiFillDelete /></button> 
                          </div>
                    :''}
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
                        <p>{requiredObject[0].dislikeCount}</p>
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