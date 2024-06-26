import style from '../css/CrewDetail.module.css';
import {
  NavLink,
  Routes,
  Route,
  useParams,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import CrewHome from '../components/CrewHome';
import CrewWrite from '../components/CrewWrite';
import CrewManage from '../components/CrewManage';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const CrewDetail = () => {
  const { crewId } = useParams();
  const crew = useSelector((state) => state.crew.crewInfo);
  const users = useSelector((state) => state.userAll.userAllInfo);
  const user = useSelector((state) => state.user.userInfo);
  const selectedCrew = crew.find((c) => c._id === crewId);
  console.log(selectedCrew);

  const navigate = useNavigate();

  const [crewMember, setCrewMember] = useState(false);
  const [crewAdmin, setCrewAdmin] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);

  const moveToCrew = () => {
    navigate('/crew');
  };

  useEffect(() => {
    if (selectedCrew) {
      setCrewMember(selectedCrew.members.includes(user.id));
      setCrewAdmin(selectedCrew.userId === user.id);
      setFilteredMembers(selectedCrew.members);
    }
  }, [selectedCrew, user]);

  const handleSearch = () => {
    const filtered = selectedCrew.members.filter((memberId) => {
      const memberInfo = users.find((user) => user.id === memberId);
      return memberInfo.nick.includes(searchTerm);
    });
    setFilteredMembers(filtered);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  if (!selectedCrew) {
    return <p>메인페이지 갔다오세요</p>;
  }

  return (
    <div className={`${style.mainCrew} ${toggle ? style.mainCrewToggled : ''}`}>
      <div className={style.leftCon}>
        <h3>크루원 찾기</h3>
        <i
          className={`fa-solid ${toggle ? 'fa-angle-right' : 'fa-angle-left'} ${
            toggle ? style.iconLeft : style.iconRight
          }`}
          onClick={toggleSidebar}
        ></i>
        <div className={style.leftConinner}>
          <div className={style.searchCon}>
            <input
              type="text"
              placeholder=" 크루원 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className={style.iconButton} onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <ul className={`${style.memberCon} ${!crewMember ? style.blur : ''}`}>
            {selectedCrew &&
              filteredMembers.map((memberId) => {
                const memberInfo = users.find((user) => user.id === memberId);
                return (
                  <li key={memberId}>
                    <div className={style.profileBox}>
                      <img
                        src={`http://localhost:8000${memberInfo.thumbnail}`}
                        alt="프로필 사진"
                      />
                    </div>
                    <span>{memberInfo.nick}</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <section className={style.rightCon}>
        <i className="fa-solid fa-xmark" onClick={moveToCrew}></i>
        <div className={style.righttxt}>
          <div className={style.crewName}>
            <h2>{selectedCrew?.name}</h2>
            <span>{selectedCrew?.activityArea}</span>
          </div>
          <div className={style.menu}>
            <nav className={style.page_nav}>
              <ul>
                <li>
                  <NavLink
                    to={`/crewdetail/${crewId}/crewhome`}
                    aria-current={({ isActive }) =>
                      isActive ? 'page' : undefined
                    }
                  >
                    크루홈
                  </NavLink>
                </li>
                <li>
                  {crewMember ? (
                    <NavLink
                      to={`/crewdetail/${crewId}/crewwrite`}
                      aria-current={({ isActive }) =>
                        isActive ? 'page' : undefined
                      }
                    >
                      글쓰기
                    </NavLink>
                  ) : (
                    <a href="#">가입하기</a>
                    // 그냥 a태그 넣어놨음
                  )}
                </li>
                {crewAdmin && (
                  <li>
                    <NavLink
                      to={`/crewdetail/${crewId}/crewmanage`}
                      aria-current={({ isActive }) =>
                        isActive ? 'page' : undefined
                      }
                    >
                      관리하기
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <Routes>
            <Route path="crewhome" element={<CrewHome />} />
            <Route path="crewwrite" element={<CrewWrite />} />
            <Route path="crewmanage" element={<CrewManage />} />
            <Route path="*" element={<CrewHome />} />
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default CrewDetail;
