import React, { useState } from 'react'
import Header from './homeComponents/Header'
import LeftSideBar from './homeComponents/LeftSideBar'
import RightSideBar from './homeComponents/RightSideBar'
import { Outlet } from 'react-router-dom'

const Home = ({profileName,data,navigate,toggle,settoggle}) => {
    console.log(data)
    console.log(typeof(data))

  return (
    <div>
        <Header 
          settoggle={settoggle}
        />
        <LeftSideBar 
            profileName={profileName}
            settoggle={settoggle}
        />        
        {toggle ? <RightSideBar 
                      navigate={navigate} 
                  /> 
                : ''}
        <Outlet />
    </div>
  )
}

export default Home