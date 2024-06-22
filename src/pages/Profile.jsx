import React, { useState, useEffect } from 'react';
import style from '../css/Profile.module.css';
import InfoModal from '../components/modal/InfoModal';
import InfoUpModal from '../components/modal/InfoUpModal';
import PwUpModal from '../components/modal/PwUpModal';
import WithdrawalModal from '../components/modal/WithdrawalModal';

const Profile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
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
                  <a href="">마이홈</a>
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
                      src={userInfo.properties.profile_image}
                      alt="프로필 사진"
                    />
                  </div>
                </li>
                <li>
                  <div>아이디</div>
                  <div>{userInfo.id}</div>
                </li>
                <li>
                  <div>닉네임</div>
                  <div>{userInfo.properties.nickname}</div>
                </li>
              </ul>
            ) : (
              <p>사용자 정보를 불러오는 중입니다...</p>
            )}
            <div className={style.areaBtn}>
              <button onClick={openModal}>수정하기</button>
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
              <button>수정하기</button>
            </div>
          </section>
          <div className={style.subCon2}>
            <button className={style.linkBtn}>회원 탈퇴하기</button>
          </div>
        </main>
      </div>
      {/* {isOpenModal && <InfoModal onClose={closeModal} />} */}
      {/* {isOpenModal && <InfoUpModal onClose={closeModal} />} */}
      {isOpenModal && <WithdrawalModal onClose={closeModal} />}
    </div>
  );
};

export default Profile;
