import style from '../css/RankList.module.css';

const RankList = () => {
  return (
    <ul className={style.rankListCon}>
      <li className={style.rankListCard}>
        <strong>1</strong>
        <span>
          <img src="/img/test.jpg" alt="profile" />
          <strong>닉네임</strong>
        </span>
        <span>5,000</span>
      </li>
      <li className={style.rankListCard}>
        <strong>2</strong>
        <span>
          <img src="/img/test.jpg" alt="profile" />
          <strong>닉네임</strong>
        </span>
        <span>5,000</span>
      </li>
      <li className={style.rankListCard}>
        <strong>3</strong>
        <span>
          <img src="/img/test.jpg" alt="profile" />
          <strong>닉네임</strong>
        </span>
        <span>5,000</span>
      </li>
      <li className={style.rankListCard}>
        <strong>4</strong>
        <span>
          <img src="/img/test.jpg" alt="profile" />
          <strong>닉네임</strong>
        </span>
        <span>5,000</span>
      </li>
      <li className={style.rankListCard}>
        <strong>5</strong>
        <span>
          <img src="/img/test.jpg" alt="profile" />
          <strong>닉네임</strong>
        </span>
        <span>5,000</span>
      </li>
    </ul>
  );
};

export default RankList;
