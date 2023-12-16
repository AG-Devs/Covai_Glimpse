import React from 'react'
import './EditProfile.css'
const EditProfile = ({setmobilenumber,setgmail,setgender,setage,mobilenumber,gmail,gender,age,handleProfileVideo}) => {
  return (
    <div className='editprofile'>
      <form>   
               <div>
                      <label htmlFor='mobileno'>mobilenumber:</label>
                        <input 
                        type='tel'
                        id='mobileno'
                        placeholder='Enter your mobilenumber'
                        value={mobilenumber}
                        onChange={((e)=>{setmobilenumber(e.target.value)})}
                        required/>
                </div>
                <div>
                      <label htmlFor='gmail'>G-mail:</label>
                        <input 
                        type='gmail'
                        id='gmail'
                        placeholder='Enter gmail'
                        value={gmail}
                        onChange={((e)=>{setgmail(e.target.value)})}
                        required/>
                </div>
                <div>
                        <label htmlFor='gender'>gender:</label>
                          <input 
                          type='text'
                          id='gender'
                          placeholder='gender'
                          value={gender}
                          onChange={((e)=>{setgender(e.target.value)})}
                          required/>
                </div>
                <div>
                        <label htmlFor='age'>age:</label>
                          <input 
                          type='select'
                          id='mobileno'
                          placeholder='age'
                          value={age}
                          onChange={((e)=>{setage(e.target.value)})}
                          required/>
                </div>
                <div>
                        <label htmlFor='video'>profileVideo:</label>
                          <input 
                          type='file'
                          id='video'
                          accept='video/mp4'
                          onChange={((e)=>{handleProfileVideo(e)})}
                          />
                </div>
      </form>
    </div>
  )
}

export default EditProfile