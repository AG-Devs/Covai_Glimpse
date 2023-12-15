import React from 'react'
import './Feed.css'

const Feed = () => {

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