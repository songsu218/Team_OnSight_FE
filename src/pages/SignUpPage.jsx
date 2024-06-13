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
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      setMessage3("영문,숫자,특수문자를 포함한 8자이상 입력해주세요");
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

    //백엔드로 POST 요청 및 응답
    const response = await fetch("http://localhost:8000/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, nick, password }),
    });
    console.log(await response.json());

    if (response.status === 200) {
      //회원가입완료
      // window.location.href = "/SignInPage";
    } else {
      alert("이미 존재하는 아이디 입니다.");
    }
  };

  return (
    <main className={`mw ${style.register}`}>
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
        <button type="submit">회원가입</button>
      </form>
      <p>
        이미 계정이 있으신가요?<Link to="/SignInPage">로그인페이지</Link>로 이동
      </p>
    </main>
  );
};

export default SignUpPage;
