import React, { useRef, useState } from 'react'
import './NewPost.css'
import { format } from 'date-fns'
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios'


const NewPost = ({navigate,settoggle,finalComment,setfinalComment,userName,likeCount,dislikeCount}) => {

    const [title,settitle]= useState('')
    const [message,setmessage]=useState('')
    const [img,setimg]=useState('')
    const [uploadImage,setuploadImage]=useState('')
    const[tick,settick]=useState(false)
    
    const dateTime = format(new Date(), 'dd-MM-yyyy/HH-mm')

    const handleNewSubmit=(e)=>{
        e.preventDefault()
        const id = '1' ;
        const postComment = [{id:'1',userName:userName,Comment:'hi'}]

        try{
            axios.post('https://covai-glimpse.onrender.com/new/post',{
                                    id,
                                    userName,
                                    title,
                                    message,
                                    img,
                                    dateTime,
                                    likeCount,
                                    dislikeCount,
                                    postComment
                })
                .then(res => { 
                        if (res.data === 'done'){
                            alert('done')
                            settitle('')
                            setmessage('')
                            navigate('/home')
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
                    console.log(e)
        }
    }

    const handleImage = (e)=>{
        try{
            const temp = e.target.files[0] ? e.target.files[0] : ''
            setimg(URL.createObjectURL(temp))
            setuploadImage(null)
            settick(true)
        }
        catch(err){
            handleDelete()
        }
    }
    const handleCancel=()=>{
        navigate('/home')
        settoggle(true)
    }

    const inputRef=useRef()
    const handleReference=(()=>{
        inputRef.current.click()
    })

    const handleDelete=(()=>{      
        setuploadImage(null)
        setimg(null)
        settick(false)
    })
    
  return (
    <div className='newPostPage'>
        <h2>Create New Post !</h2>
        <form className='newPostForm' onSubmit={(e)=>{handleNewSubmit(e)}}>
            <div className='formElement'>
                <div className='inputs'>
                    <label>Title</label>
                    <input
                        placeholder='Enter Title'
                        value={title}
                        onChange={(e)=>{settitle(e.target.value)}}
                        required
                    ></input>
                    <label>Text</label>
                    <textarea
                        placeholder='Enter Text'
                        value={message}
                        onChange={(e)=>{setmessage(e.target.value)}}
                        required
                    ></textarea>
                    <div className='getImage'>
                        <label htmlFor='uploadimage'>Upload Image : </label>
                        <img src={require('../images/upload.png')} onClick={()=>{handleReference()}}/>
                    </div>
                         {tick?
                         <div  className='tick'>
                                <img src={require('../images/tick.png')} alt='uploaded'/>
                                <button onClick={()=>{handleDelete()}}><AiFillDelete /></button>
                          </div>
                          :
                          ''}
                    <input 
                        className='imageInput'
                        id='uploadimage'
                        type='file' 
                        value={uploadImage}
                        ref={inputRef}
                        accept='image/png, image/jpg'
                        onChange={(e)=>{handleImage(e)}}
                    ></input>
                </div>
                <div className='postButtons'>
                    <button className='postButton' type='submit'>Post</button>
                    <button className='postButton' onClick={()=>{handleCancel()}}>cancel</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default NewPost