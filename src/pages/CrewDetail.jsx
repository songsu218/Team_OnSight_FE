import React from "react";
import style from "../css/CrewDetail.module.css";

export const CrewDetail = () => {
  return (
    <div>
      <aside className={style.detailCon}></aside>
      <div className={style.topCon}>
        <img src="/img/bol.jpg" alt="#" />
        <div className={style.Crewname}>
          <h2>크루명</h2>
          <button>가입하기</button>
          <button>글쓰기</button>
        </div>
        <div className={style.introCon}>
          <p>
            소개문구: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptate magni illum adipisci dicta itaque, nobis repellendus ab
            sint explicabo quo non ducimus numquam, ea incidunt saepe laudantium
            magnam quidem. Asperiores.
          </p>
        </div>
        <div className={style.feednum}>
          <span>피드수 : ㅇㅇ 개</span>
          <hr />
        </div>
      </div>
      <div className={style.feeds}>
        <ul className={style.feedsul}>
          <li>
            <img src="/img/imgsample.jpg" alt="" />
            <span>피드제목</span>
            <i class="fa-solid fa-ellipsis"></i>
          </li>
          <li>
            <img src="/img/imgsample.jpg" alt="" />
            <span>피드제목</span>
            <i class="fa-solid fa-ellipsis"></i>
          </li>
          <li>
            <img src="/img/imgsample.jpg" alt="" />
            <span>피드제목</span>
            <i class="fa-solid fa-ellipsis"></i>
          </li>
          <li>
            <img src="/img/imgsample.jpg" alt="" />
            <span>피드제목</span>
            <i class="fa-solid fa-ellipsis"></i>
          </li>
          <li>
            <img src="/img/imgsample.jpg" alt="" />
            <span>피드제목</span>
            <i class="fa-solid fa-ellipsis"></i>
          </li>
          <li>
            <img src="/img/imgsample.jpg" alt="" />
            <span>피드제목</span>
            <i class="fa-solid fa-ellipsis"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
