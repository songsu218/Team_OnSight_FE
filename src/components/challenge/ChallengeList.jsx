import style from "../../css/ChallengeList.module.css";

const RecordList = (props) => {
  const { subject, detail, src , dialog} = { ...props };

  return (
    <div className={style.swiperBox}>
      {/* <div className={style.upperBox}>{subject}</div> */}
      <div className={style.contentBox}>
        <div className={style.levelBox}>
          <strong>{subject}</strong>
          <span>{detail}</span>
          <div className={style.levelArea}>
          </div>
        </div>
      </div>
      <div className={style.contentBox}><img src={src} alt="record" /></div>
      <div className={style.button_container}><button>참가</button></div>
    </div>
  );
};

export default RecordList;
