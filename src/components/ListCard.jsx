import style from '../css/ListCard.module.css';

const ListCard = () => {
  return (
    <a href="" className={style.card}>
      <span className={style.imgBox}>
        <img src="/img/1718755074832.png" alt="" />
      </span>
      <strong className={style.tit}>
        2024 모두예술극장 기획프로그램 {'<'}어둠 속에, 풍경{'>'}
      </strong>
      <span>수원클라이밍센터</span>
      <span>2024.06.20(목) ~ 2024.06.23(일)</span>
    </a>
  );
};

export default ListCard;
