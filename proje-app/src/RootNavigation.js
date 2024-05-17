import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProfilePanel from './pages/Profile/ProfilePanel';
import HomePage from './pages/Home/HomePage';
import VardiyaPanel from './pages/Vardiya/VardiyaPanel';
import Employee from'./pages/Employee/Employee';
import CalisanYonetim from './pages/CalisanYonetim/CalisanYonetim';





function RootNavigation() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/profile-panel' element={<ProfilePanel/>} />     
          <Route path='/vardiya-panel' element={<VardiyaPanel/>} />     
          <Route path='/employee' element={<Employee/>} />
          <Route path='/calisan-yonetim' element={<CalisanYonetim/>} />



        </Routes>
    </BrowserRouter>
  );
}

export default RootNavigation;