import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../css/SignUpPage.module.css";

const SignUpPage = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [pdcon, setPdcon] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

  const register = async (e) => {
    e.preventDefault();
    console.log(id);
    if (!/^[a-zA-Z0-9_-]{4,10}$/.test(id)) {
      setMessage1("4~10자 내외 영문,숫자,특수기호,_,-만 사용 가능합니다.");
      return;
    } else {
      setMessage1("");
    }
    if (!/^[a-zA-Z0-9가-힣\u4E00-\u9FFF_-]{1,10}$/.test(nick)) {
      setMessage2("닉네임은 10자 이내로 입력하세요.");
      return;
    } else {
      setMessage2("");
    }
    if (
      !/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      setMessage3("영문소문자,숫자,특수문자를 포함한 8자이상 입력해주세요");
      return;
    } else {
      setMessage3("");
    }
    if (password !== pdcon) {
      setMessage4("동일한 패스워드를 입력하세요");
      return;
    } else {
      setMessage4("");
    }

    try {
      //백엔드로 POST 요청 및 응답
      const response = await fetch("http://localhost:8000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nick, password }),
      });
      // console.log(await response.json());

      // if (response.status === 200) {
      // window.location.href = "/SignInPage";
      // } else {
      //   alert("이미 존재하는 아이디 입니다.");
      // }

      if (response.ok) {
        // window.location.href = "/SignInPage";
      } else {
        const errorData = await response.json();
        alert(errorData.message || "이미 존재하는 아이디 입니다.");
      }
    } catch (error) {
      alert("서버와의 통신 중 오류가 발생했습니다. 다시 시도해 주세요.");
      console.error("Error during fetch:", error);
    }
  };

  return (
    <main className={`${style.register}`}>
      <form onSubmit={register}>
        <h2>회원가입</h2>
        <section>아이디입력(4~10자)</section>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          required
        />
        <span>{message1}</span>
        <section>닉네임</section>
        <input
          type="text"
          placeholder="닉네임"
          value={nick}
          onChange={(e) => {
            setNick(e.target.value);
          }}
          required
        />
        <span>{message2}</span>
        <section>비밀번호</section>
        <div className={style.eye}>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="패스워드"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <p className="toggle-password" onClick={togglePasswordVisibility}>
            {passwordVisible ? "👁️" : "🔒"}
          </p>
        </div>
        <span>{message3}</span>
        <section>비밀번호 확인</section>
        <div className={style.eye}>
          <input
            type={passwordVisible2 ? "text" : "password"}
            placeholder="확인"
            value={pdcon}
            onChange={(e) => {
              setPdcon(e.target.value);
            }}
            required
          />
          <p className="toggle-password" onClick={togglePasswordVisibility2}>
            {passwordVisible2 ? "👁️" : "🔒"}
          </p>
        </div>
        <span>{message4}</span>
        <button type="submit">회원가입</button>
      </form>
      <p>
        이미 계정이 있으신가요?<Link to="/SignInPage">로그인페이지</Link>로 이동
      </p>
    </main>
  );
};

export default SignUpPage;
