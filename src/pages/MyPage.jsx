import styleHd from "../css/MyPageHd.module.css";
import styleInfo from "../css/MyPageInfo.module.css";
import MyPageList1 from "../components/MyPageList1";
import MyPageList2 from "../components/MyPageList2";
import MyPageList3 from "../components/MyPageList3";
import { useSelector } from "react-redux";
import { useNavigate, NavLink, Link, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

const MyPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    if (!user) {
      //새로고침부분 보류
      // navigate("/signinpage");
    }
  }, [user, navigate]);

  return (
    <div className={`con1`}>
      <main className={`mw`}>
        <section className={styleHd.hdSec}>
          <h2>마이페이지</h2>
          <nav className={styleHd.navSec}>
            <ul>
              <li>
                <NavLink
                  to="/mypage/home"
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  마이홈
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mypage/feeds"
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  피드
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mypage/records"
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
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
                <i>{user ? user.nick : "null"}</i> 님,
              </span>{" "}
              반갑습니다! <Link to="/Profile">나의 정보관리</Link>
            </p>
          </div>
        </div>
        <Routes>
          <Route path="home" element={<MyPageList1 />} />
          <Route path="feeds" element={<MyPageList3 />} />
          <Route path="records" element={<MyPageList2 />} />
          <Route path="*" element={<MyPageList1 />} />
        </Routes>
      </main>
    </div>
  );
};

export default MyPage;
