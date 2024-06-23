import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "../css/Profile.module.css";
import InfoModal from "../components/modal/InfoModal";
import InfoUpModal from "../components/modal/InfoUpModal";
import PwUpModal from "../components/modal/PwUpModal";
import WithdrawalModal from "../components/modal/WithdrawalModal";

const Profile = () => {
  const [modalType, setModalType] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const user = useSelector((state) => state.user.userInfo);

  const maskString = (str) => {
    if (str.length <= 1) return str;
    const visibleLength = 2; // 표시할 문자 수
    const maskedLength = str.length - visibleLength;
    return str.substring(0, visibleLength) + "*".repeat(maskedLength);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`http://localhost:8000/user/info`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user }),
        });

        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        } else {
          console.error("Failed to fetch user info");
        }
      } catch (err) {
        console.error("Error fetching user info", err);
      }
    };

    if (user) {
      fetchUserInfo();
    }
  }, [user]);

  const openModal = (type, e) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div>
      <div className="con1">
        <main className={`mw`}>
          <section className={style.tit}>
            <h2>나의 정보관리</h2>
            <nav className={style.navCon}>
              <ol>
                <li>
                  <Link to="/mypage">마이홈</Link>
                </li>
                <li>나의 정보관리</li>
              </ol>
            </nav>
          </section>
          <section className={style.sec}>
            <h3 className={style.titSub1}>기본정보</h3>
            {userInfo ? (
              <ul className={style.area}>
                <li className={style.info1}>
                  <div>
                    <img
                      src={`http://localhost:8000${userInfo.thumbnail}`}
                      alt="프로필 사진"
                    />
                  </div>
                </li>
                <li>
                  <div>아이디</div>
                  <div>{maskString(userInfo.id)}</div>
                </li>
                <li>
                  <div>닉네임</div>
                  <div>{maskString(userInfo.nick)}</div>
                </li>
              </ul>
            ) : (
              <p>사용자 정보를 불러오는 중입니다...</p>
            )}
            <div className={style.areaBtn}>
              <button onClick={() => openModal("info")}>수정하기</button>
            </div>
          </section>
          <section className={style.sec}>
            <div className={`${style.tit} ${style.titPw}`}>
              <h3 className={`${style.titSub1} ${style.titPwSub1}`}>
                비밀번호
              </h3>
              <p className={style.pw}>********</p>
            </div>
            <div className={style.areaBtn}>
              <button onClick={() => openModal("password")}>수정하기</button>
            </div>
          </section>
          <div className={style.subCon2}>
            <button
              className={style.linkBtn}
              onClick={() => openModal("withdrawal")}
            >
              회원 탈퇴하기
            </button>
          </div>
        </main>
      </div>
      {modalType === "info" && (
        <InfoModal
          onClose={closeModal}
          onPwCheck={() => openModal("infoUpdate")}
        />
      )}
      {modalType === "infoUpdate" && <InfoUpModal onClose={closeModal} />}
      {modalType === "password" && <PwUpModal onClose={closeModal} />}
      {modalType === "withdrawal" && <WithdrawalModal onClose={closeModal} />}
    </div>
  );
};

export default Profile;
