import React, { useState } from 'react';
import style from '../css/SignInPage.module.css';

const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;

const SignInPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message1, setMessage1] = useState('');
  const [redirect, setRedirect] = useState(false);

  const SignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
        credentials: 'include',
      });

      const data = await response.json();

      if (data.id) {
        setRedirect(true);
      }
      if (data.message === 'nouser' || data.message === 'failed') {
        setMessage1('아이디 또는 비밀번호가 맞지 않습니다.');
      }

      // 나중에 한줄로
    } catch (error) {
      console.error('Error:', error);
      setMessage1('로그인 중 오류가 발생했습니다.');
    }
  };
  const kakaoLogin = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoApiKey);
    }

    window.Kakao.Auth.login({
      success: function (authObj) {
        setRedirect(true);
      },
      fail: function (err) {
        console.error(err);
      },
    });
  };

  // 카카오 닉네임 프로필 사진 받기

  if (redirect) {
    //   return <Navigate to="/" />;
  }

  return (
    <main className={`mw ${style.SignInPage}`}>
      <form onSubmit={SignIn}>
        <h2>로그인</h2>
        <label>아이디</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className={style.errorMessage}>{message1}</span>
        <button type="submit">로그인</button>
      </form>
      <button className={style.kakaoButtom} onClick={kakaoLogin}>
        카카오로 로그인
      </button>
      <a href="">계정이 없으신가요?</a>
    </main>
  );
};

export default SignInPage;
