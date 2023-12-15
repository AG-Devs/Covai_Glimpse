import React, { useEffect,useState } from 'react'
import './Feed.css'
import axios from 'axios'
import { format } from 'date-fns'

const Feed = () => {

  useEffect(()=>{
    weatherApi()
  },[])

  const city_name = 'Coimbatore'
  const [weather,setweather]=useState('')
  const time = format(new Date(), 'HH')

  const weatherApi= async ()=>{
    try{
      const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=369251809b1255cfcdeef27792d91192`)
      console.log(weather.data)
      setweather(weather.data)
    }
    catch(err){
      console.log(err)
    }
}

  const posts = [ {name:'jumping from clif',content:"Meaning. Road refers to the path or route that's often built between or within cities or towns for easy transportation. Street refers to a pathway for the public that's usually constructed with houses on either side"},
                  {name:'jumping from clif',content:"Meaning. Road refers to the path or route that's often built between or within cities or towns for easy transportation. Street refers to a pathway for the public that's usually constructed with houses on either side"},
                  {name:'jumping from clif',content:"Meaning. Road refers to the path or route that's often built between or within cities or towns for easy transportation. Street refers to a pathway for the public that's usually constructed with houses on either side"},
                  {name:'jumping from clif',content:"Meaning. Road refers to the path or route that's often built between or within cities or towns for easy transportation. Street refers to a pathway for the public that's usually constructed with houses on either side"},
                  {name:'jumping from clif',content:"Meaning. Road refers to the path or route that's often built between or within cities or towns for easy transportation. Street refers to a pathway for the public that's usually constructed with houses on either side"},
                  {name:'jumping from clif',content:"Meaning. Road refers to the path or route that's often built between or within cities or towns for easy transportation. Street refers to a pathway for the public that's usually constructed with houses on either side"},
                  {name:'jumping from clif',content:"Meaning. Road refers to the path or route that's often built between or within cities or towns for easy transportation. Street refers to a pathway for the public that's usually constructed with houses on either side"},
                  {name:'jumping from clif',content:"Meaning. Road refers to the path or route that's often built between or within cities or towns for easy transportation. Street refers to a pathway for the public that's usually constructed with houses on either side"},
                  {name:'road patch',content:"Meaning. Road refers to the path or route that's often built between or within cities or towns for easy transportation. Street refers to a pathway for the public that's usually constructed with houses on either side"}
                ]

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
          {posts.map((singlePost)=>(
              <div className='post'>
                  <h3>{singlePost.name.toUpperCase()}</h3>
                  <p>{singlePost.content}</p>
              </div>
          ))}
      </div>
    </div>
  )
}

export default Feed