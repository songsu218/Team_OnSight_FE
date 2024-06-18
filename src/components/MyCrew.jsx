import style from "../css/MyCrew.module.css";
// import { CrewDetail } from "./CrewDetail";

export const MyCrew = () => {
  const nick = "nickname";
  return (
    <article>
      <div className={style.leftCon}>
        <div>
          <span>나의 크루</span>
          <img src="/img/bol.jpg" alt="img" />
          <p>크루명</p>
          <img src="/img/noimg.jpg" alt="img" />
          <p>{nick}님 가입된 크루가 없습니다.</p>
          <img src="/img/noimg.jpg" alt="img" />
          <p>{nick}님 가입된 크루가 없습니다.</p>
        </div>
      </div>
    </article>
  );
};
