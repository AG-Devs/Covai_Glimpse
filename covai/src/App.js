import { useState } from 'react';
import {Routes,Route, useNavigate, useParams} from 'react-router-dom';
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
import TermsAndConditions from './TermsAndConditions';

function App() {

  const navigate = useNavigate()
  const id = useParams()
  const Id =Number(id.id)

  const [data,setdata] = useState('')
  const [profileName,setprofileName]=useState('')
  const [toggle,settoggle]=useState(true)

  return (
    <div className="App">
    <Routes> 
        <Route path='/' element={
              <Signin
                setprofileName={setprofileName}
                navigate={navigate}
                setdata={setdata}
              />
            }
        />
        <Route path='/signup' element={
              <Sign 
                setprofileName={setprofileName}
                navigate={navigate}
                setdata={setdata}
              />
            }
        />
        <Route path='/home' element={
              <Home 
                profileName={profileName}
                data={data}
                navigate = {navigate}
                toggle={toggle}
                settoggle={settoggle}
              />
            }>
                 <Route index element={<Feed />} /> 
                 <Route path='profile' element={<Profile profileName={profileName}/>} />
                 <Route path='notification' element={<Notification />} />
                 <Route path='newpost' element={<NewPost />} />
                 <Route path='touristspots' element={<TouristPlaces settoggle={settoggle} />} />
                 <Route path= {`post/:${Id}`} element={<Post />} />

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