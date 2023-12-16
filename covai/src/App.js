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
  const [toggle,settoggle]=useState(true)
  const[search,setsearch]=useState('')
  const[mobilenumber,setmobilenumber]=useState('')
  const[gmail,setgmail]=useState('')
  const[gender,setgender]=useState('')
  const[age,setage]=useState('')
  const[profileVideo,setprofileVideo]=useState('')
  const[profileImage,setprofileImage]=useState('')

  const handleProfileVideo=((e)=>{
    setprofileVideo(URL.createObjectURL(e.target.files[0]))
  })


  const [finalComment,setfinalComment] = useState([{id:0,userName:'Covai_Glimpse',title:"welcome",content:"how are you?",time:'16-12-2023/20-08',likeCount:0,disLikeCount:0, postComment:[{id1:1,userName:'Covai_Glimpse',Comment:'hi'}]}])

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
                setuserName={setuserName}
                navigate={navigate}
                setdata={setdata}
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
              />
            }>
                 <Route index element={<Feed 
                                          finalComment={finalComment.filter((single)=>(
                                            single.title.toLowerCase().includes(search.toLowerCase())
                                          ))}
                                        />} 
                 /> 
                 <Route path='profile' element={<Profile 
                                                    userName={userName}
                                                    finalComment={finalComment}
                                                    setprofileVideo={setprofileVideo}
                                                    profileImage={profileImage}
                                                    setprofileImage={setprofileImage}
                                                    profileVideo={profileVideo}
                                                />} 
                  />
                 <Route path='notification' element={<Notification />} />
                 <Route path='newpost' element={<NewPost 
                                                    userName={userName}
                                                    navigate={navigate}
                                                    settoggle={settoggle}
                                                    finalComment={finalComment}
                                                    setfinalComment={setfinalComment}
                                                />} 
                 />
                 <Route path='touristspots' element={<TouristPlaces settoggle={settoggle} />} />
                 <Route path= {'post/:id'} element={<Post 
                                                          finalComment={finalComment}
                                                          setfinalComment={setfinalComment}
                                                          userName={userName}
                                                      />} 
                 />
                <Route path='editprofile' element={<EditProfile 
                                                   setmobilenumber={setmobilenumber}
                                                   setgmail={setgmail}
                                                   setgender={setgender}
                                                   setage={setage}
                                                   setprofileVideo={setprofileVideo}
                                                   handleProfileVideo={handleProfileVideo}
                                                   mobilenumber={mobilenumber}
                                                   gmail={gmail}
                                                   gender={gender}
                                                   age={age}
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