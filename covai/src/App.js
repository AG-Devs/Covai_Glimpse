import { useState } from 'react';
import {Routes,Route, useNavigate} from 'react-router-dom';
import './App.css';
import Sign from './Signing/Sign';
import Signin from './Signing/Signin';
import Home from './Home';
import Notification from './pages/Notification';
import NewPost from './pages/NewPost';
import Profile from './pages/Profile';
import Feed from './homeComponents/Feed';
import TouristPlaces from './pages/TouristPlaces';
import Post from './pages/Post';
import EditProfile from './pages/EditProfile' 
import TermsAndConditions from './TermsAndConditions';

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
  const[profileImage,setprofileImage]=useState(null)
  const[likeCount,setlikeCount]=useState(null)
  const[dislikeCount,setdislikeCount]=useState(null)
  const[tick,settick]=useState(false)
  const [stateChecker,setstateChecker]=useState(false)

  const handleProfileVideo=((e)=>{
    setprofileVideo(URL.createObjectURL(e.target.files[0]))
    settick(true)
  })


  const [finalComment,setfinalComment] = useState([{id:0,userName:'Covai_Glimpse',title:"welcome",img:null,message:"how are you?",time:'16-12-2023/20-08',likeCount:0,disLikeCount:0, postComment:[{id1:1,userName:'Covai_Glimpse',Comment:'hi'}]}])
  const [userDetailsArray,setuserDetailsArray] = useState([{id:0,userName:userName,password:Password,mobilenumber:mobilenumber,age:age,gmail:gmail,gender:gender,profileImage:profileImage,profileVideo:profileVideo}])

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
                profileImage={profileImage}
                userDetailsArray={userDetailsArray}
              />
            }>
                 <Route index element={<Feed 
                                          finalComment={finalComment.filter((single)=>(
                                              single.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                                          ))}
                                          setfinalComment = {setfinalComment}
                                          profileImage={profileImage}
                                          stateChecker={stateChecker}
                                        />} 
                 /> 
                 <Route path='profile' element={<Profile 
                                                    userName={userName}
                                                    finalComment={finalComment}
                                                    setprofileVideo={setprofileVideo}
                                                    profileImage={profileImage}
                                                    setprofileImage={setprofileImage}
                                                    profileVideo={profileVideo}
                                                    settoggle={settoggle}
                                                    userDetailsArray={userDetailsArray}
                                                />} 
                  />
                 <Route path='notification' element={<Notification />} />
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
                                                />} 
                 />
                 <Route path='touristspots' element={<TouristPlaces settoggle={settoggle} />} />
                 <Route path= {'post/:id'} element={<Post 
                                                          finalComment={finalComment}
                                                          setfinalComment={setfinalComment}
                                                          userName={userName}
                                                          profileImage={profileImage}
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