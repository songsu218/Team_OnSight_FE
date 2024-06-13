import './css/my_reset.css';
import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Main from './pages/Main';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MyPage from './pages/MyPage';
import SearchPage from './pages/SearchPage';
import Crew from './pages/Crew';
import Challenge from './pages/Challenge';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signinpage" element={<SignInPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Challenge" element={<Challenge />} />
      </Routes>
    </div>
  );
}

export default App;
