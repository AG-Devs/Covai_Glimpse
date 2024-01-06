import React, { useRef, useState, useEffect } from 'react'
import './Post.css'
import { useNavigate, useParams } from 'react-router-dom'
import { GrSend } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Post = ({userDetailsArray,finalComment,userName,profileImage1,stateChecker,setstateChecker,like,setLike,like1,setLike1,interactionsArray,setinteractionsArray,setvisit,live2,setlive2}) => {

  const [filteredUser3,setfilteredUser3]=useState({})
  const [allUsers,setallUsers]=useState(userDetailsArray)

  const id = useParams()
  const Id = id.id

  const requiredObject = finalComment.filter((post)=>(
    Number(Id) === Number(post.id)
  ))
  
  const visited = requiredObject[0].userName

  

  useEffect(()=>{
    setlive2(false)

    const needed = allUsers.filter((single)=>(single.userName === userName))
    const liking = needed[0].likedPosts.filter((single)=>( single.id_p === requiredObject[0].id))
    console.log(needed)
    if (liking.length){
        setLike(true)
    }
    else{
        setLike(false)
    }

    fetch('https://covai-glimpse.onrender.com/getall/user', {
                method:"GET",
            })
            .then(async (res)=> await res.json())
            .then( (data)=>{
              setallUsers(data.data)
            })

    try{
        axios.post('http://localhost:3001/postsuser/username',{visited})
        .then(res =>{
          if (res.data){
              setfilteredUser3(res.data.data)
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
  
  const[liked,setliked]=useState(true)
  const[disliked,setdisliked]=useState(true)

  const [Comment,setComment] = useState('')
  const navigateTo = useNavigate()

  const temp2 = requiredObject[0].postComment

  const textbox=useRef(null)  

  const updateInteraction=()=>{
    const id = requiredObject[0].id
    const like = requiredObject[0].likeCount
    const dislike = requiredObject[0].dislikeCount
    const postComment = requiredObject[0].postComment
    try{
      axios.post('https://covai-glimpse.onrender.com/post/update',{
                          id,
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
      const result= !like ? requiredObject[0].likeCount+1 : requiredObject[0].likeCount === 0 ?  0 : requiredObject[0].likeCount-1
      if (like1){
          const result2 = requiredObject[0].dislikeCount === 0 ? 0 : requiredObject[0].dislikeCount-1
          requiredObject[0].dislikeCount = result2
      }
      setliked(!liked)
      setdisliked(true)
      requiredObject[0].likeCount = result
      setLike(!like);
      setLike1(false)
      updateInteraction()
  }

  const requiredUser = userDetailsArray.filter((single)=>(single.userName === userName))
  const likedPostArray = requiredUser[0].likedPosts
  if (like){
    const id_p = requiredObject[0].id
    const temp11 = [...likedPostArray,{id:1,id_p:id_p}]
    try{
      axios.post('http://localhost:3001/liked/postsupdate',{
                          userName,
                          temp11  
          })
          .then(res => { 
                  if (res.data === 'updated'){
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
  else{
      const id_p = requiredObject[0].id
      const temp12 = likedPostArray.filter((single)=>(id_p !== single.id_p))
      try{
        axios.post('http://localhost:3001/likedd/postsremove',{
                            userName,
                            temp12  
            })
            .then(res => { 
                    if (res.data === 'updated'){
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

  const dislikedPostArray = requiredUser[0].dislikedPosts
  if (like1){
    const id_p = requiredObject[0].id
    const temp21 = [...dislikedPostArray,{id:1,id_p:id_p}]
    try{
      axios.post('http://localhost:3001/disliked/postupdate',{
                          userName,
                          temp21 
          })
          .then(res => { 
                  if (res.data === 'updated'){
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
  else{
      const id_p = requiredObject[0].id
      const temp22 = dislikedPostArray.filter((single)=>(id_p !== single.id_p))
      try{
        axios.post('http://localhost:3001/dislikedd/postremove',{
                            userName,
                            temp22  
            })
            .then(res => { 
                    if (res.data === 'updated'){
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

  const handleDisLike=()=>{
      const result= !like1 ? requiredObject[0].dislikeCount+1 : requiredObject[0].dislikeCount === 0 ?  0 : requiredObject[0].dislikeCount-1
      if (like){
          const result2 = requiredObject[0].likeCount === 0 ? 0 : requiredObject[0].likeCount-1
          requiredObject[0].likeCount = result2
      }
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

    const temp = requiredObject[0].userName
    setvisit(temp)

  const handleDeletePost =()=>{
    const name1 = requiredObject[0].userName
    const id = Number(requiredObject[0].id)
    try{
      axios.post('https://covai-glimpse.onrender.com/currentPost/delete',{
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
                    {filteredUser3.profileImage
                        ? 
                        <img src={filteredUser3.profileImage} alt=''/> 
                        : 
                      <img src={require('.././images/userIcon.png')} alt=''/>
                    }
                    <Link to='/home/visitprofile'><h2 style={{color:'blueviolet'}}>@{requiredObject[0].userName}</h2></Link>
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