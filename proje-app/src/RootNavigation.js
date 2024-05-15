import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProfilePanel from './pages/Profile/ProfilePanel';
import HomePage from './pages/Home/HomePage';




function RootNavigation() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/profile-panel' element={<ProfilePanel/>} />       
        </Routes>
    </BrowserRouter>
  );
}

export default RootNavigation;