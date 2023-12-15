import React from 'react'
import './NewPost.css'

const NewPost = () => {
  return (
    <div className='newPostPage'>
        <h2>Create New Post !</h2>
        <form className='newPostForm'>
            <div className='formElement'>
                <div className='inputs'>
                    <label>Title</label>
                    <input
                        placeholder='Enter Title'
                        required
                    ></input>
                    <label>Text</label>
                    <textarea
                        placeholder='Enter Text'
                        required
                    ></textarea>
                </div>
                <div className='postButtons'>
                    <button className='postButton'>Post</button>
                    <button className='postButton'>cancel</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default NewPost