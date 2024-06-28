import { useEffect, useState } from "react";
import style from "../css/Header.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUserAllInfo, setUserAllInfo } from "../store/userStore";
import { persistor } from "../store/store";

const Header = () => {
  const user = useSelector((state) => state.user.userInfo);
  const [hoverImg, setHoverImg] = useState({
    link1: false,
    link2: false,
    link3: false,
    link4: false,
    link5: false,
  });

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8000/user/profile`, {
          credentials: "include",
        });
        if (response.ok) {
          const userInfo = await response.json();
          dispatch(setUserAllInfo(userInfo));
        } else {
          dispatch(clearUserAllInfo());
        }
      } catch (error) {
        console.error("error", error);
        dispatch(clearUserAllInfo());
      }
    };

    const cookies = document.cookie.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    }, []);

    if (!user && cookies["onSightToken"]) {
      fetchProfile();
    }
  }, [dispatch, location.pathname, user]);

  // console.log("유저 정보:", user);
  const username = user ? user.id : null;
  const nickname = user ? user.nick : null;

  const signout = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/user/logout`, {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        dispatch(setUserAllInfo(null));
        persistor.purge();
        alert("로그아웃 되었어요");
        navigate("/");
        // navigate("/login");
      } else {
        console.error("fail", response.statusText);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  const MouseHover = (link) => {
    setHoverImg((prevState) => ({ ...prevState, [link]: true }));
  };

  const MouseLeave = (link) => {
    setHoverImg((prevState) => ({ ...prevState, [link]: false }));
  };

  return (
    <header className={style.gnb}>
      <div>
        <h1>
          <div>
            <Link to="/">
              <img src="img/logo.png" alt="" />
            </Link>
          </div>
        </h1>
        <nav>
          <div className={style.holdBar}>
            <Link
              to="/SearchPage"
              onMouseEnter={() => MouseHover("link1")}
              onMouseLeave={() => MouseLeave("link1")}
            >
              <img
                src={hoverImg.link1 ? "/img/eholdr.png" : "/img/holdr.png"}
                alt=""
              />
              <span style={{ color: hoverImg.link1 ? "#FF454A" : "#FFFFFF" }}>
                암장찾기
              </span>
            </Link>
            <Link
              to="/crew"
              onMouseEnter={() => MouseHover("link2")}
              onMouseLeave={() => MouseLeave("link2")}
            >
              <img
                src={hoverImg.link2 ? "/img/eholdb.png" : "/img/holdb.png"}
                alt=""
              />
              <span style={{ color: hoverImg.link2 ? "#0295CF" : "#FFFFFF" }}>
                크루
              </span>
            </Link>
            <Link
              to="/challenge"
              onMouseEnter={() => MouseHover("link3")}
              onMouseLeave={() => MouseLeave("link3")}
            >
              <img
                src={hoverImg.link3 ? "/img/eholdy.png" : "/img/holdy.png"}
                alt=""
              />
              <span style={{ color: hoverImg.link3 ? "#FFD02C" : "#FFFFFF" }}>
                챌린지
              </span>
            </Link>
            <Link
              to="/rank"
              onMouseEnter={() => MouseHover("link4")}
              onMouseLeave={() => MouseLeave("link4")}
            >
              <img
                src={hoverImg.link4 ? "/img/eholdg.png" : "/img/holdg.png"}
                alt=""
              />
              <span style={{ color: hoverImg.link4 ? "#A2D262" : "#FFFFFF" }}>
                랭킹
              </span>
            </Link>
            <Link
              to="/mypage"
              onMouseEnter={() => MouseHover("link5")}
              onMouseLeave={() => MouseLeave("link5")}
            >
              <img
                src={hoverImg.link5 ? "/img/eholdp.png" : "/img/holdp.png"}
                alt=""
              />
              <span style={{ color: hoverImg.link5 ? "#BE65FF" : "#FFFFFF" }}>
                MY
              </span>
            </Link>
          </div>
        </nav>
      </div>
      <div className={style.viewMore}>
        {username ? (
          <Link to="/" onClick={signout}>
            <i className="fa-solid fa-sign-out-alt"></i>
            <div className={style.nickBox}>
              <span>{nickname}님</span>
              <span>로그아웃</span>
            </div>
          </Link>
        ) : (
          <Link to="/signinpage">
            <i className="fa-solid fa-gear"></i>
            <span>로그인</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
