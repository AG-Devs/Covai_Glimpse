import React from 'react'
import './Profile.css'

const Profile = ({profileName}) => {

    const yourPosts = [ {name:'jumping from clif',content:"Meaning. Road refers to the path or route that's often built between or within cities or towns for easy transportation. Street refers to a pathway for the public that's usually constructed with houses on either side"},
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
    <div className='profilePage'>
        <div className='userDetails'>
            <div className='profilePic'>
                <img src={require('.././images/userIcon.png')} alt='logo'></img>
                <h1>hi</h1>
            </div>
            <div className='userAnalytics'>
                <div className='analytics'>
                    <h2>100</h2>
                    <h3>Posts</h3>
                </div >
                <div className='analytics'>
                    <h2>100</h2>
                    <h3>Followers</h3>
                </div>
                <div className='analytics'>
                    <h2>100</h2>
                    <h3>Likes</h3>
                </div>
            </div>
        </div>
        <div className='yourPostsDisplay'>
            {yourPosts.map((singlePost)=>(
                <div className='posts'>
                    <h3>{singlePost.name.toUpperCase()}</h3>
                    <p>{singlePost.content}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Profile