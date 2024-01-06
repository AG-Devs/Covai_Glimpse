import { useState } from 'react';
import {Routes,Route, useNavigate} from 'react-router-dom';
import './App.css';
import Sign from './Signing/Sign';
import Signin from './Signing/Signin';
import Home from './Home';
import Notification from './pages/Notification'
import NewPost from './pages/NewPost';
import Profile from './pages/Profile';
import Feed from './homeComponents/Feed';
import TouristPlaces from './pages/TouristPlaces';
import Post from './pages/Post';
import EditProfile from './pages/EditProfile' 
import TermsAndConditions from './TermsAndConditions';
import VProfile from './pages/VProfile';
import FollowedUsers from './pages/FollowedUsers';
import LikedPost from './pages/LikedPost'


function App() {

  const navigate = useNavigate()

  const [data,setdata] = useState('')
  const [userName,setuserName]=useState('')
  const [Password,setPassword]=useState('')
  const [toggle,settoggle]=useState(true)
  const[search,setsearch]=useState('')
  const[mobilenumber,setmobilenumber]=useState('')
  const[gmail,setgmail]=useState(null)
  const[gender,setgender]=useState(null)
  const[age,setage]=useState(null)
  const[profileVideo,setprofileVideo]=useState(null)
  const[profileImage1,setprofileImage1]=useState(null)
  const[likeCount,setlikeCount]=useState(0)
  const[dislikeCount,setdislikeCount]=useState(0)
  const[followers,setfollowers]=useState(0)
  const[likedPosts,setlikedPosts]=useState([{id_i:0,id_p:0}])
  const[dislikedPosts,setdislikedPosts]=useState([{id_i:0,postId:0}])
  const[commentedPosts,setcommentedPosts]=useState([{id_i:0,postId:0}])
  const[followedUsers,setfollowedUsers]=useState([])
  const [Notifications,setNotifications]=useState([])
  const[tick,settick]=useState(false)
  const [stateChecker,setstateChecker]=useState(false)
  const [visit,setvisit] = useState('')

  const[like,setLike]=useState(false)
  const[like1,setLike1]=useState(false)

  const [live2,setlive2]=useState(false)

  const handleProfileVideo=((e)=>{
    setprofileVideo(URL.createObjectURL(e.target.files[0]))
    settick(true)
  })


  const [finalComment,setfinalComment] = useState([{id:0,userName:'Covai_Glimpse',profileImages:null,title:"welcome",img:null,message:"how are you?",time:'16-12-2023/20-08',likeCount:0,disLikeCount:0, postComment:[{id1:1,userName:'Covai_Glimpse',Comment:'hi'}]}])
  const [userDetailsArray,setuserDetailsArray] = useState([{id:0,userName:userName,password:Password,mobilenumber:mobilenumber,age:age,gmail:gmail,gender:gender,profileImage1:profileImage1,profileVideo:profileVideo,followers:followers,likedPosts:likedPosts,dislikedPosts:dislikedPosts,commentedPosts:commentedPosts,Notification:[{messages:'no message'}]}])

  return (
    <div className="App">
    <Routes> 
        <Route path='/' element={
              <Signin
                setuserName={setuserName}
                navigate={navigate}
                setdata={setdata}
              />
            }
        />
        <Route path='/signup' element={
              <Sign 
                userName={userName}
                setuserName={setuserName}
                Password={Password}
                setPassword={setPassword}
                navigate={navigate}

                data={data}
                setdata={setdata}

                userDetailsArray={userDetailsArray}
                setuserDetailsArray={setuserDetailsArray}
                handleProfileVideo={handleProfileVideo}
                mobilenumber={mobilenumber}
                gmail={gmail}
                gender={gender}
                age={age}
                followers={followers}
                likedPosts={likedPosts}
                dislikedPosts={dislikedPosts}
                commentedPosts={commentedPosts}
                followedUsers={followedUsers}
                Notifications={Notifications}
              />
            }
        />
        <Route path='/home' element={
              <Home 
                userName={userName}
                data={data}
                navigate = {navigate}
                toggle={toggle}
                settoggle={settoggle}
                search={search}
                setsearch={setsearch}
                profileImage1={profileImage1}
                userDetailsArray={userDetailsArray}
                setuserDetailsArray={setuserDetailsArray}
                live2={live2}
                setlive2={setlive2}
              />
            }>
                 <Route index element={<Feed 
                                          finalComment={finalComment.filter((single)=>(
                                              single.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                                          ))}
                                          setfinalComment = {setfinalComment}
                                          profileImage1={profileImage1}
                                          stateChecker={stateChecker}
                                          live2={live2}
                                          setlive2={setlive2}
                                          userName={userName}
                                          userDetailsArray={userDetailsArray}
                                          setuserDetailsArray={setuserDetailsArray}
                                        />} 
                 /> 
                 <Route path='followedusers' element={<FollowedUsers
                 
                                           userDetailsArray={userDetailsArray}
                                           userName={userName}
                                           setvisit={setvisit}
                                           setuserDetailsArray={setuserDetailsArray}
                                        />}
                                       
                                    
                 />

                 <Route path='likedposts' element={<LikedPost
                                          finalComment={finalComment.filter((single)=>(
                                            single.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                                        ))}
                                        setfinalComment = {setfinalComment}
                                        profileImage1={profileImage1}
                                        stateChecker={stateChecker}
                                        live2={live2}
                                        setlive2={setlive2}
                                        userName={userName}
                                        userDetailsArray={userDetailsArray}
                                        setuserDetailsArray={setuserDetailsArray}
                                                  />}
                 
                 />

                 <Route path='profile' element={<Profile 
                                                    userName={userName}
                                                    finalComment={finalComment}
                                                    setprofileVideo={setprofileVideo}
                                                    profileImage1={profileImage1}
                                                    setprofileImage1={setprofileImage1}
                                                    profileVideo={profileVideo}
                                                    settoggle={settoggle}
                                                    userDetailsArray={userDetailsArray}
                                                    setuserDetailsArray={setuserDetailsArray}
                                                    live2 = {live2}
                                                    setlive2 = {setlive2}
                                                    visit={visit}
                                                    
                                                />} 
                  />
                  <Route path='visitprofile' element={<VProfile 
                                                  userName={userName}
                                                  setuserName={setuserName}
                                                  finalComment={finalComment}
                                                  setprofileVideo={setprofileVideo}
                                                  profileImage1={profileImage1}
                                                  setprofileImage1={setprofileImage1}
                                                  profileVideo={profileVideo}
                                                  settoggle={settoggle}
                                                  userDetailsArray={userDetailsArray}
                                                  setuserDetailsArray={setuserDetailsArray}
                                                  visit={visit}
                                                  Notifications={Notifications}
                                                  setNotifications={setNotifications}
                                                  followedUsers={followedUsers}
                                                  setfollowedUsers={setfollowedUsers}
                                                />} 
                  />
                 <Route path='notification' element={<Notification 
                                                        userName={userName}
                                                        userDetailsArray={userDetailsArray}
                                                    />} 
                 />
                 <Route path='newpost' element={<NewPost 
                                                    userName={userName}
                                                    navigate={navigate}
                                                    settoggle={settoggle}
                                                    finalComment={finalComment}
                                                    setfinalComment={setfinalComment}
                                                    dislikeCount = {dislikeCount}
                                                    likeCount = {likeCount}
                                                    stateChecker={stateChecker}
                                                    setstateChecker={setstateChecker}
                                                    userDetailsArray={userDetailsArray}
                                                />} 
                 />
                 <Route path='touristspots' element={<TouristPlaces settoggle={settoggle} />} />
                 <Route path= {'post/:id'} element={<Post 
                                                          userDetailsArray={userDetailsArray}
                                                          finalComment={finalComment}
                                                          setfinalComment={setfinalComment}
                                                          userName={userName}
                                                          profileImage1={profileImage1}
                                                          stateChecker={stateChecker}
                                                          setstateChecker={setstateChecker}
                                                          like={like}
                                                          setLike={setLike}
                                                          like1={like1}
                                                          setLike1={setLike1}
                                                          visit={visit}
                                                          setvisit={setvisit}
                                                          live2={live2}
                                                          setlive2={setlive2}
                                                      />} 
                 />
                <Route path='editprofile' element={<EditProfile 
                                                   setmobilenumber={setmobilenumber}
                                                   setgmail={setgmail}
                                                   setgender={setgender}
                                                   setage={setage}
                                                   profileVideo={profileVideo}
                                                   setprofileVideo={setprofileVideo}
                                                   handleProfileVideo={handleProfileVideo}
                                                   tick={tick}
                                                   settick={settick}
                                                   settoggle={settoggle}
                                                   userName={userName}
                                                   userDetailsArray={userDetailsArray}
                                                  />} 
                />
        </Route>
        
        <Route path='/TermsAndConditions' element={
              <TermsAndConditions />
            }
        />
    </Routes> 
    </div>
  );
}

export default App;