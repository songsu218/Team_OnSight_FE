import style from "../css/ChallengeList.module.css";

const ChallengeList = () => {
  return (
    <div className={style.swiperBox}>
      <div className={style.areaBox}>
        <span>서울어쩌구챌린지</span>
        <p>현재 1등 누구냐</p>
      </div>
      <div className={style.innerBox}>
        <img src='/img/noimg.png' alt='thumbnail' />
        <button>참가</button>
      </div>
    </div>
  );
};

export default ChallengeList;
