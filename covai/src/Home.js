import React, { useState } from 'react'
import Header from './homeComponents/Header'
import LeftSideBar from './homeComponents/LeftSideBar'
import RightSideBar from './homeComponents/RightSideBar'
import { Outlet } from 'react-router-dom'

const Home = ({userName,data,navigate,toggle,settoggle,setsearch,search,profileImage,userDetailsArray}) => {

  return (
    <div>
        <Header 
          settoggle={settoggle}
          search={search}
          setsearch={setsearch}
        />
        <LeftSideBar 
            userName={userName}
            settoggle={settoggle}
            profileImage={profileImage}
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