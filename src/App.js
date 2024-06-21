import "./css/my_reset.css";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MyPage from "./pages/MyPage";
import SearchPage from "./pages/SearchPage";
import Crew from "./pages/Crew";
import Challenge from "./pages/Challenge";
import ChallengeDetail from "./pages/ChallengeDetail";
import CreateCrew from "./pages/CreateCrew";
import CrewDetail from "./pages/CrewDetail";
import Write from "./pages/Write";
import ManageCrew from "./pages/ManageCrew";
import Profile from "./pages/Profile";
import Ranking from "./pages/Ranking";

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
        <Route path="/crew" element={<Crew />} />
        <Route path="/createCrew" element={<CreateCrew />} />
        <Route path="/crewDetail" element={<CrewDetail />} />
        <Route path="/ManageCrew" element={<ManageCrew />} />
        <Route path="/write" element={<Write />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route
          path="/challenge/:challenge_id/:challenge_name"
          element={<ChallengeDetail />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rank" element={<Ranking />} />
      </Routes>
    </div>
  );
}

export default App;
