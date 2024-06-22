// import { Link } from "react-router-dom";
import style from "../css/CrewDetail.module.css";
import CrewGroupfeed from "../components/list/CrewGroupfeed";
import { useState } from "react";
// import { Link } from "react-router-dom";

const CrewDetail = () => {
  // const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index, event) => {
    event.preventDefault();
    setActiveIndex(index);
    // 예: navigate(`/somepath/${index}`);
  };

  return (
    <main className={`${style.mainCrew} viewCon`}>
      <article>
        <div className={style.leftCon}>
          <span>크루원 찾기</span>
          <div className={style.searchCon}>
            <input
              type="text"
              className={style.search}
              placeholder="크루원 검색"
            />

            <form action="/submit" method="POST">
              <button type="submit" class={style.iconButton}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <ul className={style.mycrewCon}>
            <li></li>
          </ul>
        </div>
      </article>
      <section className={style.rightCon}>
        <div className={style.righttxt}>
          <div className={style.crewName}>
            <h2>크루명</h2>
            <span>활동지역</span>
          </div>
          <div className={style.Menu}>
            <nav className={style.page_nav}>
              <ul>
                <li className={activeIndex === 0 ? style.active : ""}>
                  <a
                    href="#"
                    className={style.page_link}
                    onClick={(event) => handleClick(0, event)}
                    title="챌린지 일정 페이지 이동 링크"
                  >
                    글쓰기
                  </a>
                </li>
                <li className={activeIndex === 1 ? style.active : ""}>
                  <a
                    href="#"
                    className={`${style.page_link}`}
                    onClick={(event) => handleClick(1, event)}
                    title="나의 챌린지 보기 페이지 이동 링크"
                  >
                    크루관리
                  </a>
                </li>
                <li className={activeIndex === 2 ? style.active : ""}>
                  <a
                    href="#"
                    className={`${style.page_link}`}
                    onClick={(event) => handleClick(2, event)}
                    title="나의 챌린지 보기 페이지 이동 링크"
                  >
                    크루관리
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={style.introCrew}>
          <img src="img/on_sight.jpg" alt="크루이미지" />
          <p>
            소개문구 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non officiis, quia suscipit provident earum at, quam veniam
            temporibus fugiat, harum quis dignissimos nisi possimus nemo beatae
            laboriosam quasi totam cumque.
          </p>
          <span>피드</span>
        </div>
        <CrewGroupfeed />
      </section>
    </main>
  );
};

export default CrewDetail;
