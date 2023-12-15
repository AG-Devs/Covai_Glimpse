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
import TermsAndConditions from './TermsAndConditions';

function App() {

  const navigate = useNavigate()

  const [data,setdata] = useState('')
  const [profileName,setprofileName]=useState('')

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
              />
            }>
                 <Route index element={<Feed />} /> 
                 <Route path='profile' element={<Profile profileName={profileName}/>} />
                 <Route path='notification' element={<Notification />} />
                 <Route path='newpost' element={<NewPost />} />

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