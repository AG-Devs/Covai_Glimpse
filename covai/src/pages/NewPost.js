import React, { useRef, useState } from 'react'
import './NewPost.css'
import { format } from 'date-fns'
import { AiFillDelete } from "react-icons/ai";


const NewPost = ({navigate,settoggle,finalComment,setfinalComment,userName}) => {

    const [title,settitle]= useState('')
    const [message,setmessage]=useState('')
    const [img,setimg]=useState(null)
    const [uploadImage,setuploadImage]=useState(null)
    const[tick,settick]=useState(false)

    
    const dateTime = format(new Date(), 'dd-MM-yyyy/HH-mm')

    const handleNewSubmit=(e)=>{
        e.preventDefault()
        const id = finalComment.length ? finalComment[finalComment.length-1].id + 1 : 1 ;
        const temp = {id:id,userName:userName,title:title,content:message, img:img ,time:dateTime,likeCount:0,disLikeCount:0,postComment:[{id1:0,userName:userName,Comment:'hi'}]}
        const updateTemp = [...finalComment,temp]
        setfinalComment(updateTemp)
        settitle('')
        setmessage('')
        navigate('/home')
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