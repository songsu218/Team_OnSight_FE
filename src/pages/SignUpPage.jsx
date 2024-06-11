import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../css/SignUpPage.module.css";

const SignUpPage = () => {
  const [emailId, setEmailId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [pdcon, setPdcon] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");

  const register = async (e) => {
    e.preventDefault();
    console.log(emailId);
    if (!/^[a-z0-9_-]{5,20}$/.test(emailId)) {
      setMessage1(
        "아이디는 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다."
      );
      return;
    } else {
      setMessage1("");
    }
    if (nick.length > 12) {
      setMessage2("닉네임은 12자 이하로 입력하세요.");
      return;
    } else {
      setMessage2("");
    }
    if (password.length < 4) {
      setMessage3("4자이상 입력해주세요.");
      return;
    } else {
      setMessage3("");
    }
    if (password !== pdcon) {
      setMessage4("재확인이 필요합니다.");
      return;
    } else {
      setMessage4("");
    }

    //백엔드로 POST 요청 및 응답
    const response = await fetch("http://localhost:3000/SignUpPage", {
      method: "POST",
      body: JSON.stringify({ emailId, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.status === 200) {
      //회원가입완료
      window.location.href = "/SignInPage";
    } else {
      alert("이미 존재하는 아이디 입니다.");
    }
  };

  return (
    <main className={`mw ${style.register}`}>
      <h2>회원가입</h2>
      <form onSubmit={register}>
        <section>이메일 아이디</section>
        <input
          type="text"
          placeholder="이메일 아이디"
          value={emailId}
          onChange={(e) => {
            setEmailId(e.target.value);
          }}
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
        />
        <span>{message2}</span>
        <section>비밀번호</section>
        <input
          type="password"
          placeholder="패스워드"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <span>{message3}</span>
        <section>비밀번호 확인</section>
        <input
          type="password"
          placeholder="확인"
          value={pdcon}
          onChange={(e) => {
            setPdcon(e.target.value);
          }}
        />
        <span>{message4}</span>
        <button type="submit">가입하기</button>
      </form>
      <p>
        이미 계정이 있으신가요?<Link to="/SignInPage">로그인페이지</Link>로 이동
      </p>
    </main>
  );
};

export default SignUpPage;
