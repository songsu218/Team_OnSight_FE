import style from '../css/CrewDetail.module.css';
import { NavLink, Routes, Route, useParams } from 'react-router-dom';
import CrewHome from '../components/CrewHome';
import CrewWrite from '../components/CrewWrite';
import CrewManage from '../components/CrewManage';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const CrewDetail = () => {
  const { crewId } = useParams();
  const crew = useSelector((state) => state.crew.crewInfo);
  const users = useSelector((state) => state.userAll.userAllInfo);

  const selectedCrew = crew.find((c) => c._id === crewId);
  console.log(selectedCrew);

  useEffect(() => {
    if (selectedCrew) {
      const members = selectedCrew.members.map((memberId) => {
        return users.find((user) => user.id === memberId);
      });
      console.log(members);
    }
  }, [selectedCrew, users]);

  if (!selectedCrew) {
    return <p>메인페이지 갔다오세요</p>;
  }

  // 이거 없으니까 새로고침할 때마다 리덕스 초기화되고 빨간화면 떠서 추가함
  // 나중에 redux persist 쓰거나 local storage 쓰게되면 삭제할 예정

  return (
    <div className={`${style.mainCrew} viewCon`}>
      <div className={style.leftCon}>
        <h3>크루원 찾기</h3>
        <div className={style.leftConinner}>
          <div className={style.searchCon}>
            <input type="text" placeholder=" 크루원 검색" />
            <button className={style.iconButton}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <ul className={style.memberCon}>
            {selectedCrew &&
              selectedCrew.members.map((memberId) => {
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
                  <NavLink
                    to={`/crewdetail/${crewId}/crewwrite`}
                    aria-current={({ isActive }) =>
                      isActive ? 'page' : undefined
                    }
                  >
                    글쓰기
                  </NavLink>
                </li>
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
