import style from "../../css/FeedList.module.css";

const CrewGroupfeed = () => {
  return (
    <div className={style.listData2}>
      <p className={style.label}>
        <span className={style.lbListNo}>번호</span>
        <span className={style.lbListTitle}>제목</span>

        <span className={style.lbListDate}>등록일</span>
        <span className={style.lbListCnt}>조회수</span>
      </p>
      <ul>
        <li>
          <div id="listNo"></div>
          <span className={style.listNo}>1</span>
          <div id="listTitle"></div>
          <span className={style.listTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At velit
            veniam asperiores perferendis dignissimos odit quae quasi, adipisci
            voluptas ipsam accusantium similique animi neque a repellat porro
            iusto nulla facilis!
          </span>
          <div id="listDate"></div>
          <span className={style.listDate}>2024.06.19</span>
          <div id="listCnt"></div>
          <span className={style.listCnt}>105</span>
        </li>
        <li>
          <div id="listNo"></div>
          <span className={style.listNo}>2</span>
          <div id="listTitle"></div>
          <span className={style.listTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo,
            provident temporibus id repudiandae, praesentium magnam rem magni
            labore vero numquam nulla. Facere voluptates necessitatibus eveniet,
            assumenda dolore doloribus itaque.
          </span>
          <div id="listDate"></div>
          <span className={style.listDate}>2024.06.19</span>
          <div id="listCnt"></div>
          <span className={style.listCnt}>105</span>
        </li>
      </ul>
    </div>
  );
};

export default CrewGroupfeed;

{
  /* 시간이 된다면 좋아요 기능추가 */
}
