import React, { useEffect,useState } from 'react'
import './Feed.css'
import axios from 'axios'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

const Feed = ({userDetailsArray,setuserDetailsArray,finalComment,setfinalComment,profileImage1,stateChecker,live2,setlive2,userName}) => { 

  useEffect(()=>{
        weatherApi()
        setlive2(false)

        fetch('https://covai-glimpse.onrender.com/display/feed', {
                method:"GET",
            })
            .then(async (res)=> await res.json())
            .then( (data)=>{
                setfinalComment(data.data)
            })

            fetch('https://covai-glimpse.onrender.com/getall/user', {
                method:"GET",
            })
            .then(async (res)=> await res.json())
            .then( (data)=>{
              setuserDetailsArray(data.data)
            })
            
  },[live2])

  const city_name = 'Coimbatore'
  const [weather,setweather]=useState('')
  const time = format(new Date(), 'HH')

  const weatherApi= async ()=>{
    try{
      const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=369251809b1255cfcdeef27792d91192`)
      setweather(weather.data)
    }
    catch(err){
      console.log(err)
    }
  }

  const requiredObject7 = userDetailsArray.filter((single)=>(
    userName === single.userName
  ))
  const temp9 = requiredObject7[0]

  const updatePostProfilePic = ()=>{
    const profileImage5 = requiredObject7[0].profileImage
    const profileImage6 = profileImage5 ? profileImage5 : null
        axios.post('http://localhost:3001/change/feedimg',{
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
  const updatePostProfilePic2 = ()=>{
    const profileImage6 =  null
        axios.post('http://localhost:3001/change/feedimg',{
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

  if (temp9) {
    updatePostProfilePic()
  }
  else {
    updatePostProfilePic2()
  }

  const finalCommentrev = finalComment.slice(0).reverse()

  return (
    <div className='feed'>
      <div className='feedDisplay'>
          <div className={time>'06' && time<'19' ?'weather':'weather2'}>
                  {
                    weather ? 
                    <>
                          <div className={time>'06' && time<'19' ?'weatherComponents':'weatherComponents2'}>
                                <h3>Coimbatore</h3>
                                <div className='climate1'>
                                      <img id="wicon" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather icon"></img>
                                      <p className={time>'06' && time<'19' ?'climateName':'climateName2'}>{weather.weather[0].description}</p>
                                </div>
                                <div className={time>'06' && time<'19' ?'climate':'climate2'}>
                                  <p>{Math.round(weather.main.temp_max-273.15)}&deg;C</p>
                                  <p>Max. temp</p>
                                </div>
                                <div className={time>'06' && time<'19' ?'climate':'climate2'}>
                                  <p>{Math.round(weather.main.temp_min-273.15)}&deg;C</p>
                                  <p>Min. temp</p>
                                </div>
                                <div className={time>'06' && time<'19' ?'climate':'climate2'}>
                                  <p>{Math.round(weather.main.humidity)}</p>
                                  <p>Humidity</p>
                                </div>
                          </div>
                      </>
                    : 
                    'Sorry,Server is busy'
                  }
              </div>
          {finalCommentrev.map((singlePost)=>(
            <Link to={`/home/post/${singlePost.id}`}>
              <div className='post'>
                {(singlePost.message).length > 270 ? 
                  <>
                      <div className='feedUserInfo'>
                          {singlePost.profileImages
                                  ? 
                                    <img style={{height:'70%'}} src={singlePost.profileImages} alt=''></img>      
                                  : 
                                    <img style={{height:'70%'}} src={require('../images/userIcon.png')}></img>
                          }
                          <h2>@{singlePost.userName}</h2>
                      </div>
                      <h3>{singlePost.title.toUpperCase()}</h3>
                      <p>{singlePost.content.slice(0,271)+"..."}</p>
                      <div className={singlePost.img ? 'feedImg' : 'feedImg1'}>
                          <img src={singlePost.img} alt='' />
                      </div>
                  </>                  
                  : 
                  <>
                      <div className='feedUserInfo'>
                          {singlePost.profileImages
                                  ? 
                                    <img style={{height:'70%'}} src={singlePost.profileImages} alt=''></img>      
                                  : 
                                    <img style={{height:'70%'}} src={require('../images/userIcon.png')}></img>
                          }
                          <h2>@{singlePost.userName}</h2>
                      </div>
                      <h3>{singlePost.title.toUpperCase()}</h3>
                      <p>{singlePost.content}</p>
                      <div className={singlePost.img ? 'feedImg' : 'feedImg1'}>
                          <img src={singlePost.img} alt='' />
                    </div>
                  </>
                }
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Feed