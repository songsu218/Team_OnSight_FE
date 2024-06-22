import style from '../css/CrewDetail.module.css';
import { NavLink, Routes, Route } from 'react-router-dom';

import CrewHome from '../components/CrewHome';
import CrewWrite from '../components/CrewWrite';
import CrewManage from '../components/CrewManage';

const CrewDetail = () => {
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
            <li>
              <div className={style.profileBox}>
                <img src="/img/test.jpg" alt="" />
              </div>
              <span>닉네임</span>
            </li>
            <li>
              <div className={style.profileBox}>
                <img src="/img/test.jpg" alt="" />
              </div>
              <span>닉네임</span>
            </li>
          </ul>
        </div>
      </div>
      <section className={style.rightCon}>
        <div className={style.righttxt}>
          <div className={style.crewName}>
            <h2>크루명</h2>
            <span>활동지역</span>
          </div>
          <div className={style.menu}>
            <nav className={style.page_nav}>
              <ul>
                <li>
                  <NavLink
                    to="crewhome"
                    aria-current={({ isActive }) =>
                      isActive ? 'page' : undefined
                    }
                  >
                    크루홈
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="crewwrite"
                    aria-current={({ isActive }) =>
                      isActive ? 'page' : undefined
                    }
                  >
                    글쓰기
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="crewmanage"
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
