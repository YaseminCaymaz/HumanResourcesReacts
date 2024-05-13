import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProfilePanel from './pages/Profile/ProfilePanel';
import App from './App'



function RootNavigation() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/profile-panel' element={<ProfilePanel/>} />       
        </Routes>
    </BrowserRouter>
  );
}

export default RootNavigation;