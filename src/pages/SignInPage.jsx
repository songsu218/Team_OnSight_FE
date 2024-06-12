import React, { useState } from 'react';
import style from '../css/SignInPage.module.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');
  const [redirect, setRedirect] = useState(false);

  const SignIn = async (e) => {
    e.preventDefault();

    if (!/^[a-zA-Z0-9_-]{5,20}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setMessage1('유효한 이메일 주소를 입력해주세요.');
      return;
    } else {
      setMessage1('');
    }

    if (password.length < 4) {
      setMessage2('4자 이상이어야 합니다.');
      return;
    } else {
      setMessage2('');
    }

    try {
      const response = await fetch(`http://localhost:3000/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      const data = await response.json();

      if (data.id) {
        setRedirect(true);
      }
      if (data.message === 'nouser') {
        setMessage1('사용자가 없습니다.');
      }
      if (data.message === 'failed') {
        setMessage2('비밀번호가 맞지 않습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage2('로그인 중 오류가 발생했습니다.');
    }
  };
  const kakaoLogin = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('b8f3fd9911c39555b55c9ff005e6b2a9');
    }

    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log(authObj);
        setRedirect(true);
      },
      fail: function (err) {
        console.error(err);
      },
    });
  };

  if (redirect) {
    //   return <Navigate to="/" />;
  }

  return (
    <main className={`mw ${style.SignInPage}`}>
      <form onSubmit={SignIn}>
        <h2>로그인</h2>
        <label>이메일 아이디</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className={style.errorMessage}>{message1}</span>
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className={style.errorMessage}>{message2}</span>
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
