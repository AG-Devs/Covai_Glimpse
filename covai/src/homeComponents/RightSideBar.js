import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './RightSideBar.css'
import { format } from 'date-fns'

const RightSideBar = ({navigate}) => {

  useEffect(()=>{
    NewsApi()
  },[])

  
  const [News,setNews]=useState([])

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
 
  const date=format(new Date(), 'yyyy-MM')
  const date1= format(new Date(), 'dd')
  console.log(date1)
  
  const finalDate = date.slice(5,8) === '01' ? (Number(date.slice(0,4))-1).toString()+(Number(date.slice(5,8))+11).toString() : date1 === '01' ? date.slice(0,5)+(Number(date.slice(5,8))-1).toString() : date


  return (
    <div className='RightSideBar'>

              <button className='touristMap' onClick={()=>{navigate('/home/touristspots')}}>
                  <p>Tourist Places</p>
              </button>

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