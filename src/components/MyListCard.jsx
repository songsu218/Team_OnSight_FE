import style from '../css/MyListCard.module.css';

const MyListCard = () => {
  return (
    <a href="" className={style.card}>
      <span className={style.imgBox}>
        <img src="/img/test.jpg" alt="" />
      </span>
      <span></span>
      <strong className={style.hd}>
        2024 모두예술극장 기획프로그램 {'<'}어둠 속에, 풍경{'>'}
      </strong>
      <span>2024.06.20(목) ~ 2024.06.23(일)</span>
    </a>
  );
};

export default MyListCard;
