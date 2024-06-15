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
import ChallengeDetail from './pages/ChallengeDetail';

function App() {
  return (
    <div>
      <Header />
      <div className="viewCon">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signinpage" element={<SignInPage />} />
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/challenge/:challenge_id/:challenge_name" element={<ChallengeDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
