import styleHd from '../css/MyPageHd.module.css';
import styleInfo from '../css/MyPageInfo.module.css';
import MyPageList1 from '../components/MyPageList1';
import MyPageList2 from '../components/MyPageList2';
import MyPageList3 from '../components/MyPageList3';
import MyPageList4 from '../components/MyPageList4';
import { useSelector } from 'react-redux';
import { useNavigate, NavLink, Link, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

const MyPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    if (!user) {
      // 새로고침부분 보류
      alert('로그인 후 사용가능해요. 로그인 하시겠어요?');
      navigate('/signinpage');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user) {
      const imgBox = document.querySelector(`.${styleInfo.tit}`);
      if (imgBox) {
        imgBox.style.setProperty('--thumbnail-url', `url(http://localhost:8000${user.thumbnail})`);
      }
    }
  }, [user]);

  return (
    <div className={`con1`}>
      <main className={`mw`}>
        <section className={styleHd.hdSec}>
          <h2>마이페이지</h2>
          <nav className={styleHd.navSec}>
            <ul>
              <li>
                <NavLink to="/mypage/home" className={({ isActive }) => (isActive ? 'active' : '')}>
                  마이홈
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mypage/crews"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  암장
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mypage/feeds"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  피드
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mypage/records"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  기록
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>
        <div className={styleInfo.infoCon}>
          <div>
            <p className={styleInfo.tit}>
              <span>
                <i>{user ? user.nick : 'null'}</i> 님,
              </span>{' '}
              반갑습니다! <Link to="/Profile">나의 정보관리</Link>
            </p>
          </div>
        </div>
        <Routes>
          <Route path="home" element={<MyPageList1 />} />
          <Route path="feeds" element={<MyPageList3 />} />
          <Route path="records" element={<MyPageList2 />} />
          <Route path="crews" element={<MyPageList4 />} />
          <Route path="*" element={<MyPageList1 />} />
        </Routes>
      </main>
    </div>
  );
};

export default MyPage;
