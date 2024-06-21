import style from '../css/RankList.module.css';

const RankList = ({ hoveredCard }) => {
  return (
    <ul className={style.rankListCon}>
      <div className={style.btnBox}>
        <button>전체</button>
        <button>주간</button>
        <button>오늘</button>
      </div>
      {[1, 2, 3, 4, 5].map((i) => (
        <li
          key={i}
          className={`${style.rankListCard} ${
            hoveredCard === i ? style.hover : ''
          }`}
        >
          <strong>{i}</strong>
          <span>
            <img src="/img/test.jpg" alt="profile" />
            <strong>닉네임</strong>
          </span>
          <span>5,000</span>
        </li>
      ))}
    </ul>
  );
};

export default RankList;
