import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './RightSideBar.css'
import { format } from 'date-fns'

const RightSideBar = () => {

  useEffect(()=>{
    weatherApi()
    NewsApi()
  },[])

  const city_name = 'Coimbatore'
  const [weather,setweather]=useState('')
  const [News,setNews]=useState([])

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

  const NewsApi= async ()=>{
      try{
        const News = await axios.get(`https://newsapi.org/v2/everything?q=coimbatore&from=${finalDate}-1&sortBy=publishedAt&apiKey=fc6937a1f789403881b2fcca1d5d319e`)
        console.log(News.data.articles)
        setNews(News.data.articles)
      }
      catch(err){
        console.log(err)
      }
  }
 
  const time = format(new Date(), 'HH')
  const date=format(new Date(), 'yyyy-MM')
  const date1= format(new Date(), 'dd')
  console.log(date1)
  
  const finalDate = date.slice(5,8) === '01' ? (Number(date.slice(0,4))-1).toString()+(Number(date.slice(5,8))+11).toString() : date1 === '01' ? date.slice(0,5)+(Number(date.slice(5,8))-1).toString() : date


  return (
    <div className='RightSideBar'>
              <div className={time>'06' && time<'19' ?'weather':'weather2'}>
                  <h3>Coimbatore</h3>
                  {
                    weather ? 
                    <>
                          <div className='weatherComponents'>
                                <div className={time>'06' && time<'19' ?'climate':'climate2'}>
                                  <p>{Math.round(weather.main.temp_max-273.15)}&deg;C</p>
                                  <p>Max.</p>
                                  <p>temp</p>
                                </div>
                                <div className={time>'06' && time<'19' ?'climate':'climate2'}>
                                  <p>{Math.round(weather.main.temp_min-273.15)}&deg;C</p>
                                  <p>Min.</p>
                                  <p>temp</p>
                                </div>
                                <div className={time>'06' && time<'19' ?'climate':'climate2'}>
                                  <p>{Math.round(weather.main.humidity)}</p>
                                  <p>Humidity</p>
                                </div>
                          </div>
                          <div className='climate1'>
                                <img id="wicon" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather icon"></img>
                                <p className={time>'06' && time<'19' ?'climateName':'climateName2'}>{weather.weather[0].description}</p>
                          </div>
                      </>
                    : 
                    'Sorry,Server is busy'
                  }
              </div>

              <div className='news'>
                <h2>Covai Top News:</h2>
                  {News.map((article)=>(
                      <a href={article.url}>
                        <div className='news1'>
                            <img src={article.urlToImage} ></img>
                            <p>{article.title}</p>
                        </div>
                      </a>
                  ))}
              </div>
      
    </div>
  )
}

export default RightSideBar