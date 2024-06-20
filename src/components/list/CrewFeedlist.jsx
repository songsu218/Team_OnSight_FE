import style from "../../css/CrewFeedlist.module.css";

const CrewFeedlist = () => {
  return (
    <div className={style.listData2}>
      <p className={style.label}>
        <span className={style.lbListNo}>번호</span>
        <span className={style.lbListCrew}>크루</span>
        <span className={style.lbListTitle}>제목</span>
        <span className={style.lbListDate}>등록일</span>
        <span className={style.lbListCnt}>조회수</span>
      </p>
      <ul>
        <li>
          <div id="listNo"></div>
          <span className={style.listNo}>1</span>
          <div id="listCrew"></div>
          <span className={style.listCrew}>크루크루크루크루크루</span>
          <div id="listTitle"></div>
          <span className={style.listTitle}>ㅇㅇㅇㅇ</span>
          <div id="listDate"></div>
          <span className={style.listDate}>2024.06.19</span>
          <div id="listCnt"></div>
          <span className={style.listCnt}>105</span>
        </li>
        <li>
          <div id="listNo"></div>
          <span className={style.listNo}>1</span>
          <div id="listCrew"></div>
          <span className={style.listCrew}>크루크루크루크루크루</span>
          <div id="listTitle"></div>
          <span className={style.listTitle}>ㅇㅇㅇㅇ</span>
          <div id="listDate"></div>
          <span className={style.listDate}>2024.06.19</span>
          <div id="listCnt"></div>
          <span className={style.listCnt}>105</span>
        </li>
      </ul>
    </div>
  );
};

export default CrewFeedlist;
