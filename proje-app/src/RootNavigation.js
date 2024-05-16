import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProfilePanel from './pages/Profile/ProfilePanel';
import HomePage from './pages/Home/HomePage';
import VardiyaPanel from './pages/Vardiya/VardiyaPanel';




function RootNavigation() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/profile-panel' element={<ProfilePanel/>} />     
          <Route path='/vardiya-panel' element={<VardiyaPanel/>} />     


        </Routes>
    </BrowserRouter>
  );
}

export default RootNavigation;