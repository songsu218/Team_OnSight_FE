import { useState } from 'react';
import style from '../css/SignInPage.module.css';
import { Link, Navigate } from 'react-router-dom';

const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
// 카카오 로그인 인증 코드 요청
const link = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoApiKey}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const SignInPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message1, setMessage1] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const SignIn = async (e) => {
    e.preventDefault();
    console.log(id, password);

    try {
      const response = await fetch(`http://localhost:8000/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
      });
      const data = await response.json();
      console.log(data);
      console.log(data.id);

      if (data.token) {
        localStorage.setItem('onSightToken', data.token);
        setRedirect(true);
      } else if (data.message === 'nouser' || data.message === 'failed') {
        alert('아이디 또는 비밀번호가 맞지 않습니다.');
        setMessage1('아이디 또는 비밀번호가 맞지 않습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage1('로그인 중 오류가 발생했습니다.');
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const kakaoLoginHandler = () => {
    window.location.href = link;
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <main className={`mw ${style.SignInPage}`}>
      <form onSubmit={SignIn}>
        <h2>로그인</h2>
        <label>아이디</label>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label>비밀번호</label>
        <div className={style.eye}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="toggle-password" onClick={togglePasswordVisibility}>
            <img
              src={passwordVisible ? '/img/eye.png' : '/img/eye-slash.png'}
              alt={passwordVisible ? 'Hide password' : 'Show password'}
            />
          </p>
          <span className={style.errorMessage}>{message1}</span>
        </div>
        <button type="submit">로그인</button>
      </form>
      <button className={style.kakaoButtom} onClick={kakaoLoginHandler}>
        카카오로 로그인
      </button>
      <p className={style.moveSigninpage}>
        계정이 없으신가요? <Link to="/signuppage">회원가입</Link>
      </p>
    </main>
  );
};

export default SignInPage;

// 로그인 부분 재수정해야해욧 20240622

// useEffect(() => {
//   console.log("Kakao API Key:", kakaoApiKey);
//   console.log("Redirect URI:", REDIRECT_URI);
// }, []);

// const SignIn = async (e) => {
//   e.preventDefault();
//   console.log(id, password);

//   try {
//     const token = JSON.parse(localStorage.getItem('token')).access_token;
//     const response = await fetch(`http://localhost:8000/user/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ id, password }),
//       credentials: 'include',
//     });
//     const data = await response.json();
//     console.log(data);
//     console.log(data.id);

//     if (data.id) {
//       setRedirect(true);
//     }
//     if (data.message === 'nouser' || data.message === 'failed') {
//       setMessage1('아이디 또는 비밀번호가 맞지 않습니다.');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     setMessage1('로그인 중 오류가 발생했습니다.');
//   }
// };

// const kakaoLoginHandler = () => {
//   window.location.href = link;
// };
