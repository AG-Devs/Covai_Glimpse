import React, { useEffect,useRef,useState} from 'react'
import './EditProfile.css'
import { AiFillDelete } from "react-icons/ai";

const EditProfile = ({tick,settick,userDetailsArray,userName,settoggle,profileVideo,setprofileVideo}) => {

  useEffect(()=>{
    settoggle(false)
  },[])

  const[mobilenumber1,setmobilenumber1]=useState('')
  const[gmail1,setgmail1]=useState(null)
  const[gender1,setgender1]=useState(null)
  const[age1,setage1]=useState(null)

  const[videoName,setvideoName]=useState(null)
  const inputRef3=useRef()

  const requiredObject = userDetailsArray.filter((single)=>(
                                                    single.userName === userName
                                                ))

  console.log(userDetailsArray)
const handleForm1=(e)=>{
    e.preventDefault()
    requiredObject[0].mobilenumber = mobilenumber1
    requiredObject[0].gender = gender1
    requiredObject[0].age = age1
    requiredObject[0].gmail = gmail1
    requiredObject[0].profileVideo = profileVideo
}
const handleVideo = (e)=>{
  try{
      const temp = e.target.files[0] ? e.target.files[0] : ''
      setprofileVideo(URL.createObjectURL(temp))
      setvideoName(null)
      settick(true)
  }
  catch(err){
      handlevideodelete()
  }
}
const handlevideo=(()=>{
  inputRef3.current.click()
})
const handlevideodelete=(()=>{      
  setprofileVideo(null)
  settick(false)
})


  return (
    <div className='editprofile'>
      <form onSubmit={(e)=>{handleForm1(e)}}>   
               <div>
                      <label htmlFor='mobileno'>mobilenumber:</label>
                        <input 
                        type='tel'
                        id='mobileno'
                        placeholder='Enter your mobilenumber'
                        value={mobilenumber1}
                        onChange={((e)=>{setmobilenumber1(e.target.value)})}
                        required/>
                </div>
                <div>
                      <label htmlFor='gmail'>G-mail:</label>
                        <input 
                        type='gmail'
                        id='gmail'
                        placeholder='Enter gmail'
                        value={gmail1}
                        onChange={((e)=>{setgmail1(e.target.value)})}
                        required/>
                </div>
                <div>
                        <label htmlFor='gender'>gender:</label>
                        <select name="gender" id="gender" form="carform" value={gender1} onChange={((e)=>setgender1(e.target.value))}>
                                <option value="male">Prefer Not To Say</option>
                                <option value="female">Female</option>
                                <option value="transgender">Transgender</option>
                                <option value="not to say">Male</option>
                      </select>
                </div>
                <div>
                        <label htmlFor='age'>age:</label>
                          <input 
                          type='number'
                          max='100'
                          min='13'
                          id='mobileno'
                          placeholder='age'
                          value={age1}
                          onChange={((e)=>{setage1(e.target.value)})}
                          required/>
                </div>
                <div className='videoupload'>
                        <h2>Tell Us About You !</h2>
                        <label htmlFor='video'>Profile Video:</label>
                          <input 
                          type='file'
                          ref={inputRef3}
                          value={videoName}
                          id='video'
                          accept='video/mp4,image/png,image/jpg'
                          onChange={((e)=>{handleVideo(e)})}
                          />
                           {tick?
                         <div  className='tick1'>
                                <img src={require('../images/tick.png')} alt='uploaded'/>
                                <button onClick={()=>{ handlevideodelete()}}><AiFillDelete /></button>
                          </div>
                          :
                          ''}
                </div>
                <img src={require('../images/videoupload.png')}
                onClick={(()=>{
                  handlevideo()
                })}
                />
              <button type='submit'>submit</button>  
      </form>
    </div>
  )
}

export default EditProfile