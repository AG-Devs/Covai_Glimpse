import React,{useState} from 'react'
import './Search.css'
import { IoSearchOutline } from "react-icons/io5";

const Search = ({setsearch,search}) => {
 
  return (
    <div className='search'>
          <form>
            <label htmlFor='search'>search:</label>
            <input 
            id='search' 
            type='text' 
            placeholder='search'
            value={search}
            onChange={((e)=>{setsearch(e.target.value)})}
            />
          </form>
          <IoSearchOutline />
    </div>
  )
}

export default Search