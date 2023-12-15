import React, { useState } from 'react'
import Header from './homeComponents/Header'
import LeftSideBar from './homeComponents/LeftSideBar'
import RightSideBar from './homeComponents/RightSideBar'
import { Outlet } from 'react-router-dom'

const Home = ({profileName,data}) => {
    console.log(data)
    console.log(typeof(data))

    const [toggle,settoggle]=useState(true)

  return (
    <div>
        <Header 
          settoggle={settoggle}
        />
        <LeftSideBar 
            profileName={profileName}
            settoggle={settoggle}
        />        
        {toggle ? <RightSideBar /> : ''}
        <Outlet />
    </div>
  )
}

export default Home